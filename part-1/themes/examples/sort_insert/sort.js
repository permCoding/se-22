const { sort_insert } = require("./module");

let arr = [1,2,3,4,5,6,6,6,-3,-5,2,2,2,6,7];

console.clear();

console.time('time');

console.table(sort_insert(arr).slice(0,10));

console.timeEnd('time');
