/*
 * как обратиться к страничке в интернете по известному адресу
 * и выбрать ссылки на необходимые файлы
 * далее загрузить их Асинхронно к себе на локальный компьютер
 * --- тут пока не настроено, но для нашей задачи это лишнее...
 */

const rp = require('request-promise');
const http = require('http');
const url = 'https://github.com/permCoding/js-lodash-lection';
const host = 'https://github.com';

function write_to_file(fileName, data) {
	require('fs')
		.writeFileSync(fileName, data);
}

function download_link(link) {
	// https://github.com/permCoding/js-lodash-lection/blob/master/students.csv
	file_name = link.split('/').reverse()[0]; // можно сделать регуляркой
	console.log(file_name); // это для контроля
	console.log(link); // это для контроля
	// rp(link)
	// 	.then(function (data) { // success
	// 		// write_to_file(file_name, data);
	// 		console.log(data);
	// 	})
	// 	.catch(function (err) {
	// 		// error
	// 	});
}

function get_match(html) {
	csv = /\/permCoding.+?\.csv(?=">)/mgi;
	arr_ref = html
		.match(csv);
	arr_ref
		.map(elm => download_link(host+elm));
}

rp(url)
	.then(function (html) { // success
		get_match(html);
	})
	.catch(function (err) {
		// error
	});

