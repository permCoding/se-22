const express = require("express");

const app = express(); // создадим объект приложения
app.use(express.static('public'));
app.set("view engine", "hbs"); // подключим движок для рендеринга

const index = require('./routes/index.js');

app.use('/', index);

app.listen(3000, () => console.log("http://localhost:3000/"));

/* 
SPA - parser pdf документов
npm i hbs express - установить движок страниц и фреймворк
npm i sync-request cheerio - установить модуль загрузки html-страницы и модуль парсера
- дана страница: https://pcoding.ru/darkNet.php
- собрать все ссылки на документы *.pdf
  и вывести их на свою страничку
*/