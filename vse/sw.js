/* PEC · офлайн-режим и установка на телефон. Генерируется gen.py (версия ниже меняется при каждой сборке). */
const LINE = "vse", VER = "20261123112037";
const CORE = "pec-" + LINE + "-core-" + VER, PDF = "pec-" + LINE + "-pdf", CDN = "pec-cdn";
const SHELL = ["./", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png"];
const LIBS = ["https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
              "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js",
              "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js"];

self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CORE), l = await caches.open(CDN);
    await Promise.allSettled(SHELL.map((u) => c.add(u)));
    await Promise.allSettled(LIBS.map(async (u) => { if (!(await l.match(u))) await l.add(u); }));
    await self.skipWaiting();
  })());
});
self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith("pec-" + LINE + "-core-") && k !== CORE) await caches.delete(k);
    await self.clients.claim();
  })());
});

async function pdf(req) {
  const url = req.url.split("#")[0], cache = await caches.open(PDF);
  const hit = await cache.match(url);
  const net = fetch(url).then(async (r) => { if (r.ok && r.status === 200) await cache.put(url, r.clone()); return r; }).catch(() => null);
  const res = hit || (await net);
  if (!res) return new Response("offline", { status: 503 });
  // целый файл без Range: pdf.js работает и офлайн
  return new Response(await res.clone().blob(), { status: 200, headers: { "Content-Type": "application/pdf" } });
}
async function page(req) {
  const c = await caches.open(CORE);
  try { const r = await fetch(req); if (r.ok) await c.put("./", r.clone()); return r; }
  catch (e) { return (await c.match("./")) || (await c.match(req)) || new Response("Нет сети", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } }); }
}
async function cdn(req) {
  const c = await caches.open(CDN), hit = await c.match(req);
  if (hit) return hit;
  try { const r = await fetch(req); if (r.ok || r.type === "opaque") await c.put(req, r.clone()); return r; }
  catch (e) { return new Response("", { status: 503 }); }
}
self.addEventListener("fetch", (e) => {
  const req = e.request; if (req.method !== "GET") return;
  const u = new URL(req.url);
  if (u.origin === location.origin) {
    if (req.mode === "navigate" || u.pathname.endsWith("/" + LINE + "/") || u.pathname.endsWith("/index.html")) return e.respondWith(page(req));
    if (u.pathname.endsWith(".pdf")) return e.respondWith(pdf(req));
    return e.respondWith(caches.match(req).then((r) => r || fetch(req)));
  }
  if (/cdnjs\.cloudflare\.com|fonts\.googleapis\.com|fonts\.gstatic\.com/.test(u.host)) e.respondWith(cdn(req));
});
