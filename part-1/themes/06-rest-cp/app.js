const http = require("http");
const { about, get_files_filter } = require('./module');
let { WorkData } = require('./library');

const server = http.createServer();
const port = 3000;

let callback = (request, response) => {
    let args = request.url.split('/');
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
    console.log(args.length); // это просто для контроля вывода - убрать после отладки
    console.log(args); // это просто для контроля вывода - убрать после отладки
    if (args[args.length-1] === '') args.pop(); // убираем пустой последний элемент
    switch (args.length) {
        case 1: // http://localhost:3000
            about(response);
            break;
        case 2: // http://localhost:3000/json или http://localhost:3000/csv
            let files =  get_files_filter('./', args[1]);
            response.write(files.join('\n'));
            break;
        case 3: // http://localhost:3000/json/users.json
            // тут вернуть клиенту содержимое указанного
            // в request файла args[2] в виде json-строки
            let wd = new WorkData(`./${args[1]}/${args[2]}`);
            response.write(JSON.stringify(wd.json, null, 4));
            break;
        case 4: // http://localhost:3000/json/users.json/?rating=desc&name=asc
            // тут использовать разработанный ранее класс
            // с помощью которого выбрать из файла ${args[2]} данные и
            // отсортировать их по указанным в request направлениям - ${args[3]}\n`);
            let wd_sort = new WorkData(`./${args[1]}/${args[2]}`);
            response.write(JSON.stringify(wd_sort.json, null, 4));
            break;
        default:
            response.statusCode = 404;
            response.write('Запрос ошибочный...');
            break;
    }
    response.end();
}

server.on("request", callback);

server.listen(port, () => console.log(`localhost:${port}`));
