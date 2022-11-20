function change(num) {
    return -num;
}

let arr = [1, 2, 3, 4, 4, -3];

console.log(arr.map(change));
console.log(arr);
console.log(arr.map( x => -x ));
console.log(
    arr
        .map( x => -x )
        .sort( (a,b) => a-b )
);
