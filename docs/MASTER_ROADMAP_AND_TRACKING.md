# 👑 Master Roadmap & Tracking Document: Aurelia Palace Hospitality OS

**Project Title**: Aurelia Palace™ + NexisERP Integrated Hospitality Platform  
**Architecture**: Dual-Layer (Next-Gen Interactive Frontend + Multi-Tenant SaaS PMS Backend)  
**Author & Maintainer**: ha-re-ram  
**Version**: 1.0.0  
**Status**: Active Execution  

---

## 1. Executive Summary & Vision

This project unites **Aurelia Palace** (a luxury heritage palace website and interactive booking engine) with **NexisERP** (a scalable, multi-tenant SaaS ERP and Property Management System).

Together, they form a unified **Hospitality Operating System (Aurelia Hospitality OS)**:
1. **Front-of-House (Aurelia Palace)**: Immersive storytelling, 3D chamber selector, dynamic royal opening ceremony, and live interactive reservation modals.
2. **Back-of-House (NexisERP)**: Central reservation ledger, room inventory management, banquet lead pipeline, automated billing, and occupancy analytics.

```mermaid
graph TD
    subgraph "Layer 1: Guest Facing Experience"
        A[Aurelia Palace Web Hub] --> B[Master Flagship Edition]
        B --> C[Chamber & Suite Selector]
        B --> D[Wedding & Banquet Showcase]
        C --> E[Live Booking Modal]
        D --> F[Live Event Inquiry Modal]
    end

    subgraph "Layer 2: API Gateway"
        E -->|POST JSON| G[/api/booking.php]
        F -->|POST JSON| H[/api/inquiry.php]
        G -->|Tenant Routing store_id=3| I[NexisERP Core Engine]
        H -->|Tenant Routing store_id=3| I
    end

    subgraph "Layer 3: NexisERP Multi-Tenant SaaS"
        I --> J[(MySQL Database)]
        J --> K[Tenant: Aurelia Palace & Resort]
        J --> L[Products: 6 Room Categories & Event Packages]
        J --> M[Orders: Reservation Ledger & Invoices]
        J --> N[Users: Guest CRM & Booking History]
    end

    subgraph "Layer 4: Property Management & Staff Ops"
        O[Admin Dashboard] --> P[Reservation Status & Check-ins]
        O --> Q[Revenue & Occupancy Analytics]
        O --> R[Lead Pipeline & Catering Orders]
        J -.-> O
    end
```

---

## 2. Repositories & Working Directories

| Component | Repository | Local Directory | Live URL / Deployment |
| :--- | :--- | :--- | :--- |
| **Aurelia Palace (Frontend)** | `ha-re-ram/Aurelia-Palace-` | `/home/ha-re-ram/Downloads/Trinity Palace` | [https://hareramkushwaha.com.np/Aurelia-Palace-/](https://hareramkushwaha.com.np/Aurelia-Palace-/) |
| **NexisERP (Backend & PMS)** | `ha-re-ram/erp_saas` | `/home/ha-re-ram/Downloads/Trinity Palace/erp_saas` | Local Dev: `localhost:8080` / Multi-tenant SaaS |

---

## 3. Detailed Phase Breakdown & Progress Tracker

### 🟩 Phase 1: Brand Sanitization & Frontend Re-architecture (COMPLETED)
- [x] Complete eradication of legacy brand names ("Trinity Palace", "Bokaro", "Chas", "kushalpalli") and third-party agent tags (`omniroute`, `huggingface`, etc.).
- [x] Rebranded to **Aurelia Palace™** with royal luxury typography and gold-emerald aesthetics.
- [x] AI-generated luxury royal crest emblem (`images/aurelia-emblem.jpg`) integrated across all templates.
- [x] Master Hub (`index.html`) created with device simulator (Desktop, Tablet, Mobile) and live template switcher.
- [x] Flagship Master Edition created under `03-react-templates/flagship-master-edition` combining Royal Opening Ceremony, Framer Motion spring progress, chamber selector, dining, and gallery.
- [x] Absolute paths converted to relative paths (`images/`) for GitHub Pages subpath compatibility.
- [x] Deployed and verified on custom domain: `https://hareramkushwaha.com.np/Aurelia-Palace-/` (HTTP/2 200 OK).

---

### 🟩 Phase 2: NexisERP Tenancy & REST API Bridge (COMPLETED)
- [x] Cloned `erp_saas` into `/home/ha-re-ram/Downloads/Trinity Palace/erp_saas`.
- [x] Seeded **Store #3: Aurelia Palace & Resort** (`subdomain = 'aurelia'`) in `erp_saas/database.sql`.
- [x] Created room categories: Suites & Accommodations, Wedding Venues, Culinary Dining, Spa & Wellness.
- [x] Added product catalog: Executive Room ($45), Deluxe Heritage Room ($55), Royal Suite ($85), Presidential Suite ($130), Grand Wedding Package ($1,500), Royal Gala Dinner ($35).
- [x] Implemented `erp_saas/api/booking.php`:
  - Validates guest details, check-in, check-out, and room selection.
  - Generates unique reservation code `AURELIA-XXXX`.
  - Calculates total nights and revenue.
  - Automatically provisions guest account if not existing.
  - Writes order record into `orders` and line items into `order_items`.
- [x] Implemented `erp_saas/api/inquiry.php`:
  - Captures event leads with timestamp, expected guests, and event type.
  - Issues tracking reference `EVENT-YYYY-XXXX`.

---

### 🟨 Phase 3: Frontend Modal Wiring & Production Compilation (IN PROGRESS)
- [x] Connected `BookingModal.tsx` to call `POST /api/booking.php` with offline WhatsApp fallback.
- [x] Connected `EventInquiryModal.tsx` to call `POST /api/inquiry.php` with offline WhatsApp fallback.
- [x] Configured single-file bundler in `flagship-master-edition` using `vite-plugin-singlefile`.
- [x] Compiled `dist/index.html` (499 kB standalone bundle with zero external asset dependencies).
- [ ] Stage and commit updated modal and dist bundle to `ha-re-ram/Aurelia-Palace-`.

---

### 🟦 Phase 4: NexisERP Hospitality Admin & Storefront Theme (NEXT)
- [ ] Enhance `erp_saas/index.php` for `store_id = 3`:
  - When accessing `?store=aurelia`, display a luxury hospitality theme instead of standard retail cards.
  - Add "Check Availability" date picker and direct "Experience Virtual Palace Tour" button pointing to Aurelia Palace.
- [ ] Add Hospitality filter / badges in `erp_saas/admin/dashboard/orders.php`:
  - Highlight room bookings with check-in/out badges, nights stayed, and guest status (`Reserved`, `Checked In`, `Checked Out`).
- [ ] Document quick-start instructions for local full-stack development (`serve.py` + PHP server).

---

### 🟦 Phase 5: Version Control & Documentation Sync (FINAL)
- [ ] Commit and push all additions in `ha-re-ram/Aurelia-Palace-`.
- [ ] Commit and push all backend additions in `ha-re-ram/erp_saas`.
- [ ] Verify live domain end-to-end.

---

## 4. API Endpoints Reference

### 1. Room Booking: `POST /api/booking.php`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
```json
{
  "store_id": 3,
  "guest_name": "Vikramaditya Singh",
  "phone": "+1 (555) 019-2834",
  "email": "vikram@example.com",
  "room_name": "Presidential Suite",
  "check_in": "2026-11-15",
  "check_out": "2026-11-20",
  "guests": "2 Adults",
  "special_requests": "High floor with palace garden view"
}
```
- **Response**:
```json
{
  "status": "success",
  "booking_id": 105,
  "booking_code": "AURELIA-9481",
  "nights": 5,
  "total_amount": 650.00,
  "message": "Your royal reservation has been confirmed."
}
```

### 2. Wedding & Banquet Inquiry: `POST /api/inquiry.php`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
```json
{
  "store_id": 3,
  "client_name": "Maharani Priya Roy",
  "phone": "+91 98765 43210",
  "email": "priya@example.com",
  "event_type": "Royal Destination Wedding",
  "tentative_date": "2026-12-18",
  "guest_count": "350-500 Guests",
  "notes": "Lawn ceremony and imperial ballroom banquet."
}
```
- **Response**:
```json
{
  "status": "success",
  "inquiry_code": "EVENT-2026-7281",
  "message": "Royal inquiry received. Our banquet concierge will contact you within 24 hours."
}
```

---

## 5. Local Development & Testing Instructions

### Option A: Testing Frontend (Aurelia Palace)
```bash
cd "/home/ha-re-ram/Downloads/Trinity Palace"
python3 serve.py
# Opens Master Showcase Hub on http://localhost:8000
```

### Option B: Testing NexisERP Backend (PHP + MySQL)
```bash
cd "/home/ha-re-ram/Downloads/Trinity Palace/erp_saas"
php -S localhost:8080
# Access Aurelia Palace Tenant: http://localhost:8080/?store=aurelia
# Access Admin PMS: http://localhost:8080/admin/
```

---
*Created and maintained with precision by engineer ha-re-ram.*
