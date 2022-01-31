
self.addEventListener('fetch', event =>{
    
    event.responWith(fetch(event.request));

});