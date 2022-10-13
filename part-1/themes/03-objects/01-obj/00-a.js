let obj = {};

console.log(obj);

obj.x = 12; // динамически добавим в объект
obj.y = 10;

console.log(obj);

obj.get_divmod = (a, b) => {
    return [Math.floor(a/b), a%b];
}

console.log(obj);
let result = obj.get_divmod(13, 4);
console.log(result);
[a, b] = result;
console.log(a, b);
