const router = require('express').Router();

let { model } = require('../models/abiturs.js');

router.get('/', (req, res) => { // без параметров
    // тут всегда сортируем данные по рейтингу по убыванию
    // самостоятельно - вывести всех по рейтингу по убыванию
    //
    res.render('index.hbs', model); // рендерим страницу
});

router.get('/count/:count', (req, res) => { // с ограничением
    const count = parseInt(req.params.count); // получим кол-во
    console.log(count); // это просто для контроля
    // тут сортируем данные по рейтингу по убыванию - по умолчанию
    // и берём ограниченное количество count
    // самостоятельно - вывести первых count по рейтингу
    // формат запроса: http://localhost:3000/sorted/count/5
    //
    res.render('index.hbs', model); // рендерим страницу
});

router.get('/:field&:direct', (req, res) => { // с параметрами
    const field = req.params.field; // получим поле для сортировки
    const direct = req.params.direct; // получим направление для сортировки
    console.log(field, direct); // это просто для контроля
    // тут сортируем данные по указанным полю и направлению
    // самостоятельно - вывести всех отсортированно по полю и по направлентю
    // формат запроса: http://localhost:3000/sorted/lastName&asc
    //
    res.render('index.hbs', model); // рендерим страницу
});

module.exports = router;

// при переходе к новому запросу - все данные должны использоваться
// не должно быть такого, что после вывода ограниченного кол-ва 
// абитуриентов при следующем запросе "вывести всех"
// выводилось опять ограниченное кол-во
