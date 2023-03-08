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
    for (let elm of links) { // сформировать массив объектов
        let href = $(elm).attr('href');
        let title = $(elm).text();
        results.push({"title":title,"href":href});
    }
    return results;
}

let url = "https://pcoding.ru/darkNet.php";
let html = get_html(url);
let arr = get_data();
console.table(arr);

// let results = links.map(elm => $(elm).attr('href'));



// results.each(elm => console.log(elm));


// links
//     .each((i, link) => {
//         data.push($(link).attr("href"));
//     });
// console.log(data);


/*
сначала получить всю страницу
зетем выбрать из неё нужные данные

<a class="links" href="https://pcoding.ru/pdf/AgroRobot.pdf" target="_blank">
    AgroRobot.pdf
</a>
*/