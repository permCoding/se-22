const request = require('sync-request'); // npm i sync-request
const cheerio = require('cheerio'); // https://cheerio.js.org/docs/intro

const get_html = (url) => {
    let ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36';
    let res = request('GET', url, { headers: {'user-agent': ua} });
    let html = res.getBody('utf8');
    return html;    
}

const get_data = () => {
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
let arr = get_data();
arr.map(e => console.log(e));

/*
сначала получить всю страницу
зетем выбрать из неё нужные данные

<a class="links" href="https://pcoding.ru/pdf/AgroRobot.pdf" target="_blank">
    AgroRobot.pdf
</a>
*/