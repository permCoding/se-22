const sqlite = require('sqlite-sync')

const get_records = (count) => {
    sqlite.connect('prods.db')
    let sql_select = `
        SELECT title, price 
        FROM prods 
        LIMIT ${count}
    `
    let select = sqlite.run(sql_select)
    sqlite.close()
    return select
}

console.clear()

let res = get_records(2) // router -> controller -> count=5

console.log(res) // для контроля
// select = [ 
//     { 
//         columns:['title','price'], 
//         values:[[Array],[Array]] 
//     } 
// ]

let obj = res[0]
console.log(obj.columns) // названия полей объектов
console.log(obj.values.length) // количество объектов
console.log(JSON.stringify(obj, null, 4))

let keys = obj.columns
let values = obj.values
let arr = []
for (let rec_values of values) {
    arr.push(
        Object // объект из массивов - ключ-значение
            .fromEntries(rec_values.map((e,i) => [keys[i],e]))
    )
}

console.log(JSON.stringify(arr, null, 4))
