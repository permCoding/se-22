const cheerio = require('cheerio');

let html = `
    <td>
    <div> </div>
    <div class="prod__info">
        <div class="prod__price">
            <span class="title">Стоимость:</span>
            <span>42500 руб</span>
            <span>132500 руб.</span>
            <span>6200 Руб.</span>
        </div>
        <div id="all__prices">
            <span class="min_price">6200 руб</span>
            <span>80800 руб</span>
            <span name="max_price">132500 руб.</span>
            <span>42500 Руб.</span>
        </div>
    </div>
    </td>`

let $ = cheerio.load(html)

let arr;

arr = $('.prod__price')
    .find('span')
    .filter('.title')
    .toArray()
    .map((e) => $(e).text().trim())
console.log(arr)

arr = $(html)
    .find('div[id=all__prices]')
    .find('span')
    .not('.title')
    .toArray()
    .map((e) => $(e).text().trim())
console.log(arr)

arr = $('#all__prices')
    .find('span')
    .toArray()
    .map((e) => $(e).text().trim())
console.log(arr)

console.log(
    $('.min_price', '#all__prices').text().trim()
)

console.log( // искать в контексте
    $('.title', '.prod__price').text().trim()
)

let tag_info = $('div.prod__info')
console.log( // искать в контексте в контексте
    $('.title', '.prod__price', tag_info).text().trim()
)
