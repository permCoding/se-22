console.clear()

let obj = {}

console.log(obj)

obj.x = 12 // динамически добавим в объект
obj.y = 10

console.log(obj)

obj.get_divmod = function () {
    let a = this.x, b = this.y
    return { 'div': Math.floor(a/b), 'mod': a%b }
}

console.log(obj)
let result = obj.get_divmod(13, 4)
console.log(result)
let { div, mod } = result
console.log(`div = ${div}, mod = ${mod}`)
