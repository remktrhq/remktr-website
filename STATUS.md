# reMKTR Website — Project Status
**Last updated:** June 27, 2026

---

## Key URLs & Credentials

- **Live Site:** https://remktr-website.netlify.app
- **GitHub Repo:** https://github.com/remktrhq/remktr-website
- **Netlify Site ID:** ubiquitous-dragon-a0c74c
- **GitHub Token:** expires ~90 days from June 27, 2026

## Tracking IDs
- Meta Pixel: `1716243463156892`
- X Pixel: `rd4k5`
- X Lead Event: `tw-rd4k5-rd6v2`
- X Booked Call Event: `tw-rd4k5-rd6v3`
- Microsoft Clarity: `xc0040t55v`

---

## Status

### ✅ Done
- Full reMKTR website rebuilt from HubSpot HTTrack mirror
- Fully self-contained — zero external CSS/JS/font/image calls
- GitHub + Netlify auto-deploy pipeline connected
- 3 landing pages built and deployed (OLV, Link Out, UNDERCUT)
- All pixels verified — Meta, X, Clarity installed on all 3 pages
- CTA confirmed — Calendly booking with Jayce Broda (30 min)

### ⏳ In Progress
- Microsoft Clarity — installed, waiting for first session to appear
- Landing page assets — pages render but missing visuals (logos, videos, images)

### 🔴 Blocked
- Assets folder needed from Ken (celest-haven-6trt.here.now/assets/)
  - client logos, brand logo, videos, deck images
- Case Studies pages returning 404 — not captured in HTTrack mirror
- Main site logo QA not completed

---

## Monday To Do
1. Fix Case Studies 404 — redirect or re-run HTTrack on remktr.com/case-studies/
2. Get assets folder from Ken and push to GitHub
3. Final logo QA on all 9 main site pages
4. Confirm Clarity sessions recording
5. Domain migration — remktr-website.netlify.app → remktr.com
   - Add domain in Netlify → Domain Management
   - Update DNS at registrar to point to Netlify
   - SSL auto-provisions
   - Update all ad URLs to new domain
   - DO NOT migrate until all fixes are complete

---

## Landing Pages

| Page | URL |
|------|-----|
| OLV | https://remktr-website.netlify.app/agencies/klientboost-olv.html |
| Link Out | https://remktr-website.netlify.app/agencies/klientboost-linkout.html |
| UNDERCUT | https://remktr-website.netlify.app/agencies/klientboost-undercut.html |

### Launch Gate
- Meta & X pixels verified ✅
- CTA destination confirmed ✅ (Calendly — Jayce Broda)
- UTM template ready ✅
- Clarity confirmed ⏳
- Landing page assets 🔴 Need from Ken

**Do not run paid traffic until all green.**

### UTM Template
```
[page-url]?utm_source=meta&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}
```

---

## Important Reminders
- Do not paste Meta/X/Apify tokens into landing pages
- Do not create or publish campaigns without explicit approval
- Do not change budgets or billing settings
- Update all ad URLs if domain changes from remktr-website.netlify.app to remktr.com

---

## Contacts
- **Ken (kfree108)** — landing page assets, local dev server (celest-haven-6trt.here.now)
- **Jayce Broda** — CTA booking destination (Calendly, 30 min calls)
- **JP (jserrano@fullcircleagency.com)** — project lead
