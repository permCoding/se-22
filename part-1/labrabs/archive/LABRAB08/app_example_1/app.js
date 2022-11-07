// npm i hbs express mysql2
const mysql = require("mysql2");
const express = require("express");

const pool = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "edu00",
    password: "",
    database: "edu00_labrab05"    
});

const app = express();
app.use('/css', express.static(__dirname + '/css'));
app.set("view engine", "hbs");

app.get("/", function(req, res) { // получим список данных
    let query = "SELECT rating, lastName, firstName, city \
    FROM abiturs ORDER BY rating DESC";
    pool.query(query, function(err, data) {
        if (err) return console.log(err);
        res.render("index.hbs", {
            abiturs: data
        });
    });
});
 
app.listen(3000, function() {
    console.log("смотрим работу через браузер - http://localhost:3000/");
    let isWin = process.platform === "win32";
    let hotKeys = isWin? "Ctrl+C": "Ctrl+D"; // Windows / Linux
    console.log(`остановить сервер - ${hotKeys}`);
});
