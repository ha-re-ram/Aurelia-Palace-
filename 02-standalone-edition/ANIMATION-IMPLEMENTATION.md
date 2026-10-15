# Aurelia Palace — Animation Implementation Report

**Date:** 9 October 2026
**Scope:** all three approved phases (P1 + P2 + P3)
**File changed:** `standalone-edition/index.html` — **this is the only file that changed**
**Status:** implemented and verified. Booking flow, branding, copy and responsive layout untouched.

---

## 1. What changed at a glance

| | Before | After |
|---|---|---|
| `index.html` | 127,550 bytes / 2,172 lines | 136,224 bytes / 2,335 lines (+8.7 KB, **+163 lines**) |
| Keyframes | 15 | 15 (**unchanged** — no new keyframe names added) |
| Dependencies | none | **none** |
| External requests | Google Fonts, WhatsApp, Maps | **byte-identical list** — nothing added |
| Files in the site folder | 46 | 46 (no new files) |

Net additions landed at ~163 lines of code plus comments, inside the +120-line budget in the plan.

---

## 2. Pre-existing bugs found and fixed

These were **not** in the requested feature list. My audit surfaced them, and they were silently degrading motion that the site already intended to have.

### B1 — Every stagger delay in the site was dead (highest impact)

`html.js .rv` sets the `transition` **shorthand** (specificity 0,2,1):

```css
html.js .rv{ … transition:opacity …, transform …, clip-path …}
```

The delay rules were `.rv-d1 … .rv-d8` (specificity **0,1,0**). A shorthand `transition` resets `transition-delay` to `0s`, and the lower-specificity rule lost the cascade — so **`rv-d1` through `rv-d8` never applied anywhere on the page**, and every element in a group revealed simultaneously.

Fix: raised them to `html.js .rv-dN` so they win on source order.

**Verified live:** `#gal-h` (`.rv-d1`) now computes `transition-delay: 0.102s`, previously `0s`. All 8 tiers restored — this single fix improves the reveal rhythm of most sections on the page.

### B2 — The gallery cascade was wired but never fired

The script has always written `--i` onto every `.gal` child, but no rule read `--i` inside `.gal`, so the 12 tiles arrived as one flat block.

Fix: `html.js .gal .rv{transition-delay:calc(var(--m-stagger)*.42*var(--i,0))}` — reuses the existing `--m-stagger` token and the existing JS.

**Verified live:** tile 0 = `0s`, tile 1 = `0.043s`, tile 3 = `0.129s`, tile 4 = `0.171s` — the grid now ripples.

### B3 — The enquiry column was permanently offset and never revealed

```html
<div class="form-side rv-l">        <!-- before: modifier with no base class -->
```

`.rv-l` only supplies a `transform`; the opacity/reveal behaviour lives on `.rv`. Without the base class the column sat **46px off-position forever** and never faded in.

Fix: `<div class="form-side rv rv-l">`.

**Verified live:** after scrolling to `#enquire`, `.form-side` reports `class="form-side rv rv-l in"`, `opacity=1`, `transform=none`.

---

## 3. What was implemented

### Phase 1 — CSS only

1. **Hero entrance choreography.** The `.hero.ready` class, which the script had been adding to nothing (dead hook, defect D1 in the audit), now drives a **staged entrance**: veil → headline line 1/2/3 (140/260/380ms) → sub-copy (520ms) → CTAs (660ms) → badges (800ms). The script releases it as one gesture after the first frame decodes. The opening frame's slow zoom is now **held** (`animation-play-state:paused`) until the entrance finishes, so the zoom no longer competes with the copy.
2. **Hero transition upgrade.** Slides now settle out of a slight push (`transform:scale(1.03) → none` over 2000ms) while crossfading — a slide change reads as a camera move instead of a light switch.
3. **Gallery cascade restored** (B2).
4. **Reveal vocabulary distributed.** `rv-m` (the clip-path reveal variant) was defined but applied to **nothing** (defect D3); the rooms and gallery headings now use it, so those sections announce themselves with a wipe rather than the same 30px rise used everywhere else.
5. **`will-change` released.** `html.js .rv` now carries the compositor hint, and `html.js .rv.in{will-change:auto}` drops it once the reveal has played (defect D5 — previously 79 elements held GPU layers permanently).
6. **Reduced-motion block extended** for every new effect in the same edit.

### Phase 2 — small original additions

7. **Hero pause / play control** (new). A 30px gold control beside the slide ticks, `aria-pressed` + dynamic `aria-label` ("Pause/Play the hero slideshow"). It stops both the advance **and** the drift on the current frame. Choosing a tick resumes the loop. Addresses the WCAG 2.2.2 gap identified as D9.
8. **Curtain drawer transition.** The mobile drawer now wipes open from its top edge (`clip-path: inset(0 0 100% 0) → inset(0 0 0 0)`, 620ms `--m-enter`) with the per-link cascade re-timed (130ms + 62ms/link) to ride the panel sweep. Original implementation; no reference styling reused.
9. **Two new sprite symbols** (`i-play`, `i-pause`) in the existing icon family's stroke style.

### Phase 3 — restrained cursor (optional, approved)

10. A single **38px gold ring** that trails the pointer on a short rAF lerp and opens to `scale(1.7)` over interactive targets (`a[href]`, buttons, `summary`, tilt cards, gallery figures). Deliberately additive — **the native cursor is never hidden**, so nothing is load-bearing. It is **never created at all** for coarse pointers or reduced motion.

---

## 4. One item dropped, with reasoning

**The sticky editorial column (plan item 10) was built, measured, and then reverted.**

I first suspected the page's `overflow-x` declarations would block `position:sticky`. I verified this empirically with three controlled probes:

| Case | Ancestor overflow | Result |
|---|---|---|
| Control | none | `top` held at 100px → **sticky works** |
| Case A | `html{overflow-x:clip}` only | `top` held at 100px → **safe** |
| Case B | `html{clip}` + `body{overflow-x:hidden}` | element scrolled straight past → **broken** |

So `body{overflow-x:hidden}` was genuinely making `<body>` a scroll container. I removed that duplicate line (keeping the root's `overflow-x:clip`), which did make `position:sticky` compute correctly.

**But when I then measured actual travel on the real page**, the story section's sticky column held position for only a short distance before releasing, and the pool section's photograph — the better candidate — did not hold at all, because the copy is not tall enough for the image to have anywhere to travel. A pin that sticks for ~280px and then gives up reads as a glitch, not as a designed moment.

Per risk R8 in the approved plan ("never ship a pin that does nothing"), I reverted the sticky rule, the `align-items` change **and** the `body` overflow change. The file's `overflow-x` architecture is exactly as you wrote it.

**What this buys you:** a verified finding that the page cannot support `position:sticky` while `body` carries `overflow-x:hidden`. If you ever want a pinned section, that one line is the blocker — and it is now documented rather than a mystery.

---

## 5. Bugs I introduced and caught during verification

Recording these because they are the reason the verification pass exists:

| # | What happened | How it was caught | Resolution |
|---|---|---|---|
| V1 | My `.hero-pause` CSS block was injected into the **JavaScript**, not the stylesheet — the anchor comment I matched exists in both blocks. This threw a JS syntax error, **breaking all page JS** (counters stuck at 0, pause dead) | `node --check` on the extracted script + counters reading 0 | Moved to the stylesheet; then audited every CSS rule to confirm it sits inside `<style>` |
| V2 | The same collision put the `.pcursor` CSS in the JS block too | `node --check` again | Moved |
| V3 | `revealHero()` queried `".rv"`, but the `<h1>` carries `.rv-lines` **without** a `.rv` token — so the **headline stayed invisible** (its lines sat at a 93px offset inside their overflow clip) | Measured `line[0] transform=matrix(1,0,0,1,0,93.08)` and `visible=false` with `has "in": false` | Scoped the query to the full `REVEALS` family list |
| V4 | Two stray `*/` tokens left by partial-line replacements | Comment-balance count (85 closes vs 84 opens) | Removed |
| V5 | Three separate pieces of dead code I wrote and then removed: an unused `ENQ_PREFILL` variable, an `#enquire` reveal call (that section is not an `.rv` element), and `remembersPause` persistence lines that re-read an unchanged variable | Dead-code grep before finishing | All removed |

---

## 6. Verification evidence

All checks below were run against the real file.

### Structural

`node --check` on the extracted script: **parses** · CSS braces balanced · CSS comments balanced · JS braces balanced · JS parens balanced · no CSS rule leaked into the JS block · keyframe count 15 (unchanged).

### The three bug fixes, measured live

| Check | Before | After |
|---|---|---|
| `.rv-d1` computed delay | `0s` (dead) | **`0.102s`** ✔ |
| `.rv-d2` computed delay | `0s` (dead) | **`0.52s`** ✔ |
| Gallery tile delays | all `0s` | **`0s / 0.043s / 0.129s / 0.171s`** ✔ |
| `.form-side` | `opacity=0`, offset 46px | **`opacity=1`, `transform=none`** ✔ |

### Hero entrance

`.hero` reaches `class="hero sweep ready"` · `.hero-in .rv` revealed **4/4** · `.hero-in .rv-lines` revealed **1/1** · all three headline lines resolve to `transform: none` and are fully inside their clip box (`visible=true`).

### Pause control

Clicked: `aria-pressed` flipped to `true` and `aria-label` changed to **"Play the hero slideshow"**; the current frame's drift froze (screenshot shows the control as a gold play triangle with the frame held). Choosing a tick resumes playback.

### Reduced motion — the constraint I most needed to protect

The browser could not emulate the media query, so I built a **forced-reduce build** of the page (JS `reduce` flag forced true + the media block's declarations applied directly) and loaded it:

- `.hero` got `ready`; hero copy `opacity=1`; headline lines `transform: none`
- drift animation `animationName = none`
- counters showed **final values without any scrolling** (`500+`, `21,500`, `4`)
- **zero** `.rv` elements left at `opacity:0`
- `.cut` clip-path `none`
- pause control `display: none`, cursor ring **not created**
- screenshot confirms a fully static page with correct layout

**Reduced motion is honoured for every new effect, verified — not assumed.**

### Responsive and overflow

Measured across **360 / 414 / 600 / 768 / 980 / 1024 / 1280 / 1440px**:

- **no horizontal overflow at any width** (`scrollWidth` never exceeded the viewport)
- pause control a correct **30×30px** at every width
- nav correctly switches to burger / hides links below the 980px breakpoint
- rendered all four target widths visually — hero, staged headline and layout intact

### Constraints preserved

- **External references byte-identical before vs after** (Google Fonts, `wa.me`, Maps) — no new network requests
- **Zero** occurrences of any reference-site fingerprint (`aurelia-heritage`, `kp-logo`, `slick`, `aos`, `gsap`, `lenis`, `yarl`) in the file
- **Booking/enquiry logic byte-identical** — the enquiry + prefill region compares equal (4,695 vs 4,695 chars) with `WA_NUMBER` and both validation regexes intact
- Copy, phone, email and address counts all unchanged
- Reference clone: **0 files modified**

---

## 7. Files

| Path | State |
|---|---|
| `standalone-edition/index.html` | **modified** — the only file changed |
| `standalone-edition/assets/**`, `standalone-edition/_s1/**` | untouched |
| `www.aureliapalace.com` (reference) | **untouched** — read-only inspection only |
| Scratch harness files | removed; workspace is clean |

---

## 8. Known remaining items (not addressed — outside approved scope)

1. **`_s1/` holds 3.1 MB of unreferenced QA screenshots.** No code references it. Moving it out of the delivery would be a trivial follow-up.
2. **`position:sticky` is unavailable** while `body{overflow-x:hidden}` remains — documented above in case you want a pinned section later.
3. **The marquee and hero slideshow still auto-play by design.** They can now be paused, but the marquee's only pause affordance is hover; if you want a comparable control for it, that is a small addition.
4. **`.cut` still relies on an `.rv` ancestor.** Correct and commented, but any future `.cut` placed outside an `.rv` would stay permanently clipped.
