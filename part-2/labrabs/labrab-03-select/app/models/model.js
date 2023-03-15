const get_json = () => { // получить данные из json
    return require('../private/links.json');
}
let model = { // сформируем модель данных
    "title": "Список документов",
    "field": "id",
    "arr": get_json()
};

module.exports = { model };
