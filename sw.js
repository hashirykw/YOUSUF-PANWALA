/* Maths by Yousuf Panwala — service worker: pages network-first, own files cached, everything else straight to the network. */
const VERSION = 'yp-1';
const CORE = ['./', 'index.html', '404.html', 'manifest.webmanifest', 'icon-192.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== VERSION).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url); if (u.origin !== location.origin) return;
  if (r.mode === 'navigate') { e.respondWith(fetch(r).then(res => { const c = res.clone(); caches.open(VERSION).then(x => x.put(r, c)); return res; }).catch(() => caches.match(r).then(m => m || caches.match('./')))); return; }
  e.respondWith(caches.open(VERSION).then(async c => { const hit = await c.match(r); const fresh = fetch(r).then(res => { if (res.ok) c.put(r, res.clone()); return res; }).catch(() => hit); return hit || fresh; }));
});
