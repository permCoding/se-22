const path = require("path")

console.log(__dirname)
console.log(__filename)

let dir_name = path.dirname(__filename)
let file_name = path.basename(__filename)
let file_ext = path.extname(__filename)

console.log(dir_name)

console.log( 
    dir_name.split('\\').reverse()[0],
    file_name, 
    file_ext.slice(1)
)
