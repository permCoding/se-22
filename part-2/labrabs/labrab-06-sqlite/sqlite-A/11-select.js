const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

let sql_select = `SELECT title, price FROM prods`

let recs = sqlite.run(sql_select)

recs
    // .map((e,i) => { e.id = i+1; return e })
    .map((e, i) => Object.assign({'id':i+1}, e))
    .forEach(console.log)

sqlite.close()
