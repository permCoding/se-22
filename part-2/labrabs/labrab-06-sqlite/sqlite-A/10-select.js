const sqlite = require('sqlite-sync')

const get_records = (count) => {
    sqlite.connect('prods.db')
    let prods = require('./prods.json')
    let sql_select = `
        SELECT title, price 
        FROM prods 
        LIMIT ${count}
    `
    let select = sqlite.run(sql_select)
    // console.log(select) // для контроля
    sqlite.close()
    return select[0]
}

console.clear()

let obj = get_records(2) // router -> controller -> count=5
console.log(obj.columns) // названия полей объектов
for (let arr_fields of obj.values) {
    console.log(arr_fields.reverse())
}

/*
    [
        {
        columns: [ 'title', 'price' ],       
        values: [ [Array], [Array], [Array] ]
        }
    ]
*/