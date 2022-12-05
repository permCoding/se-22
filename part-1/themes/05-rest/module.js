const about = (res) => {
    let about = require('./about.json');
    res.write(JSON.stringify(about, null, 4));
}

const get_files_filter = (dir, ext) => {
    const rd = require('fs').readdirSync;
    const st = require('fs').statSync;
    const rec = (dir) => {
        let items = rd(dir, 'utf-8');
        for (let item of items) {
            let path = dir + item + '/';
            if (st(path).isDirectory()) { // шаг рекурсии - директория
                rec(path, ext);
            }
            else { // точка останова - файл
                // сначала проверить ext
                name_files.push(item);
            }
        }
    }
    let name_files = [];
    rec(dir);
    return name_files;
}

module.exports = {
    about,
    get_files_filter
}
