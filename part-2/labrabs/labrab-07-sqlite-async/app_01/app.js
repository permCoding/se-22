const express = require("express");
const sqlite3 = require('sqlite3').verbose();

let port = 3000;
const app = express();
app.use(express.static('public'));
app.set("view engine", "hbs");

const render_table = (req, res) => {
    // console.log(`params = ${JSON.stringify(req.params)}`);

    let db = new sqlite3.Database('./private/shelter.db');
    let limit = 10;
    let query = "SELECT * FROM dogs LIMIT ?";

    // db.all(query, [limit], (err, rows) => {
    //     rows.forEach(row => console.log(row));    
    // });

    db.all(query, [100], (err, rows) => {
        if (err) return console.error(err);
        // let model = { arr: rows };
        res.render("index.hbs", 
            { 
                arr: rows,
                id: 12,
                title: "Собаки"
            }
        );
    });
    
    db.close();
}

app.get("/", render_table);

app.listen(port, () => console.log(`http://localhost:${port}/`));
