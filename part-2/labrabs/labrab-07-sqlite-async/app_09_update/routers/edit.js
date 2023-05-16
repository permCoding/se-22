const router = require('express').Router();
const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const htmlParser = express.urlencoded({extended: false});

const render_edit = (req, res) => {
    let id = +req.params.id;
    let query = `SELECT * FROM dogs WHERE id = ?`;
    (new sqlite3.Database('./private/shelter.db'))
        .all(query, [id], (err, data) => {
            if (err) return console.error(err.message);
            let model = { 
                'id': data[0].id,
                'dog_name': data[0].dog_name,
                'color': data[0].color,
                'age': data[0].age 
            };
            res.render("edit.hbs", model);
        })
        .close();
}

const render_update = (req, res) => {
    let id = +req.params.id;
    let dog_name = req.body.dog_name;
    let color = req.body.color;
    let age = req.body.age;

    let query_update = `
        UPDATE dogs 
        SET dog_name=?, color=?, age=? 
        WHERE id=?`;
    
    (new sqlite3.Database('./private/shelter.db'))
        .run(query_update, [dog_name, color, age, id], (err) => {
            if (err) return console.error(err.message);
            res.redirect("/");
        })
        .close();
}

router.get('/:id', render_edit);

router.post('/:id', htmlParser, render_update);

module.exports = router;
