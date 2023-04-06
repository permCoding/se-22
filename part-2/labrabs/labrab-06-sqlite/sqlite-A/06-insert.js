const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

let prods = require('./prods.json')

let prod = prods[0]
console.log(prod)
let title = prod.title
let href = prod.href
let price = prod.price
let stores = prod.stores

let sql_insert = `
    INSERT INTO prods 
    VALUES('${title}','${href}','${price}','${stores}')
`
console.log(sql_insert)

sqlite.run(sql_insert)

sqlite.close()
