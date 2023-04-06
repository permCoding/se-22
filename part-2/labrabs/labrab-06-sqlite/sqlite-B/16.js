const sqlite = require('sqlite-sync')

let get_data = (count) => {
    sqlite.connect('prods.db')
    let sql_select = `
        SELECT title, price 
        FROM prods 
        WHERE price <= 1800 AND price >= 1000
        ORDER BY price DESC 
        LIMIT ${count}
    `
    let select = sqlite.run(sql_select)
    sqlite.close()
    return select[0]    
}

console.clear()
let count = 10
console.log(`count = ${count}`)
let data = get_data(count)
// let columns = data.columns
let values = data.values
values.forEach((e,i) => console.log(i+1, e[1], e[0].substring(0, 30)));
