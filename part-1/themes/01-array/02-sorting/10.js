console.clear()

let line = 'Python - programming language'

let arr = line.split(/\W+/)

arr.sort()
console.log(arr)

arr.sort((a,b) => a.toLowerCase() > b.toLowerCase()? 1: -1)
console.log(arr)

let line_rus = 'Бак банка Арбуз     арбуз Ёжик ёж яблоко Яблоко'
let arr_rus = line_rus.split(/\s+/)

arr_rus.sort()
console.log(arr_rus)

arr_rus.sort((a,b) => a.toLowerCase() > b.toLowerCase()? 1: -1)
console.log(arr_rus)

let collation = new Intl.Collator('ru-RU')
arr_rus.sort(collation.compare)
console.log(arr_rus)

let objs = [
    { n: 'Ёж', w: 1.5 },
    { n: 'Оса', w: .05 },
    { n: 'Осёл', w: 85.0 },
    { n: 'Аист', w: 4.5 }
]

console.log(
    objs.sort((a,b) => collation.compare(a.n, b.n))
)