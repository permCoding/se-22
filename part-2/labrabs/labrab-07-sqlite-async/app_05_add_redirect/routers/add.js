const router = require('express').Router();
const sqlite3 = require('sqlite3').verbose();

const add_dog = (req, res) => {
    let arr_values = ['Марфа','black',4];
    let query_insert = `INSERT INTO dogs(dog_name,color,age) VALUES(?,?,?)`;
    (new sqlite3.Database('./private/shelter.db'))
        .run(query_insert, arr_values, (err) => {
            if (err) return console.error(err);
            res.redirect('/table');
        })
        .close();
}

router.get('/', add_dog);

module.exports = router;
