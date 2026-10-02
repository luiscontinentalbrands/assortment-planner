/* Sawari HR Hub: keeps the app available offline. Records sync through Firestore's own offline storage. */
const CACHE = "hrhub-v1";
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"])).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request; if(r.method !== "GET") return;
  const u = new URL(r.url);
  if(u.origin === location.origin && r.mode === "navigate"){
    e.respondWith(fetch(r).then(res => { const c = res.clone(); caches.open(CACHE).then(ca => ca.put("./index.html", c)); return res; }).catch(() => caches.match("./index.html")));
    return;
  }
  const appFile = u.origin === location.origin || /(^|\.)gstatic\.com$/.test(u.hostname) && u.pathname.startsWith("/firebasejs/") || u.hostname === "cdnjs.cloudflare.com" || u.hostname === "fonts.googleapis.com" || u.hostname === "fonts.gstatic.com";
  if(!appFile) return; /* sign-in and database traffic always goes to the network */
  e.respondWith(caches.match(r).then(hit => {
    const net = fetch(r).then(res => { if(res && (res.ok || res.type === "opaque")){ const c = res.clone(); caches.open(CACHE).then(ca => ca.put(r, c)); } return res; }).catch(() => hit);
    return hit || net;
  }));
});
