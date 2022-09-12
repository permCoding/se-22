let ex_01 = function (arr) { // сортировать по числовому полю 
    return arr.sort((a,b) => b[1] - a[1]);
}

let ex_02 = function (arr) { // сортировать по строковому полю
    return arr.sort(
        (a,b) => b[2] < a[2]? -1: 1
    );
}

let ex_03 = function (arr) { // если нужно отдельно выделить путь 0
    return arr.sort(
        (a,b) => b[2] < a[2]? -1: a[2] == b[2]? 0: 1
    );
}


console.clear();

// id, rating, name
let students = [
    [0, 2.4, 'Aaa'],
    [1, 3.3, 'Zzz'],
    [2, 1.9, 'Mmm'],
    [3, 2.1, 'Bbb'],
    [4, 2.2, 'Bbb']
];

// ex_01(students)
//     .map((item, i) => { item[0] = i; return item; })
//     .forEach(item => console.log(item));


// ex_01(students) // сортируем по рейтингу
//     .forEach(item => console.log(item));


ex_02(students)
    .forEach(item => console.log(item));


// ex_03(students)
//     .forEach(item => console.log(item));


console.log('\nэтот вывод для контроля \n\
массив передаётся по ссылке \n\
поэтому исходный массив тоже сортируется \n\
на самом деле просто две переменные ссылаются на один массив');

students.forEach(item => console.log(item));
