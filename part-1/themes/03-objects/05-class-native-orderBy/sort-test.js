const { ArrayObjects } = require("./module");


let arr = [
    { gr: 1, name: "F", age: 22},
    { gr: 2, name: "A", age: 20},
    { gr: 1, name: "A", age: 22},
    { gr: 2, name: "D", age: 20},
    { gr: 2, name: "A", age: 25},
    { gr: 1, name: "A", age: 18},
    { gr: 1, name: "A", age: 18}
];

delete arr[5];

let obj = new ArrayObjects(arr);

let fields = ["gr","age","name"];
let dirs =   ["asc","desc","asc"];

// console.log(obj.sort_native(fields,dirs));
// console.log(obj.sort_compare()); // доработать
console.log(obj.sort_orderBy(fields, dirs));
