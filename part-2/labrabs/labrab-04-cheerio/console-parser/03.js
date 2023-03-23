const request = require('sync-request');
const cheerio = require('cheerio'); // https://cheerio.js.org/docs/intro

let url = "https://pcoding.ru/darkNet.php";
let ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36';
let res = request('GET', url, { headers: {'user-agent': ua} });
let html = res.getBody('utf8');

let $ = cheerio.load(html); // объект для парсинга данных
let links = $("a.links") // получить все ссылки класса links

for (let elm of links) { // вывести ссылки и текст
    console.log($(elm).attr('href'), '\t', $(elm).text());
}

/*
https://cheerio.js.org/docs/intro
сначала получить всю страницу
затем выбрать из неё все ссылки КЛАССА links на документы и их названия

<a href="https://pcoding.ru/">НА ГЛАВНУЮ</a>

<a class="links" href="https://pcoding.ru/pdf/AgroRobot.pdf" target="_blank">
    AgroRobot.pdf
</a>

*/