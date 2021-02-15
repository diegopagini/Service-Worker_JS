/** @format */

//Self hace referencia al mismo.
//es igual a var self = this;
self.addEventListener('fetch', (event) => {
	//Tarea: interceptar imagen y cambiarla por otra.

	if (event.request.url.includes('main.jpg')) {
		const resp = fetch('img/main-patas-arriba.jpg');
		event.respondWith(resp);
	}
});
