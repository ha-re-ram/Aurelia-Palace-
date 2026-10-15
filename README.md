# 🏰 Aurelia Palace — Open Luxury Resort & Destination Website Suite

[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg?style=for-the-badge)](./LICENSE)
[![Author](https://img.shields.io/badge/Author-ha--re--ram-brightgreen.svg?style=for-the-badge)](https://github.com/ha-re-ram)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-gold?style=for-the-badge&logo=github)](./index.html)
[![React 19](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14-purple?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

A curated, multi-tier collection of luxury hotel, wedding venue, and resort website templates developed under the **Aurelia Palace** open brand. 

Created by **ha-re-ram** as an open-source template suite, this repository is free for anyone to use, explore, and adapt for luxury hospitality, boutique villas, wedding resorts, and grand event destinations.

---

## 🌐 Live Preview & Showcase (For Anyone on the Web)

Anyone can view and interact with all templates live in their browser without installing anything:

### 1. Zero-Config Local Live Server (1-Click)
Run this single command in your terminal:
```bash
python3 serve.py
```
This automatically boots a local HTTP server and opens the **Master Showcase Live Portal** at `http://localhost:8080` with an interactive device simulator (Desktop, Tablet, Mobile) and quick-switch tabs for every template.

### 2. Free Worldwide Hosting via GitHub Pages
When you push this repository to GitHub:
1. Go to your repository on GitHub: **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions** (the included [.github/workflows/deploy.yml](.github/workflows/deploy.yml) will automatically build and publish).
3. GitHub gives you a permanent live URL: `https://<your-username>.github.io/<your-repo>/` where **anyone can view every template live**!

---

## 🏛️ Repository Architecture & Professional Structure

```
Aurelia Palace/
├── index.html                           # 🌟 Master Showcase Live Portal (Device Simulator & Template Switcher)
├── serve.py                             # 🚀 1-Click Zero-Dependency Local Live Server
├── images/                              # High-resolution estate photography & Aurelia emblems
├── LICENSE                              # Open MIT License & Trademark Notice (Copyright © 2026 ha-re-ram)
│
├── 01-prototypes/                       # Tier 1: Early Prototypes & Design Explorations
│   ├── 01-classic-heritage/             # Vanilla HTML5/CSS3/JS (2,298 LOC) with estate photography
│   ├── 02-minimal-editorial/            # Minimal editorial luxury single-page concept
│   ├── 03-modern-aesthetic/             # Modern luxury serif layout with responsive grid
│   ├── 04-symmetrical-regal/            # Symmetrical royal layout with luxury borders
│   └── 05-archival-drafts/              # Historical early drafts (V1 & V2)
│
├── 02-standalone-edition/               # Tier 2: Audited Standalone Luxury Edition
│   ├── index.html                       # Zero-dependency, self-contained interactive website
│   ├── assets/                          # Bespoke Aurelia Palace gold emblems & photography
│   ├── ANIMATION-AUDIT.md               # Technical motion design audit
│   └── ANIMATION-IMPLEMENTATION.md      # Verified cascade fixes & motion tokens report
│
└── 03-react-templates/                  # Tier 3: Production React + TypeScript SPA Templates
    ├── flagship-master-edition/         # 👑 COMBINED MASTER APP: Royal Ceremony + Motion + Modals
    ├── grand-destination/               # Luxury wedding resort & convention venue with Framer Motion
    ├── royal-ceremony/                  # 3D Gate Opening curtains, canvas gold dust & custom cursor
    ├── heritage-palace/                 # Central site.ts data store, fact strip & mobile action dock
    └── resort-experience/               # Modular resort architecture with interactive room cards
```

---

## 👑 Flagship Master Edition (`flagship-master-edition`)

The **Flagship Master Edition** represents the complete website, combining the finest elements of every prototype and template into one cohesive, production-ready web application:

- **Interactive Royal Opening Ceremony**: 3D golden gates parting with royal crest and skip toggle.
- **Scroll Spring Progress Bar**: Golden gradient progress line responding with physical spring dynamics.
- **Ambient Pointer Glow & Custom Cursor**: Smooth luxury gold pointer and atmospheric light follower.
- **Fact Strip / Key Metrics**: 62+ Air-Conditioned Suites, 30,000 sq. ft. celebration lawns, 12,000 sq. ft. grand ballroom, 50-year legacy.
- **Interactive Chamber Selector**: Tabbed room showcase with room sizing, pricing, amenities, and direct reservation triggers.
- **Weddings & Banquets Planner**: Multi-day wedding celebration showcase with capacities and event inquiry modal.
- **Fine Dining & Gastronomy**: Culinary showcase highlighting separate vegetarian and multi-cuisine kitchens.
- **Filterable Media Gallery**: Interactive gallery with category filtering (All, Suites, Dining, Celebrations, Grounds) and lightbox modal.
- **Resort Amenities Grid**: 8-point luxury amenities with hover micro-animations.
- **Interactive Booking Modal**: Direct suite reservation drawer with check-in/out date pickers and WhatsApp pre-fill.
- **Event Inquiry Modal**: Wedding and conference inquiry modal with guest count estimations.
- **Mobile Floating Action Dock**: One-tap Call, WhatsApp, and Reserve bottom navigation.
- **Single-File Zero-Dependency Static Build**: Built with `vite-plugin-singlefile` into `dist/index.html` for instant static hosting anywhere.

---

## 📊 Template Comparison Matrix

| Edition | Technology Stack | Key Features | Best For |
|---|---|---|---|
| **Flagship Master** | React 19, Vite, Tailwind CSS, Framer Motion | Opening ceremony, scroll progress, ambient glow, booking & event modals, gallery lightbox | Complete commercial website for luxury resorts & palaces |
| **Standalone Edition** | Vanilla HTML5, CSS3, ES6 (Zero Dependencies) | Audited motion tokens, ripple effects, client photos, zero build step | Lightning-fast static hosting & portfolio showcases |
| **Grand Destination** | React 19, Vite, Tailwind CSS, Framer Motion | Spring scroll indicator, weddings section, FAQ accordion, ambient cursor glow | Wedding resort marketing & lead generation |
| **Royal Ceremony** | React 19, Vite, Tailwind CSS, HTML Canvas | 3D gate parting, gold dust particles canvas, luxury cursor ring, guestbook | Immersive luxury storytelling & boutique heritage villas |
| **Heritage Palace** | React 19, Vite, Tailwind CSS, Site Data Config | Central `site.ts` data store, fact strip, mobile action dock, quick reserve | Rapid hotel deployment with easy data changes |
| **Resort Experience** | React, Vite, Tailwind, Modular Components | Modular sections, amenities grid, event inquiry dialog, room cards | Modern full-featured hotel web applications |
| **Classic Heritage** | Vanilla HTML5, CSS3, JavaScript | 80:20 gold-white palette, 6 amenities, 3 suite tiers, estate photos | Foundational layout reference (2,298 LOC) |

---

## 🛠️ How to Run Any Template Locally

### Running the Flagship Master Edition
```bash
cd 03-react-templates/flagship-master-edition
npm install
npm run dev
```

### Running Any Other React Template
```bash
cd 03-react-templates/grand-destination   # or royal-ceremony, heritage-palace, etc.
npm install
npm run dev
```

### Running the Live Showcase Hub or Any Static Edition
Simply run:
```bash
python3 serve.py
```
Or open any `index.html` directly in your browser.

---

## 📜 Trademark, License & Attribution

- **Creator & Maintainer**: **ha-re-ram**
- **Brand**: **Aurelia Palace™** — Open Luxury Hospitality Template Suite
- **License**: **MIT License** (Free for personal, commercial, and agency use)

*All credentials, locations, phone numbers, and addresses in this repository are fictionalized template demonstrations.*
