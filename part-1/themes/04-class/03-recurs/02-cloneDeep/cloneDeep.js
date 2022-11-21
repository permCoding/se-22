const cloneDeep = (obj) => {
    let result = {};
    for (let key in obj) {
        if (typeof(obj[key]) === 'object') {
            result[key] = cloneDeep(obj[key]);
        }
        else result[key] = obj[key];
    }
    return result;
}

let obj = require('./clients.json').clients[0];

let obj_n = cloneDeep(obj);
obj_n["age"] = 666;
obj_n["address"]["city"] = "Пекин";

console.log(obj);
