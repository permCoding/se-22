const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

let sql_select = `SELECT title, price FROM prods`

let select = sqlite.run(sql_select)

console.clear()

// объекты сделать с id
for (let i=0; i<select.length; i++) {
    // ver 1
    // select[i].id = i+1
    // console.log(select[i])
    // ver 2
    console.log(Object.assign({'id':i+1}, select[i]))
}

sqlite.close()
