const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database("./db/teams.db");

let query = `INSERT INTO results(pos, name_team, games, wins, draws, defs) VALUES(?, ?, ?, ?, ?, ?)`;

let arr = [1, 'Зенит', 19, 12, 5, 2];

db.run(query, arr, (err) => {
	if(err) {
		return console.log(err.message); 
	}
})

db.close();