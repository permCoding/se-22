const router = require('express').Router();
const sqlite3 = require('sqlite3').verbose();

const render_table = (req, res) => {
    console.log(req.params);
    let query = "SELECT * FROM dogs";
    (new sqlite3.Database('./private/shelter.db'))
        .all(query, [], (err, rows) => {
            if (err) return console.error(err);
            let model = { arr: rows };
            res.render("index.hbs", model);
        })
        .close();
}

router.get(['/','/table'], render_table);

module.exports = router;
