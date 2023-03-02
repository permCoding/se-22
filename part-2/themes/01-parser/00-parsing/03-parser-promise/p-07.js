/*
 * как обратиться к страничке в интернете по известному адресу
 * и посмотреть её содержимое 
 */

const rp = require('request-promise');
const url = 'https://pCoding.ru/csv/students.csv';

rp(url)
	.then(function (data) { // success
		console.log(data);
	})
	.catch(function (err) {
		console.error(err);
	})
	.finally(() => console.log('\tThe end...'));
