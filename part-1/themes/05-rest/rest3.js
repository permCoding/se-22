const http = require("http");

const server = http.createServer();
const port = 3000;

const get_csv_files = (filter) => {
    // рекурсивно перебрать разрешённые директории
    return [`${filter}/users.csv`, `${filter}/abc.csv`, `${filter}/sorted.csv`];
}

// http://localhost:3000/users.csv/?name=asc&age=desc

let callback = (request, response) => {
    let req = request.url; // todo маршрутизация
    let arr = req.split('/');
    let domain = arr[1];
    let res = '';
    console.log(domain);
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
    response.write("---------\n");
    switch (domain) {
        case 'csv':
            // try {
            //     let objs = get_csv_files(domain);
            //     response.write('csv files:\n');
            //     response.write(objs.join('\n'));    
            // } catch (error) {
            //     response.write(error);                
            // }
            let objs = get_csv_files(domain);
            response.write(objs.join('\n'))
            break;
        case 'json':
            res = 'json files';
            response.write(res);
            break;
        default:
            break;
    }
    response.end();
}

server.on("request", callback);

server.listen(port, () => console.log(port));
