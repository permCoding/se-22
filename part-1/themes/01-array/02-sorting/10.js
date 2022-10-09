let func01 = () => {
    let line = 'Python - programming language'
    let arr = line.split(/\W+/)

    console.log(arr.sort()) // сортирует на месте и возващает

    arr.sort((a,b) => a.toLowerCase() > b.toLowerCase()? 1: -1)
    console.log(arr)
}

let func02 = () => {
    let line_rus = 'Бак банка Арбуз     арбуз Ёжик ёж яблоко Яблоко'
    let arr_rus = line_rus.split(/\s+/)

    console.log(arr_rus.sort())

    arr_rus.sort((a,b) => a.toLowerCase() > b.toLowerCase()? 1: -1)
    console.log(arr_rus)
}

let func03 = () => {
    let line_rus = 'Бак банка Арбуз     арбуз Ёжик ёж яблоко Яблоко'
    let arr_rus = line_rus.split(/\s+/)

    let collation = new Intl.Collator('ru-RU')
    
    console.log(arr_rus.sort(collation.compare))

    let objs = [
        { n: 'Ёж', w: 1.5 },
        { n: 'Оса', w: .05 },
        { n: 'Осёл', w: 85.0 },
        { n: 'Аист', w: 4.5 }
    ]

    console.log(
        objs.sort((a,b) => collation.compare(a.n, b.n))
    )
}


console.clear()
// func01()
// func02()
func03()