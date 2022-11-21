const comparator = (a, b, fs, ds) => {
    if ((fs.length > 1) && (a[fs[0]] === b[fs[0]])) {
        return comparator(a, b, fs.slice(1,), ds.slice(1,));
    }
    let d = { 'asc': +1, 'desc': -1};
    return d[ds[0]] * (a[fs[0]] > b[fs[0]]? +1: -1);
}

const orderBy = (arr, fields, directs) => {
    return arr.sort((a,b) => comparator(a,b,fields,directs));
}

let arr = require("./json/clients.json").clients;
let fields = ['gender', 'age', 'name'];
let directs = ['desc', 'desc', 'asc'];
let arr_sorted = orderBy(arr, fields, directs);
console.log(arr_sorted);
