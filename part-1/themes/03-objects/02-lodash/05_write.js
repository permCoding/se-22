const _ = require('lodash');
const fs = require('fs');
const mens = require('./json/mens.json');


function write_1(mens) {
    fs
        .writeFileSync(
            './json/data_check.json', 
            JSON.stringify(_.orderBy(mens, ['name','age'], ['asc','desc']), null, 2)
        );
}

function write_2(mens, new_items) {
    mens.push(...new_items);
    fs
        .writeFileSync(
            './json/data_check.json', 
            JSON.stringify(_.orderBy(mens, ['name','age'], ['asc','desc']), null, 2)
        );
}

let objs = [
    { "name": "Яна", "age": 25 },
    { "name": "Яна", "age": 55 },
    { "name": "Алекс", "age": 21 }
]

console.clear();
// write_1(mens);
write_2(mens, objs);
