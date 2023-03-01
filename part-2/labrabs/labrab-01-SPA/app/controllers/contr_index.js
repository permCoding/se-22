const render_abiturs = (req, res) => {
    console.log(req.params); // это просто для контроля
    let { model } = require('../models/abiturs.js'); // читаем данные
    res.render('index.hbs', model); // рендерим страницу
}

module.exports = render_abiturs;