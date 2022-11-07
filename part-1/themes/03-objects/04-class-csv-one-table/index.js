const { WorkCSV } = require("./library");

let file_name = "./csv/students.csv";

let obj = new WorkCSV(file_name);

console.log(obj._json);
