/** @format */

// if ('serviceWorker' in navigator) {
// 	console.log('Podemos usarlo!');
// }

//Confirmar si podemos usar el SW
if (navigator.serviceWorker) {
	// console.log('Podemos usar SW');

	navigator.serviceWorker.register('/sw.js'); //Instalar el SW
}
