// ============================================================
// reMKTR tracking config — paste your IDs here (one place only)
// ============================================================
window.REMKTR_TRACKING = {
  // Meta (Facebook/Instagram): "reMKTR Website Pixel" on ad account act_1542000454053205
  metaPixelId: "1716243463156892",

  // Google: a Google tag ID. Use your Google Ads tag ("AW-XXXXXXXXX")
  // or GA4 tag ("G-XXXXXXXXXX"). Either works; AW- recommended for ads.
  googleTagId: "G-ZLDNDSGP5K",

  // Google Ads booking conversion: Goals > Conversions > your action's
  // "send_to" value, looks like "AW-XXXXXXXXX/AbC-dEfGhIjK"
  googleAdsBookingLabel: "REPLACE_WITH_GOOGLE_ADS_CONVERSION_LABEL",

  // X (Twitter): Events Manager pixel ID (looks like "of2ab")
  xPixelId: "rd4k5",

  // X booking conversion event ID (looks like "tw-of2ab-od3cd")
  xBookingEventId: "tw-rd4k5-rd6v3",

  // X lead event (CTA click)
  xLeadEventId: "tw-rd4k5-rd6v2",

  // Microsoft Clarity (session recordings) — JP's project, live since June
  clarityId: "xc0040t55v",

  // Hotjar (optional session recordings)
  hotjarId: "REPLACE_WITH_HOTJAR_ID",

  bookingUrl: "https://calendly.com/jayce-remktr/30min"
};

(function initClarity(){
  var id = window.REMKTR_TRACKING.clarityId;
  if (!id || String(id).indexOf("REPLACE") === 0) return;
  (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", id);
})();

function remktrConfigured(id) {
  return id && !String(id).startsWith("REPLACE");
}

// ---------- Attribution capture (utm_* + variant, survives navigation) ----------
(function captureAttribution() {
  const params = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "v", "cid"];
  const stored = JSON.parse(localStorage.getItem("remktr_attribution") || "{}");
  keys.forEach((key) => {
    if (params.has(key)) stored[key] = params.get(key);
  });
  stored.landing_path = window.location.pathname;
  stored.last_seen_at = new Date().toISOString();
  localStorage.setItem("remktr_attribution", JSON.stringify(stored));
})();

// ---------- Meta pixel ----------
(function installMetaPixel() {
  const id = window.REMKTR_TRACKING.metaPixelId;
  if (!remktrConfigured(id)) return;
  !(function(f,b,e,v,n,t,s){
    if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];
    t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  fbq("init", id);
  fbq("track", "PageView");
})();

// ---------- Google tag (Google Ads / GA4) ----------
(function installGoogleTag() {
  const id = window.REMKTR_TRACKING.googleTagId;
  if (!remktrConfigured(id)) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  gtag("js", new Date());
  gtag("config", id);
})();

// ---------- X (Twitter) pixel ----------
(function installXPixel() {
  const id = window.REMKTR_TRACKING.xPixelId;
  if (!remktrConfigured(id)) return;
  !(function(e,t,n,s,u,a){
    e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},
    s.version="1.1",s.queue=[],u=t.createElement(n),u.async=!0,u.src="https://static.ads-twitter.com/uwt.js",
    a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a));
  })(window,document,"script");
  twq("config", id);
})();

// ---------- Hotjar (optional) ----------
(function installHotjar() {
  const id = window.REMKTR_TRACKING.hotjarId;
  if (!remktrConfigured(id)) return;
  window.hj = window.hj || function () { (window.hj.q = window.hj.q || []).push(arguments); };
  window._hjSettings = { hjid: Number(id), hjsv: 6 };
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://static.hotjar.com/c/hotjar-${id}.js?sv=6`;
  document.head.appendChild(script);
})();

// ---------- Unified event fan-out ----------
window.remktrTrack = function remktrTrack(eventName, payload = {}) {
  const attribution = JSON.parse(localStorage.getItem("remktr_attribution") || "{}");
  const eventPayload = {
    offer: document.body.dataset.offer,
    variant: attribution.v || "a",
    ...attribution,
    ...payload
  };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...eventPayload });
  if (window.gtag) window.gtag("event", eventName, eventPayload);
  if (window.hj) window.hj("event", eventName);
  if (window.fbq) window.fbq("trackCustom", eventName, eventPayload);
};

// ---------- CTA clicks ----------
document.addEventListener("click", (event) => {
  const cta = event.target.closest("[data-cta]");
  if (!cta) return;
  window.remktrTrack("cta_click", {
    cta: cta.dataset.cta,
    href: cta.getAttribute("href")
  });
  // Meta standard event so you can optimize on it before bookings accumulate.
  // Skipped for CTAs marked data-cta-secondary (e.g. "see how it works" anchors)
  // so the optimization signal stays booking-intent only.
  if (window.fbq && !cta.hasAttribute("data-cta-secondary")) {
    window.fbq("track", "InitiateCheckout");
  }
});

// ---------- Application form submitted (mid-funnel: CTA -> form -> Calendly) ----------
// Fires alongside the pages' own inline submit handlers; only counts valid submissions.
document.addEventListener("submit", (event) => {
  const form = event.target;
  if (!form || form.id !== "apply-form") return;
  if (typeof form.checkValidity === "function" && !form.checkValidity()) return;
  // Pages that screen leads set form.dataset.qualified = "no" in their own submit handler (runs first).
  // Unqualified applications must not train Meta/X on "Lead"; they get a custom event instead.
  if (form.dataset.qualified === "no") {
    window.remktrTrack("application_unqualified");
    if (window.fbq) window.fbq("trackCustom", "UnqualifiedLead");
    return;
  }
  window.remktrTrack("application_submitted");
  if (window.fbq) window.fbq("track", "Lead");
});

// ---------- THE conversion: Calendly booking completed (fires in the
// on-page popup on your https production domain) ----------
window.addEventListener("message", (event) => {
  if (typeof event.origin !== "string" || event.origin.indexOf("calendly.com") === -1) return;
  const type = event.data && event.data.event;
  if (type === "calendly.event_scheduled") {
    const t = window.REMKTR_TRACKING;
    window.remktrTrack("booking_scheduled", { source: "calendly_embed" });
    if (window.fbq) window.fbq("track", "Schedule");
    if (window.gtag && remktrConfigured(t.googleAdsBookingLabel)) {
      window.gtag("event", "conversion", { send_to: t.googleAdsBookingLabel });
    }
    if (window.twq && remktrConfigured(t.xBookingEventId)) {
      window.twq("event", t.xBookingEventId, {});
    }
    // tell the backend (Close "Call Booked" + Slack booked/call-prep). Calendly sends the event + invitee URIs.
    const p = (event.data && event.data.payload) || {};
    if (window.remktrLead) window.remktrLead.booked({
      event_uri: p.event && p.event.uri, invitee_uri: p.invitee && p.invitee.uri
    });
  }
});

// ---------- Engagement signals (for warm retargeting audiences) ----------
(function engagementSignals() {
  let fired50 = false;
  window.addEventListener("scroll", () => {
    if (fired50) return;
    const depth = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
    if (depth >= 0.5) {
      fired50 = true;
      window.remktrTrack("scroll_50");
    }
  }, { passive: true });
  setTimeout(() => window.remktrTrack("engaged_30s"), 30000);
})();

// ---------- Page view ----------
window.addEventListener("load", () => {
  window.remktrTrack("landing_page_view");
  // Meta ViewContent carries offer + variant so the algorithm learns which
  // creative/page combinations produce bookings (post-Andromeda signal).
  if (window.fbq) {
    const attribution = JSON.parse(localStorage.getItem("remktr_attribution") || "{}");
    window.fbq("track", "ViewContent", {
      content_name: (document.body.dataset.offer || document.title) + ":" + (attribution.v || "a"),
      content_category: "vsl"
    });
  }
});

// ---------- Lead backend (added 2026-10-05) ----------
// Every application (qualified or not) is POSTed to the remktr-go Netlify function (/api/lead; same-origin on remktr.com via proxy),
// which writes the lead to Close CRM and alerts Slack. On a Calendly booking it is called again (type "booked").
// Localhost previews never send (no test leads in the CRM by accident).
(function leadBackend() {
  function endpoint() {
    const h = window.location.hostname;
    if (window.REMKTR_TRACKING.leadEndpoint) return window.REMKTR_TRACKING.leadEndpoint;
    if (h === "localhost" || h === "127.0.0.1" || h === "" ) return null;
    // remktr.com proxies /api/lead to the remktr-go function (_redirects in remktrhq/remktr-website)
    if (h === "remktr.com" || h === "www.remktr.com" || h === "go.remktr.com" || /\.netlify\.app$/.test(h)) return "/api/lead";
    return "https://remktr-go.netlify.app/api/lead";
  }
  function cookie(name) {
    const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return m ? decodeURIComponent(m[1]) : "";
  }
  function attribution() {
    try { return JSON.parse(localStorage.getItem("remktr_attribution") || "{}"); } catch (e) { return {}; }
  }
  function remember(obj) {
    try { sessionStorage.setItem("remktr_lead", JSON.stringify(obj)); } catch (e) {}
  }
  function recall() {
    try { return JSON.parse(sessionStorage.getItem("remktr_lead") || "{}"); } catch (e) { return {}; }
  }
  function post(body) {
    const url = endpoint();
    if (!url) { console.info("[remktr] lead backend skipped on this host", body.type); return Promise.resolve(null); }
    return fetch(url, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body), keepalive: true, mode: "cors"
    }).then((r) => r.json()).catch((err) => { console.warn("[remktr] lead backend error", err); return null; });
  }
  const DASH = /[\u2013\u2014]/g;
  function phoneE164(raw) {
    const d = String(raw || "").replace(/[^0-9+]/g, "");
    if (!d) return "";
    if (d[0] === "+") return d;
    if (d.length === 10) return "+1" + d;
    if (d.length === 11 && d[0] === "1") return "+" + d;
    return "+" + d;
  }

  window.remktrLead = {
    submit(data) {
      const a = attribution();
      const body = Object.assign({}, data, {
        type: "application",
        offer: data.offer || document.body.dataset.offer,
        page_url: window.location.href.split("#")[0],
        referrer: document.referrer || "",
        attribution: a,
        fbp: cookie("_fbp"), fbc: cookie("_fbc"),
        submitted_at: new Date().toISOString()
      });
      remember({ email: data.email, name: data.name, brand: data.brand, offer: body.offer });
      return post(body).then((res) => {
        if (res && res.lead_id) remember(Object.assign(recall(), { lead_id: res.lead_id }));
        return res;
      });
    },
    booked(info) {
      const lead = recall();
      return post(Object.assign({ type: "booked", lead_id: lead.lead_id || "", email: lead.email || "",
        offer: lead.offer || document.body.dataset.offer, page_url: window.location.href.split("#")[0] }, info || {}));
    },
    // Calendly prefill: name/email + Jayce's event questions (in order):
    // a1 How did you hear (required) -> source + all form answers, a2 Brand or Agency, a3 Brand/Agency name,
    // a4 website link -> Amazon link, a5 DSP question (left for them), a6 monthly Amazon ads (choice list, only exact matches),
    // a7 phone for texts. utm_* pass through so Calendly keeps attribution.
    calendlyUrl(base, d) {
      const a = attribution();
      const src = (a.utm_source || "").toLowerCase();
      const page = (d.offer || document.body.dataset.offer || "").replace("growth-leak-", "page ").toUpperCase();
      const how = (src === "meta" || src === "facebook" || src === "fb" || src === "ig" ? "Meta ad" :
        src === "google" ? "Google ad" : src === "bing" ? "Bing ad" : src ? src : "Website") + " (" + page.trim() + ")";
      const summary = [how,
        "Brand: " + (d.brand || ""), "Amazon: " + (d.amazon_link || ""),
        "Revenue (12 mo): " + (d.revenue || ""), "Ad spend/mo: " + (d.adspend || ""),
        "Ads run by: " + (d.ads_run_by || ""), d.goal ? "Goal: " + d.goal : "", "Role: " + (d.role || "")
      ].filter(Boolean).join(" | ").replace(DASH, "-").slice(0, 480);
      const spendMap = { "Under $5K": "Less than $10,000", "$150K+": "$100,000+" };
      const parts = (d.name || "").trim().split(/\s+/);
      const q = {
        name: d.name || "", email: d.email || "",
        first_name: parts[0] || "", last_name: parts.slice(1).join(" "),
        a1: summary,
        a2: /agency|consultant/i.test(d.role || "") ? "Agency" : "Brand",
        a3: d.brand || "", a4: d.amazon_link || "",
        a7: phoneE164(d.phone)
      };
      const spend = spendMap[(d.adspend || "").replace(DASH, "-").replace(" - ", " – ")] || spendMap[d.adspend || ""];
      if (spend) q.a6 = spend;
      ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((k) => { if (a[k]) q[k] = a[k]; });
      if (!q.utm_term && a.v) q.utm_term = "variant_" + a.v;
      const qs = Object.keys(q).filter((k) => q[k]).map((k) => k + "=" + encodeURIComponent(q[k])).join("&");
      return base + (base.indexOf("?") === -1 ? "?" : "&") + qs;
    }
  };
})();
