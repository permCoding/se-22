const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

let prods = require('./prods.json')

let prod = prods[1]

console.log(JSON.stringify(prod, null, 4)) // для контроля

sqlite.insert('prods', prod, (res) => { 
    if (res.error) throw res.error;
    console.log(`res=${res}`); // выводит позицию курсора в таблице
})

sqlite.close()
