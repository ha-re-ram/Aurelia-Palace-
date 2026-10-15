# Aurelia Palace — Animation & Interaction Audit

**Date:** 9 October 2026
**Subject:** `Standalone Luxury Edition` — the standalone Aurelia Palace website
**Reference (read-only):** locally cloned `www.aureliapalace.com`
**Status:** audit only — **no files have been created or modified** in either project.

---

## 0. Scope and method

| Item | Detail |
|---|---|
| Audited target | `standalone-edition/index.html` (2,172 lines; 818-line `<style>` block, lines 17–835; 538-line `<script>` IIFE, lines 1632–2170), plus `assets/` and `_s1/` |
| Reference inspected | `index.html` (264 KB), `css/44503cd01f9af4b7.css` (363 KB vendor+app), `css/b099a885cb673491.css` (9.3 KB), 10 JS bundles, `imgs/` (13 PNG) |
| Method | full read of Aurelia Palace CSS/JS/markup; grep-level evidence extraction and minified-bundle fingerprinting of the reference; visual read of the existing `_s1/` screenshots |
| Reference directory | **not written to** — inspected only |

---

## 1. Current animation implementation — Aurelia Palace

### 1.1 Architecture (good news first)

The site is a **single self-contained HTML file with zero dependencies** (~127 KB, no build step, no runtime library, no external requests except Google Fonts). Motion is already organised as a **token system** (lines 60–83), which is the single most valuable thing about the current codebase:

```
--m-quick:150ms  --m-base:340ms  --m-slow:720ms  --m-slower:1050ms  --m-cine:1250ms
--m-soft (calm)  --m-enter (decelerate)  --m-spring (overshoot)
--m-stagger:102ms   --hero-hold:6500ms
```

Everything animates `transform` / `opacity` / `clip-path` only. There is **one passive `scroll` listener gated by one `requestAnimationFrame` flag**, plus **4 `IntersectionObserver` instances** total — a genuinely disciplined setup, better than most agency sites.

### 1.2 Inventory of what animates today

| # | Effect | Implementation | Where |
|---|---|---|---|
| 1 | Hero slideshow | 3 stacked slides, 1500 ms opacity crossfade; each slide runs its own drift keyframe (`drift1/2/3`) synced to `--hero-hold` (6500 ms) | CSS 246–261 + JS 1993–2051 |
| 2 | Hero slide indicators | 3 ticks, gold fill bar via `tickFill` keyframe, `aria-current` driven | CSS 272–281 + JS 2018–2040 |
| 3 | Hero exit parallax | Copy lifts `-0.16y` and fades to 0.15 opacity; image drifts `+0.22y` — opposing motion for depth | JS 1668–1682 |
| 4 | Gold light sweep | One-shot skewed gradient wipe across the hero on entry (`sweep`, 1250 ms) | CSS 611–617 |
| 5 | Drifting gold motes | 14 JS-generated particles, randomised size/left/`--dx`/duration(15–31 s), `animationPlayState` paused when hero is off-screen | CSS 619–628 + JS 1944–1968 |
| 6 | Feature marquee | Duplicated track, `mq` keyframe 42 s linear infinite, hover pauses | CSS 318–325 |
| 7 | Scroll cue | 42 px gradient line, `cue` keyframe 2.4 s infinite | CSS 311–313 |
| 8 | Scroll reveals | `.rv` families: directional (`rv-l` −46 px, `rv-r` +46 px), scale (`rv-s`, `rv-z`), clip-path (`rv-m`), plus `rv-d1…rv-d8` delays from `--m-stagger`. 79 elements. One IO at `threshold:.12`, `rootMargin:0 0 -6% 0`, unobserved after firing | CSS 156–171 + JS 1756–1773 |
| 9 | Masked headline reveal | `.rv-lines .line-i` translate `110% → 0` over 1250 ms with 3-tier cascade; hero h1 revealed on first rAF | CSS 174–180 + JS 1769–1772 |
| 10 | Curtain photo reveal | `.cut` `clip-path:inset(0 0 100% 0) → inset(0 0 0 0)` + inner image 1.1 → 1.0; applied to 3 venue/pool figures + 1 story figure | CSS 642–654 |
| 11 | Self-drawing icons | `stroke-dasharray:1000` → `0` over 1050 ms; `.ticks` children staggered via `--i` | CSS 656–664 |
| 12 | Staggered lists | `.ticks li`, `.venue-feat li`, `.room-feat li`, `.amen` rise 16 px with `--i` stagger | CSS 666–681 + JS 1934–1941 |
| 13 | Nav state machine | `at-top` (transparent) → `small` (64 px, blur, shadow, border) at `y>40`; brand mark 38 → 32 px; logo drop-shadow at top | CSS 189–195, 284–287 + JS 1661–1665 |
| 14 | Reading progress | Gold hairline, `scaleX` from scroll ratio | CSS 604–607 + JS 1684–1688 |
| 15 | Sliding nav underline | Single `#navInd` repositioned on hover/focus/scroll-active, `aria-current` set in sync | CSS 206–211 + JS 1714–1747 |
| 16 | Mobile drawer | `drawerIn` panel + `drawerLink` per-link cascade (`--di` 90 ms + 55 ms/link); real focus trap + focus restore | CSS 226–232 + JS 1806–1841 |
| 17 | Card pointer tilt | `perspective(900px) rotateX/Y`, rAF-throttled, plus a JS-injected `.glare` specular radial | CSS 693–700 + JS 1903–1931 |
| 18 | Magnetic buttons | `--mx/--my` offsets (±7 px / ±5 px) on 3D-translated buttons, plus a one-shot `shine` sweep | CSS 120–137 + JS 1889–1902 |
| 19 | Animated counters | 15 `[data-count]` elements, 1500 ms cubic ease-out, `en-IN` formatting, IO at `.45` | JS 1776–1799 |
| 20 | Gallery lightbox | Fade-in overlay, zoom-in figure, arrows, arrow-key + swipe navigation, focus restore | CSS 468–476, 738–747 + JS 1845–1883, 1958–1985 |
| 21 | Image hover zoom | `.gal` 1.07 + caption rise; `.venue` 1.055 over 1.3 s; `.room` 1.1 over 1.1 s; amenity icon rotation + colour flip | CSS 383, 412–413, 457–463, 436–445 |
| 22 | Sticky dock + back-to-top | Staggered rise at 520 ms, WhatsApp pulse ring, `.show` past `y>700` | CSS 726–734 + JS 1749, 1664 |
| 23 | Form micro-motion | `:focus-within` label lift, gold underline draw via `background-size`, `shake` on invalid, chip spring press | CSS 707–723 |
| 24 | Reduced motion | Global `.001ms` kill-switch **plus** explicit opt-outs for every added effect (hero drift, sweep, motes, beam, progress, tilt, glare, magnet, curtain, strokes, masked lines) | CSS 811–834 + JS `reduce` gates at 1637, 1668, 1680, 1691, 1758, 1777, 1887, 2064 |

Also present: gold beam across the ballroom panel (`.pillar.lit`, 1700 ms background-position), `lbIn`, `ansIn` (FAQ), `pulse`, `shake`, `drawerIn/Link`, and a reveal-once pattern (`unobserve` after firing) that avoids re-animation churn.

### 1.3 Defects, dead hooks and inconsistencies found

| # | Finding | Evidence | Impact |
|---|---|---|---|
| D1 | **`.hero.ready` is a dead hook** — JS adds the class 120 ms after load, but no CSS rule consumes it | set at line 2051; zero `.hero.ready` rules in the stylesheet | Intended staged hero entrance never happens; costs a class toggle for nothing |
| D2 | **Gallery cascade is wired but never fires** — JS computes `--i` for every `.gal` child, but no `transition-delay` uses `--i` inside `.gal`, and the 12 figures carry no `rv-d*` | JS 1934–1941; figures at lines 1331–1342 all `class="rv rv-s"` | The gallery reveals as one flat block — the intended rhythm is missing |
| D3 | **`rv-m` (clip-path reveal variant) is defined but unused** | CSS 162 | Available vocabulary not applied to any section heading |
| D4 | **`.cut` depends on a `.rv` ancestor** — correct and documented, but fragile: the curtain only fires because each `.cut` happens to sit inside an `.rv` | CSS 646–654; `.venue-media cut` inside `article.venue.rv`; `.pool-media cut` inside `div.pool.rv` | Any future `.cut` outside an `.rv` would stay permanently clipped; good comment, weak guardrail |
| D5 | **`will-change` is never released** — 79 `.rv` elements plus `[data-plx]`, `.hero-media`, `.hero-in` hold GPU hints permanently | CSS 157, 631, 246, 265 | Avoidable layer memory on long pages; mobile memory pressure risk |
| D6 | **Reveal gesture repeats** — most sections use the centred default (rise 30 px), so entry cadence can read as one repeated effect | 79 `.rv` elements, of which 5 use lateral variants | Design dilution rather than a bug |
| D7 | **`_s1/` is 3.1 MB of QA screenshots not referenced anywhere** | 4 PNGs; `grep -c "_s1"` in `index.html` = 0 | Not a code defect; delivery weight only |
| D8 | **Hero is a single image-led section under-using the existing vocabulary** — no entrance choreography, no pause control, and the transition is a pure crossfade with no directional or scale intent | CSS 246–261 | The strongest opportunity in the whole page |
| D9 | **No pause affordance for auto-playing motion** (hero slideshow, marquee) beyond hover-pause on the marquee | CSS 320; JS 2036–2045 | Minor a11y gap (WCAG 2.2.2 relates to >5 s auto-updating content) |
| D10 | **Two inline `transform:!important` overrides** in the ≤1080 px breakpoint (`hero-in`) | CSS 799 | Works, but brittle if the hero layer model changes |

**Not defects:** no layout-shift risk found (all images carry `width`/`height`; first hero image uses `fetchpriority="high"`), and no JS-dependency trap (hidden pre-reveal states are gated behind `html.js`, so a script failure leaves content visible).

---

## 2. Reference site — verified inventory (what it actually does)

Everything below is evidence-backed; minified one-liners were fingerprinted, not pasted.

### 2.1 Declared stack

| Library | Present? | Evidence |
|---|---|---|
| **AOS 2.x** | ✅ drives ~all reveals | 130 `data-aos` attributes: `fade-up` ×88, `fade-left` ×22, `fade-right` ×14, `fade-down` ×4, `zoom-in` ×2; `data-aos-duration` 900/1000; `data-aos-delay` 100–1600; library defaults `{offset:120, once:false, mirror:false, throttleDelay:99}`; site init `{easing:"ease-out-cubic", offset:50, mirror:false}`. Its stylesheet is inlined into the 363 KB vendor CSS (602 `[data-aos]` selectors). Base hidden state: `[data-aos=fade-up]{transform:translate3d(0,100px,0)}` |
| **GSAP 3.12.7** | ✅ but *core only, 4 tweens* | `js/_app-*.js`: version string `3.12.7`, 31 `gsap` hits, plugin self-registration. The only site tweens are the **cursor follower** |
| **Lenis 1.2.3** | ✅ | `window.lenisVersion="1.2.3"`; init `new Lenis({duration:1.1, easing:1-(1-t)^3, smoothTouch:true, touchMultiplier:2})` + own rAF loop; CSS contract `html.lenis{height:auto}`, `.lenis-smooth{scroll-behavior:auto!important}` |
| **slick-carousel** (react-slick) | ✅ | bundle `66-*.js`; SSR markup `slick-slider slick-initialized`; config `autoplay:true, speed:2000, slidesToShow:4/5, arrows:false` |
| **yarl lightbox** | ✅ (not on homepage) | bundle `406-*.js` + its 4 keyframes |
| **ScrollTrigger** | ❌ **not shipped** | only the lazy-plugin lookup string inside GSAP core; `pin` / `scrub` / `toggleActions` = 0 occurrences in **all** bundles |
| **three.js / WebGL / canvas / `<video>`** | ❌ | 0 matches for `three`, `THREE`, `webgl`, `shader`; 0 `<video>`, 0 `.mp4` |
| **framer-motion, locomotive, barba, anime.js, ScrollMagic, Swiper, Splide, AOS alternatives** | ❌ | 0 matches each |

Payload reality check: **~8.2 MB** to deliver this homepage — 363 KB of vendor CSS, a 264 KB HTML shell, 10 JS bundles — of which the *visible motion* is AOS + one GSAP cursor + Lenis.

### 2.2 Visible patterns worth learning from

| Pattern | How it is built | Evidence |
|---|---|---|
| **Hero** | Static full-height `<img>` (`.banner-img.home .home-img{height:100svh}`) + dark 25 % scrim + absolutely-positioned 90 px gold circular CTA. Headline animates in with `data-aos="zoom-in" duration 1000`, sub-line `delay 200`. **No slideshow, no video, no canvas.** | `index.html` @10981; CSS @264545, @264587, @266202 |
| **Nav state switch** | `nav{position:fixed}`; past **1 % of viewport height** a `scrolled` class → white background + bottom border, text/buttons flip to black, **and the logo swaps white → gold** | CSS @252240, @253723; JS @184566; logo swap in `_app` @186015 |
| **Hamburger → full-height curtain menu** | Bootstrap offcanvas with custom skin: `.toggle-full{display:flex;height:100%;transition:all .8s}` — a **two-panel curtain**, left panel 48 % wide in dark green `#162d20`, right panel carries a preview image | CSS @254515 |
| **Menu links animate themselves in** | The drawer links are AOS `fade-right` with delays 100–1600 ms | HTML @8015; `_app` @187494 |
| **Hover preview image swap** | Hovering a nav item swaps `#bgbn-image`'s src and re-triggers `animation:fadein .7s ease-in-out` | `_app` @193515 |
| **Custom two-ball cursor** | SSR markup `.cursor__ball--big` (30 px, `rgba(143,118,60,.63)`) + `--small` (10 px, `#8f763c`), `position:fixed; z-index:1000; pointer-events:none`. GSAP: big ball `duration:2, ease:"power3"`, small ball `duration:.6`; on `.hoverable` → `scale:3`. **Both hidden ≤510 px. Native cursor is NOT hidden** | HTML @1633; CSS @251288–@251670; JS @184867 |
| **Two-layer background swap in `.section.slider`** | slick carousel drives two stacked layers: one swaps immediately, the second after `setTimeout(…,1000)`, with declared `transition:background-image .5s` | CSS @281195; JS @93661 |
| **Honest limitation found** | `background-image` is a discrete property; `transition-behavior:allow-discrete` is **not** declared → what ships is a **hard swap, not a crossfade**. The intended crossfade is broken in the reference itself | 0 matches for `allow-discrete` |
| **Only native sticky moment** | `.section.wellness .image-outer{position:sticky;top:0}` — no JS pinning anywhere | CSS @324947 |
| **Arrow nudge keyframe** | `@keyframes slide1{0%,to{transform:translate(0)}50%{transform:translate(10px)}}` on `.arrow-anim-v1` (6 CTAs) | CSS @324751 |
| **No loader / preloader at all** | `preloader` = 0 matches; first paint is server-rendered with AOS offsets already applied | `index.html` |

### 2.3 What the reference does **not** do (so we do not chase it)

No ScrollTrigger pinning or scrubbing · no parallax (the `.parallax-container` class has **zero CSS and zero handlers** — dead) · no clip-path or mask reveals · no marquee/ticker · no counters (the `1,2,17,18…` slide numbers are static text) · no preloader · no scroll-progress bar · no theme switch · no magnetic buttons · no underline-sweep nav hovers (hovers are colour + italic swaps) · no text scramble · no page transitions · no scroll-driven CSS animations.

### 2.4 Motion hygiene — where the reference is *worse* (we will not copy this)

`prefers-reduced-motion` is **not honoured for any site-authored motion** — all matches are library defaults (Bootstrap, yarl, react-hot-toast). AOS and the Lenis/cursor init contain no reduced-motion branch, so the custom cursor, smooth-scroll hijacking and 130 reveals all run unchanged for users who asked not to be animated. Focus rings are removed on the menu toggle (`box-shadow:none`) and slick (`outline:none`). The custom cursor is hidden by width only, so on 768–1024 px touch devices it exists but never moves. Lenis applies smooth scroll on touch too (`smoothTouch:true`).

**Aurelia Palace already beats the reference on all four of these points.** Preserving that lead is a hard constraint of this work.

---

## 3. Comparison and gap analysis

| Capability | Aurelia Palace today | Reference | Verdict |
|---|---|---|---|
| Scroll reveals | 6 gesture variants + 8 delay tiers, 1 IO, `unobserve` after firing | 5 AOS variants, 130 elements, throttled scroll listener, `once:false` | **Aurelia is stronger.** Nothing to import; only cadence to improve |
| Hero | 3-frame crossfade + per-frame drift + exit parallax + motes + sweep | Static image + AOS zoom-in | **Aurelia is stronger.** Opportunity is choreography, not features |
| Cinematic entrance | Partial; `.hero.ready` hook is dead | None | **Opportunity** (P1) |
| Section-reveal rhythm | Present but mostly repetitive; gallery cascade dead | Uniform AOS `fade-up` with explicit delays | **Opportunity** (P1) |
| Menu transition | Drawer fade + link cascade (functional, low drama) | Two-panel `all .8s` curtain with preview image | **Opportunity** (P2), original implementation |
| Nav state change | `at-top` ↔ `small` + progress bar + sliding underline | `.scrolled` + logo swap | **Aurelia is stronger** |
| Hover effects | Zoom, caption rise, icon rotation, glare, tilt | Colour/italic/scale swaps | **Aurelia is stronger** |
| Custom cursor | None | Two-ball GSAP follower | **Recommend omit** (see P2-9) |
| Smooth scroll | Native `scroll-behavior:smooth`, `reduce`-aware | Lenis hijack (breaks native anchors, ignores `reduce`) | **Keep ours** |
| Pinned/sticky moment | None | One native `position:sticky` image | **Opportunity** (P2), native CSS only |
| Lightbox | Full build (arrows, swipe, focus restore) | yarl (not used on homepage) | **Aurelia is stronger** |
| Reduced motion | Comprehensive, explicit, effect-by-effect | Absent | **Aurelia is stronger — protect this** |
| Payload | 127 KB HTML + 2.1 MB images, no deps | ~8.2 MB, 10 bundles, 4 libraries | **Aurelia is stronger** |

**Conclusion:** Aurelia Palace does not need the reference's techniques to catch up — it has already surpassed them. The reference supplies two genuine ideas worth adapting *conceptually*: (1) a **staged, choreographed hero entrance** rather than a slideshow that simply starts, and (2) a **curtain-style menu transition** with a deliberate duration (`0.8s`) instead of a fade. Both are reproducible in pure CSS with the existing token system, with original code and no assets borrowed.

---

## 4. Recommended improvements

### P1 — highest value, existing code and tokens only, no libraries

1. **Hero entrance choreography (activate the dead `.hero.ready` hook).** Stage the first paint: veil eases in → masked headline lines rise → CTAs/badges stagger → ticks and marquee settle last; the first slide's drift starts only after the entrance, so slow zoom and entrance do not fight. Pure CSS + the class the JS *already* toggles.
2. **Hero transition upgrade.** Keep the crossfade but add direction-aware motion: outgoing frame drifts/scales out while the incoming frame settles, so a slide change reads as a camera move rather than a light switch. Add a **visible pause/play control** on the tick group (addresses D9/WCAG 2.2.2).
3. **Restore the gallery cascade (fixes D2).** Use the `--i` values JS already writes — one `transition-delay: calc(var(--m-stagger) * var(--i))` rule inside `.gal` (capped, like the existing tail-cap) — so the 12 tiles ripple instead of snapping together.
4. **Distribute the reveal vocabulary (addresses D6, uses D3).** Assign distinct, content-appropriate gestures per section: masked clip reveal (`rv-m`, currently unused) for 2–3 pillar headlines, lateral for editorial splits, scale for card rows. Keeps one system, removes the "same effect everywhere" read.
5. **Extend `.cut` usage** beyond the current 4 figures (e.g. the ballroom feature media) so the curtain gesture becomes the site's signature photo entrance — deliberately, not incidentally (see risk R3).
6. **`will-change` hygiene (fixes D5).** Drop the hint once a reveal has fired (`transitionend`/IO callback) and keep it only for genuinely continuous layers (hero media, marquee).
7. **Motion-budget clean-up (addresses D10).** Replace the two `!important` hero overrides with an explicit small-screen layer model.

### P2 — small original additions, still no third-party libraries

8. **Curtain menu transition.** Rework the drawer entry into a short panel wipe (clip-path/translate, ~600–800 ms, `--m-enter`) with the existing per-link cascade retained. Original code; no reference styling, colours, copy or images reused.
9. **Custom cursor — recommended OMIT.** The reference's two-ball GSAP follower adds a payload and a13px hit-target hazard, hides nothing useful, is absent on touch ≤510 px, and has no `reduce` branch. Aurelia's existing magnetic buttons + tilt + glare already give a finer, more tasteful pointer identity. **If you want it anyway**, I would build a single restrained gold ring (fine-pointer only, `reduce`-gated, rAF-throttled, hidden on touch, native cursor retained) — opt-in, and cheap to remove.
10. **One native sticky editorial moment.** Give a single image column (`#story` figstack or `#pool`) `position:sticky` so it holds while its copy scrolls — the reference's one good structural idea, implementable in CSS with no JS and no ScrollTrigger. Requires verifying ancestor `overflow` first (see R8).
11. **Parallax on venue photography.** Extend the existing `data-plx` mechanism to the 3 venue media panels at a low coefficient (~0.05–0.08) for depth already consistent with the hero. Reuses code that exists; no new pattern.
12. **Focus-visible polish on new controls** (the hero pause control) so the a11y standard stays uniform.

### P3 — would require additional libraries (recommend against)

13. **ScrollTrigger / GSAP** — only justified for pinning and scrubbing; item 10 covers the one pinning case natively, and continuous scrubbing is not worth a ~70 KB dependency on this page.

14. **Lenis / locomotive smooth scroll** — would fight native anchor navigation (the entire page is anchor-driven), break `scrollIntoView` in the enquiry flow, and needs its own `reduce` guard. **Recommend no.**

15. **Swiper / Splide for the gallery** — the hand-built lightbox is already complete and accessible; a carousel library would be a regression.

16. **Video hero / WebGL** — the reference has neither, there is no video asset, and a hero video would materially hurt LCP on Indian mobile networks. **Recommend no.**

---

## 5. Affected files

| File | Change | Notes |
|---|---|---|
| `standalone-edition/index.html` | **The only file edited** — CSS lines 17–835 (add ~4 keyframes + extend existing rule groups), a few markup hooks (hero pause control, `rv-d*`/variant classes on gallery, section headings), and script 1632–2170 (hero choreography, pause toggle, `will-change` release, stagger cap) | All additions use existing tokens; no new tokens required |
| `standalone-edition/assets/**` | Untouched | Existing `@sm` WebP variants already cover `srcset` |
| `standalone-edition/_s1/**` | Untouched (3.1 MB QA screenshots; unreferenced — flag only) | Optionally move out of the delivery later |
| New files | None required. Verification screenshots would go in a **new** `_s2/` folder (before/after) | Not part of the site |
| Dependencies / build | **None added.** No CDN, no npm, no bundler | Constraint preserved |
| Booking / enquiry flow | **Untouched** — validation, WhatsApp hand-off, prefill, `WA_NUMBER`, form markup and copy stay byte-identical | Constraint preserved |
| Branding / content / copy | **Untouched** — palette, fonts, headings, all body copy, phone, address | Constraint preserved |
| Reference clone | **Untouched, read-only.** Zero JS, CSS, text, logos or images copied | Constraint preserved |

---

## 6. Risks and mitigations

| # | Risk | Likelihood / severity | Mitigation |
|---|---|---|---|
| R1 | **Mobile scroll jank** from stacking crossfade + drift + motes + parallax + tilt | Med / Med | Transform/opacity only; keep off-screen pausing; cap concurrent animations per viewport; test on a mid-range Android before sign-off |
| R2 | **LCP regression** from new hero entrance | Low / High | No preloader or overlay; animate only already-decoded layers; preserve `fetchpriority="high"` on frame 1; keep entrance ≤900 ms |
| R3 | **`.cut` clipped forever** if a new instance lacks a `.rv` ancestor (D4) | Med / Med | Only place `.cut` inside an observed `.rv`, or add a defensive `:not()` guard; verify each instance visually |
| R4 | **Reduced-motion regression** — a new effect missing from the `reduce` block | Med / High | Every addition added to the block in the same edit; test with OS-level reduce enabled |
| R5 | **Lateral reveals off-canvas** below 1300 px | Low / Low | Existing ≤1300 px collapse to vertical must be preserved for every new sideways effect |
| R6 | **Cursor/tilt effects on touch** | Low / Low | All pointer effects stay gated on `(hover:hover) and (pointer:fine)` — current behaviour, keep it |
| R7 | **Layout shift** from new sticky/curtain structures | Med / Med | No height-changing animation; verify CLS ≈ 0 before/after; sticky column needs equal-height siblings |
| R8 | **`position:sticky` silently failing** due to an ancestor `overflow:hidden`/`clip` (`html` uses `overflow-x:clip`, body `overflow-x:hidden`) | Med / Med | Test in situ; if it fails, wrap in a local `overflow:visible` container or drop the item — never ship a pin that does nothing |
| R9 | **Double-animation conflict** — new hero choreography competing with the existing drift/exit-parallax | Med / Med | Stage with explicit sequencing (`ready` class + `animation-delay`), never by raising `!important` specificity |
| R10 | **Accessibility regressions** — pause control, curtain menu focus order | Low / High | Keyboard pass through nav → drawer → hero control → gallery → form; focus trap and restore must survive |
| R11 | **Single-file monolith growth** (currently 2,172 lines) | Med / Low | Keep net additions under ~120 lines; no duplicated rule groups; reuse tokens rather than adding new ones |
| R12 | **Scope creep into "effects for effects' sake"** | Med / Med | Cap at ~4 new keyframes; every effect must serve a stated content goal; the optional P2-9 cursor stays last and separately approvable |

---

## 7. Implementation plan (phases, for approval)

**Phase 0 — Baseline (no site edits).** Record file checksums; capture reference screenshots at 360 / 768 / 1024 / 1440 px for hero (top and scrolled), one mid-page section, gallery and footer; record a reduced-motion screenshot set. Store in a new `_s2/before/`.

**Phase 1 — CSS-only, highest value (P1 items 1, 3, 4, 6, 7).**
Hero entrance choreography on the existing `ready` hook · gallery cascade fix · reveal-vocabulary distribution · `will-change` release · small-screen layer-model clean-up · reduced-motion block extended in the same edit.

**Phase 2 — Small JS additions (P1 items 2, 5; P2 items 8, 10, 11).**
Hero transition upgrade + pause/play control (with `aria-pressed`, keyboard reachable) · `.cut` extended to the ballroom media · curtain drawer transition · one sticky editorial column · low-coefficient venue parallax.

**Phase 3 — Optional, separately approved (P2 item 9).**
Restrained single-ring cursor, fine-pointer only, `reduce`-gated — only if you want it after seeing Phase 1–2.

**Phase 4 — Verification and handover.**
Before/after screenshot diff · `prefers-reduced-motion` pass (OS emulation) · keyboard-only pass · iOS Safari check for `backdrop-filter`/`clip-path` · test matrix 360/768/1024/1440 · confirm zero new network requests, zero new dependencies, unchanged copy/branding/booking flow · report with the diff summary.

### Success criteria

- Hero reads as a **choreographed entrance and a camera move**, not a slideshow that starts by itself.
- Section reveals have **section-specific cadence**, and the gallery ripples as designed.
- **Zero** new dependencies, **zero** new network requests beyond the existing Google Fonts, **zero** changes to branding, copy, layout behaviour or the booking/enquiry flow.
- `prefers-reduced-motion` remains **fully honoured** for every effect, including the new ones (this is where we stay ahead of the reference).
- No CLS regression, no measurable LCP regression, no jank on a mid-range Android.
- Reference clone untouched; **no** reference JS, CSS, text, image or branding reused — effects recreated as original code within the existing token system.

### Explicitly out of scope

Booking/enquiry logic · content and copy · palette and typography · responsive breakpoints (beyond the small-screen layer model in Phase 1) · asset optimisation · `_s1/` cleanup · any third-party library.
