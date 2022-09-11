const fs = require("fs")

fs.readFile(__filename, (err, content) => { // асинхронное чтение
    if (err) console.error(err)
    else {
        console.log(content.toString().split('\n')[0])
    }
})

let content = fs.readFileSync("./01.js", "utf8") // синхронное чтение
console.log(content.split('\n')[0])

// синхронный раньше напечатает результат
