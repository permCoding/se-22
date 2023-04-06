const sqlite = require('sqlite-sync')

let get_records = (count) => {
    sqlite.connect('prods.db')
    let sql_select = `
        SELECT title, price 
        FROM prods 
        WHERE price <= 1800 AND price >= 1000
        ORDER BY price DESC 
        LIMIT ${count}
    `
    let recs = sqlite.run(sql_select)
    sqlite.close()
    return recs    
}

console.clear()
count = 5
console.log(`count - ${count}`)
let recs = get_records(count)
let columns = recs[0].columns
let values = recs[0].values
for (let rec of values) {
    console.log(...rec.reverse())
}
