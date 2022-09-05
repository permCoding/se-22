Array.prototype.AccSlice = function (n) {
    return [...this.slice(0,n)]
        .reduce((a,b) => a+b, 0)
}

let arr = [1, 2, 3, 4, 5, 6, 7]

console.log(arr.AccSlice(3))
