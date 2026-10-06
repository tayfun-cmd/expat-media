/* EXPAT INSURANCE – Tracking, Cookie-Banner, Meta-Pixel
   - Meta-Pixel lädt nur nach Zustimmung ("Einverstanden")
   - Eigenes, anonymes Reporting (ohne Cookies, ohne personenbezogene Daten) an Make -> Google Sheet
   - window.eiTrack(name, params, {eventID}) für Funnel, Rechner und Kontakt
   - window.eiAttr() liefert Kampagnen-Herkunft für Lead-Übermittlung
   - window.eiConsent() öffnet das Banner erneut */
(function () {
  if (window.__eiTrack) return; window.__eiTrack = 1;
  var PIXEL_ID = '1533153958044916';
  var LOG_HOOK = 'https://hook.eu1.make.com/igybxkrqvyvcxp5dzbrtygfhwuo0b67v';
  var CAPI_HOOK = 'https://hook.eu1.make.com/uqwxhypptt2rlk8sed85qmg1mvj6kjwb';
  var PRIVACY = '?legal=datenschutz';
  var CKEY = 'eiconsent';
  var d = document, w = window;

  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function ss(k, v) { try { if (v === undefined) return sessionStorage.getItem(k); sessionStorage.setItem(k, v); } catch (e) { return null; } }
  function clean(s) { return String(s == null ? '' : s).replace(/["\\\n\r\t]/g, ' ').slice(0, 300); }
  function rid() { return Math.random().toString(36).slice(2, 10) + Date.now().toString(36); }

  /* ---------- Herkunft (Kampagne) ---------- */
  var A = {}; try { A = JSON.parse(ss('eiattr') || 'null') || {}; } catch (e) { A = {}; }
  var q; try { q = new URLSearchParams(location.search); } catch (e) { q = { get: function () { return null; } }; }
  var keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid'];
  var neu = keys.some(function (k) { return q.get(k); });
  if (neu) { keys.forEach(function (k) { A[k] = q.get(k) || ''; }); if (A.fbclid) A.fbts = Date.now(); }
  if (q.get('fbtest')) ss('eifbtest', q.get('fbtest'));
  if (!A.ref) {
    var r = ''; try { r = d.referrer ? new URL(d.referrer).hostname : ''; } catch (e) { }
    if (r && r.indexOf(location.hostname.replace(/^www\./, '')) < 0) A.ref = r; else A.ref = A.ref || '';
  }
  if (!A.utm_source) {
    if (A.fbclid) A.utm_source = 'facebook';
    else if (/instagram/i.test(A.ref)) A.utm_source = 'instagram';
    else if (/facebook|fb\.com/i.test(A.ref)) A.utm_source = 'facebook';
    else if (/google\./i.test(A.ref)) A.utm_source = 'google';
  }
  ss('eiattr', JSON.stringify(A));
  w.eiAttr = function () {
    return {
      utm_source: clean(A.utm_source), utm_medium: clean(A.utm_medium), utm_campaign: clean(A.utm_campaign),
      utm_content: clean(A.utm_content), utm_term: clean(A.utm_term), werbeklick: A.fbclid ? 'ja' : 'nein',
      referrer: clean(A.ref), landing: clean(ss('eiland') || location.pathname)
    };
  };
  if (!ss('eiland')) ss('eiland', location.pathname);
  var SID = ss('eisid'); if (!SID) { SID = rid().slice(0, 10); ss('eisid', SID); }

  /* ---------- Meta-Pixel ---------- */
  var consent = ls(CKEY); /* 'all' | 'necessary' | null */
  var queue = [], pixelOn = false;
  function loadPixel() {
    if (pixelOn || !PIXEL_ID) return; pixelOn = true;
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(w, d, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    w.fbq('init', PIXEL_ID);
    w.fbq('track', 'PageView');
    if (/^\/rechner/.test(location.pathname)) w.fbq('track', 'ViewContent', { content_name: 'Tarifrechner', content_category: 'Rechner' });
    queue.forEach(fire); queue = [];
  }
  var STD = { Lead: 1, Contact: 1, ViewContent: 1, CompleteRegistration: 1, SubmitApplication: 1, Schedule: 1 };
  function fire(ev) {
    if (!w.fbq) return;
    var o = ev.id ? { eventID: ev.id } : undefined;
    w.fbq(STD[ev.n] ? 'track' : 'trackCustom', ev.n, ev.p || {}, o);
  }

  /* ---------- eigenes Reporting ---------- */
  var log = [], S = { fs: 0, step: '', fl: 0, rb: 0, rl: 0, wa: 0 }, t0 = Date.now(), sent = false;
  function sendLog() {
    if (sent) return; sent = true;
    var a = w.eiAttr();
    var body = {
      sitzung: SID, seite: location.pathname || '/', quelle: a.utm_source, medium: a.utm_medium,
      kampagne: a.utm_campaign, anzeige: a.utm_content, gruppe: a.utm_term, werbeklick: a.werbeklick,
      referrer: a.referrer, geraet: w.innerWidth < 760 ? 'mobil' : 'desktop',
      sprache: en() ? 'en' : 'de', cookies: consent === 'all' ? 'ja' : (consent ? 'nein' : 'keine Wahl'),
      sekunden: Math.round((Date.now() - t0) / 1000), funnel_start: S.fs, funnel_schritt: S.step, funnel_lead: S.fl,
      rechner_berechnet: S.rb, rechner_lead: S.rl, whatsapp: S.wa, ereignisse: log.slice(0, 40).join(' > ')
    };
    for (var k in body) if (typeof body[k] === 'string') body[k] = clean(body[k]);
    /* fetch mit keepalive: überlebt das Schließen der Seite; sendBeacon mit JSON lehnt Make ab */
    try { fetch(LOG_HOOK, { method: 'POST', body: JSON.stringify(body), keepalive: true, headers: { 'Content-Type': 'application/json' } }); } catch (e) { }
  }
  /* Bots ausfiltern: nur senden, wenn die Seite wirklich sichtbar war */
  var seen = d.visibilityState === 'visible';
  d.addEventListener('visibilitychange', function () { if (d.visibilityState === 'visible') seen = true; if (d.visibilityState === 'hidden' && seen && !/bot|crawl|spider|headless/i.test(navigator.userAgent)) sendLog(); });
  w.addEventListener('pagehide', function () { if (seen && !/bot|crawl|spider|headless/i.test(navigator.userAgent)) sendLog(); });

  var lastLead = 0;
  /* ---------- Conversions API: Lead serverseitig über Make an Meta (nur mit Einwilligung) ---------- */
  function sha(s) {
    if (!s || !w.crypto || !crypto.subtle) return Promise.resolve('');
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(s)).then(function (b) {
      return Array.prototype.map.call(new Uint8Array(b), function (x) { return ('0' + x.toString(16)).slice(-2); }).join('');
    });
  }
  function ck(n) { var m = d.cookie.match(new RegExp('(?:^|; )' + n + '=([^;]*)')); return m ? decodeURIComponent(m[1]) : ''; }
  w.eiLead = function (eid, c, quelle) {
    try {
      if (consent !== 'all' || !eid) return;
      c = c || {};
      var em = String(c.email || '').trim().toLowerCase();
      var ph = String(c.phone || '').replace(/\D/g, '').replace(/^00/, '');
      var fn = String(c.fn || '').trim().toLowerCase(), ln = String(c.ln || '').trim().toLowerCase();
      Promise.all([sha(em), sha(ph), sha(fn), sha(ln)]).then(function (h) {
        var ud = { client_user_agent: navigator.userAgent };
        if (h[0]) ud.em = [h[0]]; if (h[1]) ud.ph = [h[1]]; if (h[2]) ud.fn = [h[2]]; if (h[3]) ud.ln = [h[3]];
        var fbp = ck('_fbp'), fbc = ck('_fbc') || (A.fbclid ? 'fb.1.' + (A.fbts || Date.now()) + '.' + A.fbclid : '');
        if (fbp) ud.fbp = fbp; if (fbc) ud.fbc = fbc;
        var body = { data: [{ event_name: 'Lead', event_time: Math.floor(Date.now() / 1000), event_id: eid, action_source: 'website',
          event_source_url: location.origin + location.pathname, user_data: ud,
          custom_data: { content_name: quelle === 'Rechner' ? 'Tarifvergleich PDF' : 'Beratungsanfrage', quelle: quelle || '' } }] };
        var tc = ss('eifbtest'); if (tc) body.test_event_code = tc;
        fetch(CAPI_HOOK, { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ event_id: eid, body: JSON.stringify(body) }) });
      });
    } catch (e) { }
  };

  w.eiTrack = function (name, params, opt) {
    params = params || {}; opt = opt || {};
    if (name === 'Contact' && Date.now() - lastLead < 5000) return; /* WhatsApp-Öffnung direkt nach Lead nicht doppelt zählen */
    if (name === 'Lead') { lastLead = Date.now(); if (params.quelle === 'Rechner') S.rl++; else S.fl++; }
    if (name === 'FunnelStart') S.fs++;
    if (name === 'FunnelStep') S.step = (params.nr ? params.nr + ' ' : '') + (params.schritt || '');
    if (name === 'RechnerBerechnet') S.rb++;
    if (name === 'Contact') S.wa++;
    log.push(name + (params.schritt ? ':' + params.schritt : '') + (params.quelle ? ':' + params.quelle : ''));
    var ev = { n: name, p: params, id: opt.eventID };
    if (name === 'FunnelStep' || name === 'FunnelAbbruch') return; /* nur eigenes Reporting, nicht an Meta */
    if (pixelOn) fire(ev); else if (consent !== 'necessary') queue.push(ev);
  };

  /* WhatsApp-Klicks überall erkennen (Links und window.open) */
  /* Bubble-Phase: Klicks, die der Funnel abfängt (Beratungs-Buttons), kommen hier nicht an */
  w.addEventListener('click', function (e) {
    if (e.defaultPrevented) return;
    var a = e.target.closest ? e.target.closest('a[href*="wa.me"],a[href*="whatsapp"]') : null;
    if (a) w.eiTrack('Contact', { kanal: 'WhatsApp' });
  });
  var wo = w.open;
  w.open = function (u) { try { if (/wa\.me|whatsapp/i.test(String(u))) w.eiTrack('Contact', { kanal: 'WhatsApp' }); } catch (e) { } return wo.apply(w, arguments); };

  /* ---------- Cookie-Banner ---------- */
  function en() { var l = q.get('lang'); if (l) return l === 'en'; return ls('eilang') === 'en'; }
  var css = '.eick-ov{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(5,12,26,.55);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);opacity:0;transition:opacity .3s ease}' +
    '.eick-ov.on{opacity:1}' +
    '.eick{box-sizing:border-box;width:100%;max-width:min(400px,calc(100vw - 32px));background:#0b1a33;border:1px solid rgba(241,95,20,.45);border-radius:16px;padding:26px 24px 22px;color:#e8eef7;font:15px/1.55 "Instrument Sans",system-ui,-apple-system,sans-serif;box-shadow:0 30px 80px rgba(0,0,0,.45);transform:translateY(8px);transition:transform .3s ease}' +
    '.eick-ov.on .eick{transform:none}' +
    '.eick-k{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#F15F14;font-weight:700;margin:0 0 10px}' +
    '.eick h2{font:600 21px/1.25 "Instrument Sans",system-ui,sans-serif;color:#fff;margin:0 0 10px;letter-spacing:-.2px}' +
    '.eick p{margin:0;color:#b9c6d8;font-size:14px}' +
    '.eick p a{color:#F15F14;text-decoration:underline;text-underline-offset:2px}' +
    '.eick-b{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:20px 0 14px}' +
    '.eick-b button:focus-visible{outline:2px solid #fff;outline-offset:2px}.eick-b button{font:600 15px/1 "Instrument Sans",system-ui,sans-serif;border-radius:10px;padding:14px 10px;cursor:pointer;transition:filter .2s,background .2s}' +
    '.eick-y{background:#F15F14;color:#fff;border:1px solid #F15F14}.eick-y:hover{filter:brightness(1.08)}' +
    '.eick-n{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.55)}.eick-n:hover{background:rgba(255,255,255,.06)}' +
    '.eick small{display:block;font-size:12px;line-height:1.5;color:#7f8fa6}' +
    '@media(max-width:380px){.eick-b{grid-template-columns:1fr}}';
  function banner() {
    if (d.getElementById('eick')) return;
    var st = d.createElement('style'); st.textContent = css; d.head.appendChild(st);
    var E = en();
    var ov = d.createElement('div'); ov.className = 'eick-ov'; ov.id = 'eick';
    ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-labelledby', 'eick-h');
    ov.innerHTML = '<div class="eick"><div class="eick-k">Expat Insurance</div>' +
      '<h2 id="eick-h">' + (E ? 'Mind if we count along?' : 'Dürfen wir mitzählen?') + '</h2>' +
      '<p>' + (E ? 'We use Meta cookies to see which ad actually leads to an enquiry. That is all we use them for. Details are in our <a href="' + PRIVACY + '">privacy policy</a>.'
        : 'Wir setzen Cookies von Meta ein, um zu sehen, welche Anzeige am Ende zu einer Anfrage führt. Nur dafür. Was dabei erhoben wird, steht in der <a href="' + PRIVACY + '">Datenschutzerklärung</a>.') + '</p>' +
      '<div class="eick-b"><button type="button" class="eick-y">' + (E ? 'Accept' : 'Einverstanden') + '</button>' +
      '<button type="button" class="eick-n">' + (E ? 'Essential only' : 'Nur Notwendiges') + '</button></div>' +
      '<small>' + (E ? 'You can use the site fully either way and change your choice at any time.' : 'Du kannst die Seite in beiden Fällen vollständig nutzen und deine Entscheidung jederzeit ändern.') + '</small></div>';
    d.body.appendChild(ov);
    requestAnimationFrame(function () { requestAnimationFrame(function () { ov.classList.add('on'); }); });
    function done(v) {
      consent = v; ls(CKEY, v); ls(CKEY + '_t', new Date().toISOString());
      ov.classList.remove('on'); setTimeout(function () { ov.remove(); }, 300);
      if (v === 'all') loadPixel(); else { queue = []; }
    }
    var pl = ov.querySelector('.eick p a');
    if (pl) pl.onclick = function (e) {
      var fl = dsLink(); if (!fl) return; /* Fallback: Link lädt Seite mit Datenschutz-Fenster */
      e.preventDefault(); fl.click();
    };
    /* Solange das Datenschutz-Fenster offen ist, Banner ausblenden */
    var watch = setInterval(function () {
      if (!d.getElementById('eick')) { clearInterval(watch); return; }
      ov.style.display = d.querySelector('.eilg-ov.open') ? 'none' : '';
    }, 200);
    ov.querySelector('.eick-y').onclick = function () { done('all'); };
    ov.querySelector('.eick-n').onclick = function () { done('necessary'); };
  }
  w.eiConsent = function () {
    if (consent === 'all' && pixelOn) { /* Widerruf: Seite neu laden, damit der Pixel nicht mehr läuft */ }
    var old = consent; consent = null; banner();
    if (old === 'all') { var o = d.getElementById('eick'); if (o) o.querySelector('.eick-n').addEventListener('click', function () { setTimeout(function () { location.reload(); }, 320); }); }
  };
  function dsLink() {
    var a = d.querySelectorAll('.ei-footer a, footer a');
    for (var i = 0; i < a.length; i++) if (/^\s*(datenschutz|privacy)/i.test(a[i].textContent || '')) return a[i];
    return null;
  }
  /* wartet, bis das Datenschutz-Fenster der Seite wieder geschlossen ist */
  function waitLegal(cb) {
    var seenOpen = false, n = 0;
    var t = setInterval(function () {
      var o = d.querySelector('.eilg-ov.open'); if (o) seenOpen = true;
      if ((seenOpen && !o) || (!seenOpen && ++n > 40)) { clearInterval(t); cb(); }
    }, 250);
  }
  /* Link "Cookie-Einstellungen" neben den Datenschutz-Link im Footer setzen */
  function footerLink() {
    var a0 = dsLink();
    if (!a0 || d.getElementById('eick-link')) return;
    var a = d.createElement('a');
    a.id = 'eick-link'; a.href = '#'; a.className = a0.className; a.textContent = en() ? 'Cookie settings' : 'Cookie-Einstellungen';
    a.style.marginLeft = '16px';
    a.onclick = function (e) { e.preventDefault(); w.eiConsent(); };
    a0.parentNode.insertBefore(a, a0.nextSibling);
  }

  function start() {
    footerLink(); setTimeout(footerLink, 1500);
    if (consent === 'all') loadPixel();
    else if (!consent) { if (q.get('legal')) waitLegal(banner); else banner(); }
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', start); else start();
})();
