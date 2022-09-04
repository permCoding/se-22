function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shuffleArray_2(array) {
    return array.sort(() => Math.random() > .5 ? 1 : -1);
}

function shuffleArray_3(array) {
    return array.sort(() => Math.random() - 0.5);
}


let amount = 10;
const arr = Array(amount).fill(0).map((_, index) => ++index);
console.log(...arr);

shuffleArray(arr);
console.log(...arr);

shuffleArray_2(arr);
console.log(...arr);

shuffleArray_3(arr);
console.log(...arr);
