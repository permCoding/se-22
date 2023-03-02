const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database("./db/teams.db");

let query = `SELECT * FROM results`;

db.all(query, [], (err, rows) => { 
    if (err) {
        console.error(err.message);
    }
    rows.forEach((row) => {
        console.log(
            row.id + "\t" + 
            row.pos + "\t" + 
            row.name_team + "\t" +
            row.games + "\t" +
            row.wins + "\t" + 
            row.draws + "\t" +
            row.defs
        );
    });
});

db.close();