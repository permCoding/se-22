const { WorkCSV } = require("./library");

let file_name = "./csv/students.csv";

let obj = new WorkCSV(file_name);

let ex_01 = () => {
    console.log(obj._json);

    obj.restore();
    obj.select("nameSt","age","idGr");
    obj.where("age",17);
    obj.orderBy(["idGr","nameSt"],["asc","asc"]);

    console.log(obj._tmp);
    obj.json_to_csv(obj._tmp, "./csv/results.csv");
}

let ex_02 = () => {
    obj.restore();
    obj.filter(["sex","idGr"],[1,1]);
    obj.orderBy("nameSt", "asc");
    console.log(obj._tmp);
}

// ex_01();
ex_02();
