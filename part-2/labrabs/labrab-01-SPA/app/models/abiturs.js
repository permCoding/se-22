let arr = require("../private/abiturs.json"); // получим список данных

let model = {
    "title": "Заголовок", // пока никак не используется
    "abiturs": arr
}; // сформируем модель данных

module.exports = { model };
