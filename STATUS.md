# reMKTR Website — Project Status
**Last updated:** June 30, 2026

---

## Key URLs & Credentials

- **Live Site:** https://remktr.com
- **GitHub Repo:** https://github.com/remktrhq/remktr-website
- **Netlify Site ID:** ubiquitous-dragon-a0c74c / custom name: remktr-website
- **GitHub Token:** expires ~90 days from June 27, 2026

## Tracking IDs
- Meta Pixel: `1716243463156892`
- X Pixel: `rd4k5`
- X Lead Event: `tw-rd4k5-rd6v2`
- X Booked Call Event: `tw-rd4k5-rd6v3`
- Microsoft Clarity: `xc8o40t95v`

---

## Status

### ✅ Done
- Full reMKTR website rebuilt from HubSpot HTTrack mirror
- Fully self-contained — zero external CSS/JS/font/image calls
- GitHub + Netlify auto-deploy pipeline connected
- Domain migrated — remktr.com pointing to Netlify, SSL active
- /home → / redirect added
- 9 main site pages live: Home, DSP Services, Prime Video Ads, Features, AMC Cloud, Pricing, reQuery, DSP Discovery Call, Privacy Policy
- Blog migrated — 33 pagination pages live at remktr.com/blog (pulse.remktr.com has no DNS, blog self-hosted on Netlify)
- Case Studies — all 6 subpages live, images and links working, redirects corrected
- Performance optimization — 358MB blog images converted to WebP, SVGs 9MB→54KB, lazy loading, JS deferred, HubSpot tracking scripts removed
- 3 landing pages built and deployed (OLV, Link Out, UNDERCUT)
- All pixels verified — Meta ✅, X ✅, Clarity ✅ (live session recordings confirmed)
- Clarity ID corrected: xc0040t55v → xc8o40t95v
- CTA confirmed — Calendly booking with Jayce Broda (30 min)
- X Ads event source confirmed — Site visits, Lead, Booked Call all active

### ⏳ In Progress
- Clarity dashboard tabs — need 24hrs of traffic to populate (not a blocker)

### 🔴 Parked
- requery page: 3 images missing (requery.png, answers-4.jpg, AI-bot.png) — SVG placeholders in place
- Main site CSS still uses hub_generated files — low risk, all files self-hosted locally

---

## Landing Pages

| Page | URL |
|------|-----|
| OLV | https://remktr.com/agencies/klientboost-olv.html |
| Link Out | https://remktr.com/agencies/klientboost-linkout.html |
| UNDERCUT | https://remktr.com/agencies/klientboost-undercut.html |

### Launch Gate
- Meta Pixel verified ✅
- X Pixel verified ✅
- Clarity verified ✅
- CTA destination confirmed ✅ (Calendly — Jayce Broda)
- UTM template ready ✅

**All clear for paid traffic.**

### UTM Template
```
[page-url]?utm_source=meta&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}
```

### QA Reference
- Pixel QA page: https://snowy-plume-7bdp.here.now/
- Clarity dashboard: https://clarity.microsoft.com/projects/view/xc8o40t95v

---

## Important Reminders
- Do not paste Meta/X/Apify tokens into landing pages
- Do not create or publish campaigns without explicit approval
- Do not change budgets or billing settings
- X pixel approval must go through CallFlow OS queue — do not set up manually

---

## Contacts
- **Ken (kfree108)** — landing page assets, local dev server
- **Jayce Broda** — CTA booking destination (Calendly, 30 min calls)
- **JP (jserrano@fullcircleamazon.slack.com)** — project lead
