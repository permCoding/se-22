const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

let sql_select = `SELECT title, price FROM prods`

let select = sqlite.run(sql_select)

console.clear()
// объекты сделать с id и исправить поле цена
select
    .map((obj,i) => Object.assign({'id':i+1}, select[i]))
    .map(obj => {
        obj.price = obj.price.replace(' ', '').replace('₽', '')
        return obj
    })
    .slice(-3,) // последние три
    .forEach(e => console.log(e))

sqlite.close()
