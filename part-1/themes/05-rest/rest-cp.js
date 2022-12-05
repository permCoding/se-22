const http = require("http");
const { about, get_files_filter } = require('./module');

const server = http.createServer();
const port = 3000;

let callback = (request, response) => {
    let args = request.url.split('/');
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
    console.log(args.length);
    switch (args.length) {
        case 1, 2:
            about(response);
            break;
        case 3:  // *******/json
            let files =  get_files_filter('./', args[1]);
            response.write(files.join('\n'));
            break;
        case 4: // *******/json/abiturs.csv/
            //
            response.write('/json/abiturs.csv/');
            break;
        case 5: // *******/json/abiturs.csv/?rating=desc&name=asc
            //
            response.write('/json/abiturs.csv/?rating=desc&name=asc');
            break;
        default:
            response.statusCode = 404;
            response.write('Запрос ошибочный...');
            break;
    }
    response.end();
}

server.on("request", callback);

server.listen(port);
