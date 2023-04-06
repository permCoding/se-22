const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

let prods = require('./prods.json')

const change = str => str.replace(/[\s|₽]+/g, '')

let recs = prods.map(p => 
    `(
        '${p.title}',
        '${p.href}',
        ${change(p.price)},
        '${p.stores}'
    )`
)

let sql_insert = `
    INSERT INTO prods 
    (title,href,price,stores) 
    VALUES ${recs.join(',')}
`

sqlite.run(sql_insert, res => {if (res.error) throw res.error;})

sqlite.close()
