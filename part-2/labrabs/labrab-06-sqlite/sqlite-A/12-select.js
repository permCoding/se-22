const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

let sql_select = `SELECT title, price FROM prods`

let select = sqlite.run(sql_select)

let arr = []
for (let i=0; i<select.length; i++) {
    let obj = Object.assign({'id':i+1}, select[i])
    obj.price = obj.price.replace(' ', '').replace('₽', '')
    arr.push(obj)
}

arr.forEach(e => console.log(e))

sqlite.close()
