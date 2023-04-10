const sqlite = require('sqlite-sync')

let get_records = (count) => {
    sqlite.connect('prods.db')
    // let sql_select = `
    //     SELECT title, price, price AS val 
    //     FROM prods 
    //     WHERE price <= 1800 AND price >= 1000
    //     ORDER BY price DESC, val DESC
    //     LIMIT ${count}
    // `
    let sql_select = `
        SELECT title, price, CAST(substr(title, 0, instr(title, ' ')) AS INTEGER) AS val 
        FROM prods 
        WHERE price <= 1800 AND price >= 1200
        ORDER BY price ASC, val DESC
        LIMIT ${count}
    `
    let recs = sqlite.run(sql_select)
    sqlite.close()
    return recs    
}

console.clear()
count = 10
console.log(`count = ${count}`)
let recs = get_records(count)
let columns = recs[0].columns
let values = recs[0].values
for (let rec of values) {
    console.log(...rec.reverse())
}
