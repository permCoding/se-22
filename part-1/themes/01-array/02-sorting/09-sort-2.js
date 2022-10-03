let sort_1 = function (arr) { // сортировать одному полю 
    return arr
        // .sort((a,b) => a[0] - b[0])
        .sort((a,b) => -a[1] + b[1])
        // .sort((a,b) => a[2].toLowerCase()>b[2].toLowerCase()? +1: -1)
        // .sort((a,b) => a[3] > b[3]? +1: -1)
}

let sort_2 = function (arr) { // сортировать по трём полям
    let check = (a, b) => {
        [sa, sb] = [a[2].toLowerCase(), b[2].toLowerCase()];
        if (sa == sb) { return b[1] - a[1] || b[0] - a[0]; }
        return sa > sb? 1: -1;
    }
    return arr.sort(check);
}

let sort_3 = function (arr) { // сортировать по двум полям
    let check = (a, b) => {
        return (a[2].toLowerCase() > b[2].toLowerCase()? 1: a[2].toLowerCase() == b[2].toLowerCase()? 0: -1) || b[1] - a[1]
    }
    return arr.sort(check);
}

console.clear();

// id, rating, group, name
let students = [
    [0, 2.4, 'ПИб', 'Сидоров'],
    [1, 3.3, 'ПИб', 'Камикадзе'],
    [2, 1.9, 'Иcб', 'Аитов'],
    [3, 2.1, 'Иcб', 'Абрамович'],
    [4, 2.2, 'Пиб', 'Ямбург'],
    [5, 2.2, 'Пибу', 'Яковлев'],
    [6, 3.7, 'иc', 'Абрамович'],
    [7, 3.1, 'ПИб', 'Ямбург'],
    [8, 3.1, 'ПИб', 'Амбург'],
    [9, 4.4, 'ПИб', 'Аков'],
    [10, 1.9, 'Иcб', 'Ахунова'],
];

console.log('- '.repeat(9));
sort_2(students).forEach(item => console.log(item));
