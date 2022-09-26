let clients = require("./clients.json").clients;

console.clear();

// console.log(clients);

let arr = clients
    .filter(elm => elm.age > 27)
    .sort((a,b) => a.age-b.age)
    .map(obj => { return { "age": obj.age, "name": obj.name}});

console.log(arr);

let data = JSON.stringify(arr, null, 4);

require('fs').writeFileSync('./clients-sort.json', data);
