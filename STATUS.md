# reMKTR Website — Project Status
**Last updated:** June 30, 2026

---

## Key URLs & Credentials

- **Live Site:** https://remktr.com
- **Netlify Preview:** https://remktr-website.netlify.app
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
- Netlify upgraded to paid plan
- All 9 main site pages working — nav and footer logos confirmed
- 6 case studies live + index page with clean URL redirects
- 3 landing pages built and deployed (OLV, Link Out, UNDERCUT)
- All pixels verified — Meta, X, Clarity installed on all 3 pages
- CTA confirmed — Calendly booking with Jayce Broda (30 min)
- Landing page images uploaded — client logos, brand, undercut deck, reporting dashboard
- Landing page videos uploaded and playing — all 14 mp4s
- where-dsp placement images fixed — all 3 confirmed in repo
- Discovery call page — Jayce's Calendly replaces dead HubSpot form
- DNS cutover complete — remktr.com now points to Netlify via Cloudflare
- www.remktr.com CNAME updated in Cloudflare

### ⏳ In Progress
- DNS propagation — fully global within the hour
- Microsoft Clarity — waiting for first session once traffic hits

### 🔴 Pending
- Update landing page ad URLs from remktr-website.netlify.app to remktr.com once DNS is fully live

---

## Landing Pages

| Page | URL |
|------|-----|
| OLV | https://remktr.com/agencies/klientboost-olv.html |
| Link Out | https://remktr.com/agencies/klientboost-linkout.html |
| UNDERCUT | https://remktr.com/agencies/klientboost-undercut.html |

### Launch Gate
- Meta & X pixels verified ✅
- CTA destination confirmed ✅ (Calendly — Jayce Broda)
- UTM template ready ✅
- All images and videos ✅
- Clarity confirmed ⏳ (waiting for first session)

**Do not run paid traffic until Clarity confirms first session.**

### UTM Template
```
[page-url]?utm_source=meta&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}
```

---

## Important Reminders
- Do not paste Meta/X/Apify tokens into landing pages
- Do not create or publish campaigns without explicit approval
- Do not change budgets or billing settings

---

## Contacts
- **Ken (kfree108)** — primary client stakeholder
- **Jayce Broda** — CTA booking destination (Calendly, 30 min calls)
- **Farouk** — technical implementation
- **JP (jserrano@fullcircleagency.com)** — project lead
