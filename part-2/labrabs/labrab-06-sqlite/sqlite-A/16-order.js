const sqlite = require('sqlite-sync')

const get_as_str = (count) => {
    sqlite.connect('prods.db')
    
    let sql_select = `
        SELECT title, price 
        FROM prods
        ORDER BY price DESC
        LIMIT ${count}
    `
    let select = sqlite.run(sql_select)
    sqlite.close()
    return select[0]
}

const get_as_num = (count) => {
    sqlite.connect('prods.db')
    
    let sql_select = `
        SELECT title, CAST(price AS INTEGER) AS price 
        FROM prods
        ORDER BY price DESC
        LIMIT ${count}
    `
    let select = sqlite.run(sql_select)
    sqlite.close()
    return select[0]
}

console.clear()
let count = 10 // сколько брать из таблицы
// let res = get_as_str(count) // тут price в текстовом формате - сортировка НЕкорректная
let res = get_as_num(10) // тут price уже в числовом формате - сортировка корректная
let columns = res.columns
let records = res.values

for (let rec of records) {
    console.log(rec[1], rec[0].substring(0, 30)) // просто для контроля строку покороче
}
