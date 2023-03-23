const cheerio = require('cheerio');

let html = `
    <head>
        <meta charset="UTF-8">
        <title>Страница товара - смартфон</title>
        <link rel="stylesheet" href="style.css">
        <link rel="shortcut icon" href="favicon.ico">
    </head>`

let $ = cheerio.load(html) // объект для парсинга данных

// найти первый тег title
let title = $('title') // получить тег title
// console.log(title) // сложный объект

// получить текстовое содержимое тега
console.log($('title').text());


// let head = $('head') // найти теги head
// let links = $(head).find('link') // найти все теги link из объекта head

let links = $('head').find('link') // найти все теги link
for (let link of links) { // и вывести их атрибут href
    console.log($(link).attr('href'))
}
