/** @format */

//Self hace referencia al mismo.
//es igual a var self = this;
self.addEventListener('fetch', (event) => {
	if (event.request.url.includes('style.css')) {
		//le quito el style.css a toda la app.
		event.respondWith(null);
	}
	event.respondWith(fetch(event.request));
});
