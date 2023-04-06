const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

let sql_select = `
    SELECT title, price 
    FROM prods
    ORDER BY price ASC
    LIMIT 3
`

let recs = sqlite.run(sql_select)
console.clear()
console.log(recs[0].columns)
for (let rec of recs[0].values) {
    console.log(rec)
}

sqlite.close()
