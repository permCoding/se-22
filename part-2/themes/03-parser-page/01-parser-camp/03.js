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
    let rows = $("table.results-table:eq(0)")
        .find("tbody")
        .find("tr");
    let results = [];
    rows
        .each((i, tr) => {
            let obj = {
                "id": i+1,
                "title": $(tr).children("td.results-table__item").text().trim(),
                "games": $(tr).children("td:eq(2)").text().trim(),
                "ball": $(tr).children("td:eq(8)").text().trim()
            };
            results.push(obj);
        });
    return results;
}

let url = "https://www.championat.com/football/_england/tournament/4013/table/";
let html = get_html(url);
let arr = get_data(html);
let str = JSON.stringify(arr, null, 4);
require('fs').writeFileSync('./results.json', str);

/*
https://cheerio.js.org/docs/intro
<span class="table-item__name jxinfnn">Манчестер Сити</span>

*/