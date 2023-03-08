/*
 * как обратиться к страничке в интернете по известному адресу
 * и посмотреть её содержимое
 */

const rp = require('request-promise');
const url = 'https://github.com/permCoding/js-lodash-lection';
const host = 'https://github.com';

function get_match(html) {
	// href="/permCoding/js-lodash-lection/blob/master/merge.csv">merge.csv</a>
	csv = /\/permCoding.+?\.csv(?=">)/mgi;
	arr_ref = html
		.match(csv);
	arr_ref
		.map(elm => console.log(host+elm));
}

rp(url)
	.then(function (html) { // success
		get_match(html);
	})
	.catch(function (err) {
		// error
	});

