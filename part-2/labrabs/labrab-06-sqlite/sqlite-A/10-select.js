const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

let prods = require('./prods.json')

let sql_select = `SELECT title, price FROM prods`

let recs = sqlite.run(sql_select)

recs.forEach(console.log);

sqlite.close()
