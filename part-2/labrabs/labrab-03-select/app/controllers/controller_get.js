const render_data = (req, res) => {
    let { model } = require('../models/model.js'); // получаем данные
    model.arr.sort((a,b)=> a['id']>b['id']?+1:-1 );
    res.render('index.hbs', model); // потом рендерим страницу
}

module.exports = render_data;
