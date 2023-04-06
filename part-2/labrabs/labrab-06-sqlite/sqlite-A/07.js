const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

let prods = require('./prods.json')

let sql_insert = `
    INSERT INTO prods VALUES
        ('${prods[0].title}','${prods[0].href}','${prods[0].price}','${prods[0].stores}'),
        ('${prods[1].title}','${prods[1].href}','${prods[1].price}','${prods[1].stores}')
`

sqlite.run(sql_insert)

sqlite.close()
