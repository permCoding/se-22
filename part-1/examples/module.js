class ArrayObjects {
    _arr_clone;
    constructor(arr) {
        this._arr = this._arr_clean(arr);
        this.cloneDeep = require("lodash").cloneDeep;
        this.orderBy = require("lodash").orderBy;
    }
    set arr(arr)  {
        this._arr = this._arr_clean(arr) || [];
    }
    get arr() {
        return this._arr;
    }
    _arr_clean(arr) {
        return arr.filter(x => x !== undefined);
    }
    sort_native(fields, dirs) {
        this._arr_clone = this.cloneDeep(this.arr);
        dirs = dirs.map(x => (x === "asc"? +1: -1));
        this._arr_clone
            .sort((a,b) => dirs[2] * (a[fields[2]] > b[fields[2]]? +1: -1))
            .sort((a,b) => dirs[1] * (a[fields[1]] > b[fields[1]]? +1: -1))
            .sort((a,b) => dirs[0] * (a[fields[0]] > b[fields[0]]? +1: -1));
        return this._arr_clone;
    }
    _compare(a,b) { // параметризация метода - доработать на лабе
        if (a.gr === b.gr) {
            if (a.age === b.age) {
                return -1 * (a.name > b.name? +1: -1);
            }
            return a.age > b.age? +1: -1;
        }
        return a.gr > b.gr? +1: -1;
    }
    sort_compare() { // доработать
        this._arr_clone = this.cloneDeep(this.arr);
        this._arr_clone.sort((a,b) => this._compare(a,b));
        return this._arr_clone;
    }
    sort_orderBy(fields, dirs) {
        this._arr_clone = this.orderBy(this.arr, fields, dirs);
        return this._arr_clone;
    }
}

module.exports = {
    ArrayObjects
}