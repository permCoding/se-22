/*
 * как обратиться к страничке в интернете по известному адресу
 * и выбрать ссылки на необходимые файлы
 * далее загрузить их аСинхронно к себе на локальный компьютер
 */

const rp = require('request-promise');
const https = require('https');
const fs = require('fs');

const link = 'https://pCoding.ru/csv/students.csv';
const file_name = link.split('/').reverse()[0];

console.log(file_name);
console.log(link);

let file = fs.createWriteStream(file_name);
let request = https.get(link, function (response) {
		response.pipe(file);
	});
