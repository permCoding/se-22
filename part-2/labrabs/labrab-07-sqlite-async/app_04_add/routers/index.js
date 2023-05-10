const router = require('express').Router();
const sqlite3 = require('sqlite3').verbose();

const render_table = (req, res) => {
    let query = "SELECT * FROM dogs LIMIT 10";
    (new sqlite3.Database('./private/shelter.db'))
        .all(query, [], (err, rows) => {
            if (err) return console.error(err);
            let model = { arr: rows };
            res.render("index.hbs", model);
        })
        .close();
}

const render_table_sorted = (req, res) => {
    let query = "SELECT * FROM dogs ORDER BY age DESC LIMIT 10";
    (new sqlite3.Database('./private/shelter.db'))
        .all(query, [], (err, rows) => {
            if (err) return console.error(err);
            let model = { arr: rows };
            res.render("index.hbs", model);
        })
        .close();
}

router.get('/', render_table);
router.get('/sorted', render_table_sorted);

module.exports = router;