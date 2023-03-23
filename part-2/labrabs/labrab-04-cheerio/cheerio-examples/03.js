const cheerio = require('cheerio');

let html = `
    <div class="prod__info">
        <div class="prod__name" id="prodname">
            <span>  ZenFone 3 Deluxe Oreo  </span>
        </div>
        <div class="prod__price">
            <span class="title__price">Стоимость:</span>
            <span name="price">22500</span>
            <span>руб.</span>
        </div>
        <div class="prod__country">
            <span class="country__label">Страна производитель:</span>
            <span>Italy</span>
        </div>
    </div>`

let $ = cheerio.load(html)

let price = $('span.country__label')
    .parent()
    .prev('div')
    .find('span:eq(1)')
    .text()
    .trim()
console.log(price)

let next_all = $('span.title__price').nextAll()
console.log(next_all.length)
let arr = next_all
    .toArray()
    .map(e => $(e).text().trim())
console.log(arr)

let prs = $('span')
    .toArray()
    .filter(e => $(e).attr('name') == 'price')

prs.forEach(e => console.log($(e).text()))
$(prs).each(e => console.log($(e).text()))
