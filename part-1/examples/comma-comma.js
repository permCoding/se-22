const func = (par) => {
    console.log(`par = ${par || 1234}`)
}

const new_func = (par) => {
    console.log(`par = ${par ?? 5678}`)
}

func();
func(0); // не сработает
func(false); // не сработает
// оператор || не различает false, 0, пустую строку "" и null/undefined

new_func();
new_func(0);
new_func(false);

// эквивалент
const commacomma = (a, b) => {
    return (a !== null && a !== undefined) ? a : b;
}

let a, b = 777;
console.log(commacomma(a, b));
a = 666;
console.log(commacomma(a, b));
a = false;
console.log(commacomma(a, b));
a = undefined;
console.log(commacomma(a, b));
