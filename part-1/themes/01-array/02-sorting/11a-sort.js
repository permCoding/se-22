// метод объекта массив - sort

let sort_01 = function (arr) {
    return arr.sort(); // сортирует элементы как строки
}

/**
 * сортировка чисел
 * a-b <0  a,b
 * a-b =0  остаются как есть
 * a-b >0  b,a
 * @param {*} arr - массив чисел
 * @returns 
 */
let sort_02 = function (arr) {
    return arr.sort((a,b) => a-b);
}

let sort_03 = function (arr) {
    return arr.sort((a,b) => a>b? -1: 1);
}

console.clear();

const nums = [8, 6, 10, 22, 9, 4];
const words = ['ab', 'aa', 'zz', 'aaa', 'b'];

console.log(sort_01(words)); // строки сортирует корректно

console.log(sort_01(nums)); // [10, 22, 4, 6, 8, 9] - некорректно

console.log(sort_02(nums)); // [4, 6, 8, 9, 10, 22] - корректно

console.log('- '.repeat(9));

// в обратном порядке
console.log(sort_01(words).reverse()); 
console.log(sort_03(words)); 
