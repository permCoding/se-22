const request = require('sync-request'); // npm i sync-request
const cheerio = require('cheerio'); // https://cheerio.js.org/docs/intro

let url = "https://pcoding.ru/darkNet.php";
let ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36';
let res = request('GET', url, { headers: {'user-agent': ua} });
let html = res.getBody('utf8');

let $ = cheerio.load(html); // объект для парсинга данных
let links = $("a") // получить все ссылки

for (let elm of links) { // вывести ссылки и текст
    console.log($(elm).attr('href'), '\t', $(elm).text());
}

/*
сначала получить всю страницу
зетем выбрать из неё нужные данные

<a class="links" href="https://pcoding.ru/pdf/AgroRobot.pdf" target="_blank">
    AgroRobot.pdf
</a>
*/