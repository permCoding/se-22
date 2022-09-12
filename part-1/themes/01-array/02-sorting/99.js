console.clear()

let res = '12 34 56 78 90 11 13 55'
    .split(' ')
    .map(x => +x)
    .filter(x => x % 2 != 0)
    .reduce((a,b) => a + b)

console.log(res)

let arr

{
    arr = [12, 33, 45, 1, 1, 1, 0]
}

arr
    .forEach((elm, i, a) => process.stdout.write(`${elm*i - a.length}, `))


console.log(12 > 11? "1111": "0000")
