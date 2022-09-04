const pi = 3.14;

function get_sum(line) {
    // private_func();
    return line
        .split(/\s+/)
        .map(x => +x)
        .filter(x => x%2)
        .reduce((acc, cur) => acc + cur);
}

function private_func() {
    console.log('hide');
}

// module.exports.get_sum_odd = get_sum;
// module.exports.pi = pi;

// module.exports = {
//     get_sum,
//     pi
// }

module.exports = {
    get_sum: get_sum,
    PI: pi
}
