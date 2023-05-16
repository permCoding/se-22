const sqlite3 = require('sqlite3').verbose();
const router = require('express').Router();
const htmlParser = require('express').urlencoded({extended: false});

router.post('/', htmlParser, (req, res) => {
    let dog_name = req.body.dog_name; // находим по имени тега в шаблоне
    let color = req.body.color; // находим по имени тега в шаблоне
    let age = +req.body.age; // находим по имени тега в шаблоне
    let arr_values = [dog_name, color, age];

    let query_insert = `INSERT INTO dogs(dog_name,color,age) VALUES(?,?,?)`;
    (new sqlite3.Database('./private/shelter.db'))
        .run(query_insert, arr_values, (err) => {
            if (err) return console.error(err);
            res.redirect('/');
        })
        .close();
});

module.exports = router;
