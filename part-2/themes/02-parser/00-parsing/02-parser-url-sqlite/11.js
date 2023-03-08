const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database("./db/teams.db");

let query = `DELETE FROM results`;

db.run(query, [], (err) => {
	if(err) {
		return console.log(err.message); 
	}
})

db.close();