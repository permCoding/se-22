/*
 * как обратиться к страничке в интернете по известному адресу
 * и выбрать из неё нужное содержимое
 */

const rp = require('request-promise');
const url = 'https://pcoding.ru/darkNet.php';

function get_match(html) {
	// console.log(html);
	txt = /https:\/\/pcoding.ru\/ref.+?\.txt(?= target)/mgi;
	arr_ref = html
		.match(txt);
	arr_ref
		.map(elm => console.log(elm));
}


rp(url)
	.then(function (html) { // success
		get_match(html);
	})
	.catch(function (err) {
		// error
	});

