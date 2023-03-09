const express = require("express");
const axios = require('axios');
const cheerio = require('cheerio');

const url = "https://pcoding.ru/darkNet.php";
const app = express(); // создадим объект приложения
app.use(express.static('public'));
app.set("view engine", "hbs"); // подключим движок для рендеринга

app.get('/', (req, res) => {
    axios
        .get(url)
        .then(response => {
            let $ = cheerio.load(response.data);
            let arr = [];
            $('a.links').each((i, link) => {
                let title = $(link).text();
                let href = $(link).attr('href');
                let obj = {'id':i+1, 'title':title, 'href':href};
                arr.push(obj);
            });
            // arr = arr.filter(obj => obj.href.slice(-4)==='.pdf');
            let model = { // сформируем модель данных
                "title": "Документы",
                "field": "id", // тут поле, по которому сортировка
                "arr": arr
            };
            res.render("index.hbs", model);
        })
        .catch(error => {
            console.log(error);
        });
});

app.get('/:field&:direct', (req, res) => {
    let arr = require('./private/links.json'); // получить массив данных из json
    let model = { // сформируем модель данных
        "title": "Документы",
        "field": "id", // тут поле, по которому сортировка
        "arr": arr
    };
    const field = req.params.field; // поле для сортировки
    const direct = req.params.direct; // направление для сортировки
    if (field !== 'undefined') {
        // тут нужно настроить сортировку по направлению
        model.arr.sort((a,b) => a[field]>b[field]? +1: -1);
    }
    res.render("index.hbs", model);
});

app.listen(3000, () => console.log("http://localhost:3000/"));

/* 
SPA - parser pdf документов
npm i hbs express - установить движок страниц и фреймворк
npm i sync-request cheerio - установить модуль загрузки html-страницы и модуль парсера
- дана страница: https://pcoding.ru/darkNet.php
- собрать все ссылки на документы *.pdf
  и вывести их на свою страничку
*/