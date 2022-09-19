// copy program file
const fs = require("fs")
const path = require("path")

let file_name = path.basename(__filename)

let lines = fs
    .readFileSync(file_name, "utf8")
    .split(/\r?\n/)
    .slice(1)

array_lines = [
    '// copy program file' , 
    ...lines
]

fs.writeFileSync(`_${file_name}`, array_lines.join('\n'))
