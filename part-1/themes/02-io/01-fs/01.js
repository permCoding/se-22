const path = require("path")


console.clear()
console.log(__dirname)
console.log(__filename)

// https://nodejs.org/api/path.html
// https://nodejs.org/api/globals.html#global-objects
// https://nodejsdev.ru/api/globals/
let dir_name = path.dirname(__filename)
let file_name = path.basename(__filename)
let file_ext = path.extname(__filename)

console.log(dir_name)
console.log('= '.repeat(9))
console.log(path.sep)
console.log( 
    dir_name.split('\\').reverse()[0],
    file_name, 
    file_ext.slice(1)
)

'\t  \n  \b \\  \r  \s \r\n'
