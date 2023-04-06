const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

let prods = require('./prods.json')

let recs = prods
    .map(p => `('${p.title}','${p.href}','${p.price}','${p.stores}')`)

let sql_insert = `INSERT INTO prods VALUES ${recs.join(',')}`

sqlite.run(sql_insert)

sqlite.close()
