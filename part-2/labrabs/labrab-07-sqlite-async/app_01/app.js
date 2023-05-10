const express = require("express");
const sqlite3 = require('sqlite3').verbose();

let port = 3000;
const app = express();
app.use(express.static('public'));
app.set("view engine", "hbs");

const render_table = (req, res) => {
    console.log(`params = ${JSON.stringify(req.params)}`);

    let db = new sqlite3.Database('./private/shelter.db');
    let query = "SELECT * FROM dogs LIMIT 10";
    
    db.all(query, [], (err, rows) => {
        rows.forEach((row) => { console.log(row); });
    });
    
    // db.all(query, [], (err, rows) => {
    //     if (err) return console.error(err);
    //     let model = { arr: rows };
    //     res.render("index.hbs", model);
    // });
    
    db.close();
}

app.get("/", render_table);

app.listen(port, () => console.log(`http://localhost:${port}/`));
