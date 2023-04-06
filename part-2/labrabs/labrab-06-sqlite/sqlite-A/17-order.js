const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

let sql_select = `
    SELECT title, CAST(price AS INTEGER) AS price 
    FROM prods
    ORDER BY price DESC
    LIMIT 8
`

let recs = sqlite.run(sql_select)
console.clear()
console.log(recs[0].columns)
for (let rec of recs[0].values) {
    console.log(rec)
}

sqlite.close()
