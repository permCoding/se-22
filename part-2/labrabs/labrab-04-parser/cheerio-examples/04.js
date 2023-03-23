const cheerio = require('cheerio');

let html = `
    <div class="prod__info">
        <div class="prod__price">
            <span name="title">Стоимость:</span>
            <span>42500 руб</span>
            <span>132500 руб.</span>
            <span>6200 Руб.</span>
        </div>
        <div id="all__prices">
            <span>6200 руб</span>
            <span>80800 руб</span>
            <span name="max_price">132500 руб.</span>
            <span>42500 Руб.</span>
        </div>
    </div>`

let $ = cheerio.load(html)

let arr;

arr = $('.prod__price')
    .find('span:eq(0)')
    .siblings()
    .toArray()
    .map((e) => +$(e).text().trim().split(' ')[0])
    .sort((a,b) => a-b)
console.log(arr)

arr = $(html)
    .find('[name=max_price]')
    .siblings()
    .toArray()
    .map((e) => +$(e).text().trim().split(' ')[0])
    .sort((a,b) => b-a)
console.log(arr)
