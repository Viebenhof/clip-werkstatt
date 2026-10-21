// Offline-Cache für die Clip-Werkstatt. Bei Änderungen an der App die Versionsnummer erhöhen.
const CACHE = 'clip-werkstatt-v1';
const SHELL = ['/', '/index.html', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png', '/icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || req.url.startsWith('blob:') || req.url.startsWith('data:')) return;
  // Seite selbst: erst Netz (damit Updates ankommen), sonst Cache
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { caches.open(CACHE).then(c => c.put('/', r.clone())); return r; }).catch(() => caches.match('/')));
    return;
  }
  // Icons, Schriften usw.: erst Cache, sonst Netz und merken
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok || r.type === 'opaque') { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return r;
  })));
});
