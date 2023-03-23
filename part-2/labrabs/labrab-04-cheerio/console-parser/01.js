const request = require('sync-request');
const cheerio = require('cheerio'); // npm i cheerio

let url = "https://pcoding.ru/darkNet.php";
let ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36';
let res = request('GET', url, { headers: {'user-agent': ua} });
let html = res.getBody('utf8');

// let tag = `
// <head>
//     <title>
//         ksdhbsjhvfjsvfj
//     </title>
// </head>`;
// let $ = cheerio.load(tag);
// let obj = $('head');
// console.log(obj.html());

let $ = cheerio.load(html); // объект для парсинга данных
let links = $("a"); // получить все ссылки

for (let elm of links) { // вывести все на экран
    console.log($(elm).attr('href'));
}

/*
https://cheerio.js.org/docs/intro
сначала получить всю страницу
затем выбрать из неё все ссылки

<a class="links" href="https://pcoding.ru/pdf/AgroRobot.pdf" target="_blank">
    AgroRobot.pdf
</a>
*/