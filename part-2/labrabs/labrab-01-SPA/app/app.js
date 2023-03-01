// npm i hbs express - установить движок страниц и фреймворк
const express = require("express");

const app = express(); // создадим объект приложения
// app.use('/public', express.static(__dirname + '/public'));
app.use(express.static('public'));
app.set("view engine", "hbs"); // подключим движок для рендеринга

const index = require('./routes/index.js');
const sorted = require('./routes/sorted.js');

app.use(['/index','/'], index);
app.use('/sorted', sorted);

app.listen(3000, () => console.log("http://localhost:3000/"));
