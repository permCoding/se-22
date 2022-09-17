// some every keys includes slice splice indexOf findIndex

let ex1 = (arr) => {
    console.log('some =', arr.some(x => x%2 != 0));
    console.log('every =', arr.every(x => x%2 != 0));
}

let ex2 = (arr) => {
    console.log(arr.keys()); // итератор    
    // бывают ещё генераторы - это в теме theme-03-func
    console.log(...arr.keys()); // элементы итератора
    console.log(...arr.values()); // элементы итератора

    for (let key of arr.keys()) {
        console.log(`key = ${key}, value = ${arr[key]}`);
    }
    let iterator = arr.entries();
    for (let [key, value] of iterator) {
        console.log(`key = ${key}, value = ${value}`);
    }  
}

let ex3 = (arr) => {
    console.log(arr.includes(4));
    console.log(arr.includes(5));
    console.log(arr.indexOf(4));
    console.log(arr.findIndex(x => (x%3 == 0) && (x > 0)));

    console.log(arr.slice(1,3)); // не включая правую границу
    console.log(arr);
    console.log(arr.splice(1,3)); // включительно
    console.log(arr);
}


let arr = [0, 2, 4, 6, 8, 9];
ex2(arr);
