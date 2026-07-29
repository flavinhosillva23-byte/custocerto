const C="cc-v2",A=["./","./index.html","./styles.css","./data.js","./app.js","./manifest.webmanifest","./icon.svg"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(A)))});
self.addEventListener("activate",e=>e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(u.pathname.includes("/data/")){e.respondWith(fetch(e.request,{cache:"no-store"}).catch(()=>caches.match(e.request)));return;}
  e.respondWith(fetch(e.request).then(r=>{const clone=r.clone();caches.open(C).then(c=>c.put(e.request,clone));return r}).catch(()=>caches.match(e.request)));
});
