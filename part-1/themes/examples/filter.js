function check(num) {
    return num % 2 != 0;
}

let arr = [1, 2, 3, 4, 4, 7];

console.log(arr.filter(check));
console.log(arr);
console.log(arr.filter( x => x % 2 ));
console.log(
    arr
        .filter( x => x % 2 )
        .sort( (a, b) => a - b )
);
