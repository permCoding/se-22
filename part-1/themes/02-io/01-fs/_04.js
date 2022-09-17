// copy program file
const fs = require("fs")
const path = require("path")

let file_name = path.basename(__filename)

let lines = fs
    .readFileSync(file_name, "utf8")
    .split(/\r?\n/)
    .slice(1)

content = [
    '// copy program file' , 
    ...lines
]

fs.writeFileSync(`_${file_name}`, content.join('\n'))
