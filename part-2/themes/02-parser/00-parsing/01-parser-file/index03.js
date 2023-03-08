const fs = require('fs');

name_file = "data.html";

// синхронное чтение

// let html = fs.readFileSync(name_file, "utf8");
// console.log(html);

// асинхронное чтение

fs.readFile(name_file, "utf8",
    function(error, data) {
        if (error) throw error; // если возникла ошибка
        console.log(data);  // выводим считанные данные
        console.log("__async__");
    });
