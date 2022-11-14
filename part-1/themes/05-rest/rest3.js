const http = require("http");

const server = http.createServer();
const port = 3000;

let callback = (request, response) => {
    let req = request.url; // todo маршрутизация
    let arr = req.split('/');
    let domain = arr[1];
    let res = '';
    switch (domain) {
        case 'csv':
            res = 'csv files';
            break;
        case 'json':
            res = 'json files';
            break;
        default:
            break;
    }
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
    response.write(res);
    response.end();
}

server.on("request", callback);

server.listen(port);
