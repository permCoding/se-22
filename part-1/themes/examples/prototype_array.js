/**
 * 
 * @param {*} a - left border
 * @param {*} b - right border
 * @returns sum of array elements between [a .. b]
 */
Array.prototype.AccSlice = function (a, b) {
    return [...this.slice(a, ++b)]
        .reduce((a,b) => a+b, 0)
}

let arr = [1, 2, 3, 4, 5, 6, 7]

console.log(arr.AccSlice(2, 4))
