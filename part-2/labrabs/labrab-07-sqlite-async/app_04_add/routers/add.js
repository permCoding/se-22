const router = require('express').Router();
const sqlite3 = require('sqlite3').verbose();

const add_dog = (req, res) => {
    let arr_values = ['Бобик','black',7];
    let query_insert = `INSERT INTO dogs(dog_name,color,age) VALUES(?,?,?)`;
    let query_select = "SELECT * FROM dogs ORDER BY age DESC";
    (new sqlite3.Database('./private/shelter.db'))
        .run(query_insert, arr_values, (err) => {
            if (err) return console.error(err);
        })
        .all(query_select, [], (err, rows) => {
            if (err) return console.error(err);
            console.log(rows);
            let model = { arr: rows };
            res.render("index.hbs", model);
        })
        .close();
}

router.get('/', add_dog);

module.exports = router;
