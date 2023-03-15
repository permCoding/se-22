const express = require("express");

const app = express(); // создадим объект приложения
app.use(express.static('public'));
app.set("view engine", "hbs"); // подключим движок для рендеринга
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

const index = require('./routes/index.js');
app.use('/', index);

app.listen(3000, () => console.log("http://localhost:3000/"));

/* SPA - пример управления сортировкой через Select
npm i hbs express - установить движок страниц и фреймворк
- дана страница: https://pcoding.ru/darkNet.php
- собрать все ссылки на документы *.pdf
*/