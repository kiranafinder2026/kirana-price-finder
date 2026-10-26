const CACHE='kirana-price-finder-v4';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg'];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith('kirana-price-finder-')&&key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    const cached=await cache.match(request);
    try{
      const response=await fetch(request);
      if(response.ok)cache.put(request,response.clone());
      return response;
    }catch(error){
      if(cached)return cached;
      if(request.mode==='navigate')return (await cache.match('./index.html'))||Response.error();
      return Response.error();
    }
  })());
});


