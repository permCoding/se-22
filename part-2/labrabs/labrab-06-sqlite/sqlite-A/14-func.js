const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

const change = str => str.replace(/[\s|₽]+/g, '')

sqlite.create_function(change)

let sql_select = `SELECT title, change(price) as price FROM prods`

let recs = sqlite.run(sql_select)

recs
    .map((e, i) => Object.assign({'id':i+1}, e))
    .forEach(console.log)

sqlite.close()
