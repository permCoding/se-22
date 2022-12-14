let sort1 = (arr) =>
    arr.sort(
        (a, b) => a.title < b.title? -1: 1
    );

let sort2 = (arr) =>
    arr.sort(
        (a, b) => new Date(a.dt) - new Date(b.dt)
    );

let sort3 = (arr) =>
    arr.sort(
        (a, b) => a.dt < b.dt? -1: 1
    );

let dates = [
    {title: 'woman', dt: '2021-03-08'},
    {title: 'valentine', dt: '2021-02-14'},
    {title: 'man', dt: '2021-02-23'},
    {title: 'victory', dt: '2021-05-09'}
];

console.log(sort1(dates));
console.log(sort2(dates));
console.log(sort3(dates));