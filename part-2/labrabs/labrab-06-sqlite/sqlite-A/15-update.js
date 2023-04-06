const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

const change = str => str.replace(/[\s|₽]+/g, '')

sqlite.create_function(change)

let sql_update = `
    UPDATE prods
    SET price = change(price)
`
sqlite.run(sql_update)

sqlite.close()
