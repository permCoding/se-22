const render_data = (req, res) => {
    // 1 - получаем данные
    let { model } = require('../models/model.js');

    // 2 - далее настраиваем данные
    let d = req.body.direct;
    if (d < 0) d = 0;
    // console.log('- ', d); // просто для контроля
    let field = d<2? 'id': 'title'; // поле для сортировки
    model.field = field;
    let direct = d%2==0? +1: -1; // направление для сортировки
    model.arr.sort((a,b)=> direct*(a[field]>b[field]?+1:-1) );

    // 3 - потом рендерим страницу
    res.render('index.hbs', model);
}

module.exports = render_data;
