const request = require('sync-request');
const cheerio = require('cheerio');

const get_html = (url) => {
    let ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36';
    let res = request('GET', url, { headers: {'user-agent': ua} });
    let html = res.getBody('utf8');
    return html;    
}

const get_data = (html) => {
    let $ = cheerio.load(html); // объект для парсинга данных
    let links = $("a.links") // получить все ссылки класса links
    let results = [];
    links
        .each((i, elm) => {
            let obj = {
                "id": i+1,
                "title": $(elm).text(),
                "href": $(elm).attr('href')
            };
            results.push(obj);
        });
    return results;
}

let url = "https://pcoding.ru/darkNet.php";
let html = get_html(url);
let arr = get_data(html);
let str = JSON.stringify(arr, null, 4);
require('fs').writeFileSync('./links.json', str);

/*
https://cheerio.js.org/docs/intro
сначала получить всю страницу, затем выбрать из неё нужные данные
И СОХРАНИТЬ В JSON-ФАЙЛ
<a class="links" href="https://pcoding.ru/pdf/AgroRobot.pdf" target="_blank">
    AgroRobot.pdf
</a>
*/