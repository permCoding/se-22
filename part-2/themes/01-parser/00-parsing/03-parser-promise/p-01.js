/*
 * как обратиться к страничке в интернете по известному адресу
 * и посмотреть её содержимое 
 */

const rp = require('request-promise');
const url = 'https://pcoding.ru/darkNet.php';

rp(url)
	.then(function (html) { // success
		console.log(html);
	})
	.catch(function (err) {
		// error
	});