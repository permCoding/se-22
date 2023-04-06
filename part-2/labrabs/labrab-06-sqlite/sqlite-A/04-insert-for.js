const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

let prods = require('./prods.json')

for (let prod of prods) {
    sqlite.insert('prods', prod)
}

sqlite.close()
