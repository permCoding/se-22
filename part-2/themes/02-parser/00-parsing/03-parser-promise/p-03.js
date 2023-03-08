/*
 * как обратиться к страничке в интернете по известному адресу
 * и сохранить её содержимое к себе на локальный комп
 * чтобы затем проанализировать файл в директории
 */

const rp = require('request-promise');
const url = 'https://github.com/permCoding/js-lodash-lection';
const host = 'https://github.com';


function write_to_file(fileName, data) {
	require('fs')
		.writeFileSync(fileName, data);
}

function get_match(html) {
	write_to_file('out.html', html);
}

rp(url)
	.then(function (html) { // success
		get_match(html);
	})
	.catch(function (err) {
		// error
	});

