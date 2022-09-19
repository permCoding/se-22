const fs = require("fs")

fs.readFile(__filename, (err, content) => { // асинхронное чтение
    if (err) console.error(err)
    else {
        console.log(content.toString().split('\n')[0])
    }
})

// синхронный раньше напечатает результат
let content = fs.readFileSync("./01.js", "utf8") // синхронное чтение

console.clear()
console.log(content.split('\n')[0])
const os = require('node:os')
const eol = os.EOL
console.log(eol.charCodeAt(0), eol.charCodeAt(1))
let _eol = '\r\n'
console.log(_eol.charCodeAt(0), _eol.charCodeAt(1))
// https://nodejs.org/api/os.html#os
