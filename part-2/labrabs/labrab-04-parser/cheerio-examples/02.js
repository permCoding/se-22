const cheerio = require('cheerio');

let html = `
    <div class="prod__info">
        <div class="prod__name" id="prodname">
            <span>  ZenFone 3 Deluxe Oreo  </span>
        </div>
        <div class="prod__price">
            <span>Стоимость:</span>
            <span>22500</span>
            <span>руб.</span>
        </div>
        <div class="prod__country">
            <span class="country__label">Страна производитель:</span>
            <span>Italy</span>
        </div>
    </div>`

let $ = cheerio.load(html)

let tag = $('.prod__info')
    .children('div.prod__name')
    .children('span')
console.log($(tag).text().trim())

let div = $('div.prod__price')
console.log($(div).html())

console.log($('span').length)
console.log($('[id=prodname]').text().trim())

for (let elm of $('span')) {
    console.log($(elm).text().trim())
}

let arr = $('span')
arr.each((i,e) => console.log(i+1, $(e).text().trim()))

console.log($('span:eq(0)').text())
console.log($('span:eq(-1)').text())
console.log($('span:eq(2)').prev().text())
console.log($('span:eq(2)').next().text())

let n = $(arr).length
for (let i=0; i<n; i++) {
    console.log( $(`span:eq(${i})`).text() )
}
