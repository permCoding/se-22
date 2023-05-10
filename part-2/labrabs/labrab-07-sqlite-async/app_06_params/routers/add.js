const router = require('express').Router();
const sqlite3 = require('sqlite3').verbose();

const add_dog = (req, res) => {
    // http://localhost:3000/add?par=Хомяк&par=Рыжий&par=1
    let arr_values = req.query.par;

    // http://localhost:3000/add?dog_name=Хомяк&color=Рыжий&age=1
    // let dog_name = req.query.dog_name;
    // let color = req.query.color;
    // let age = +req.query.age;
    // let arr_values = [dog_name,color,age];

    let query_insert = `INSERT INTO dogs(dog_name,color,age) VALUES(?,?,?)`;
    (new sqlite3.Database('./private/shelter.db'))
        .run(query_insert, arr_values, (err) => {
            if (err) return console.error(err);
            res.redirect('/');
        })
        .close();
}

router.get('/', add_dog);

module.exports = router;
