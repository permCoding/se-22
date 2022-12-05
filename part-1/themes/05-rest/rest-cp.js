const http = require("http");

const server = http.createServer();
const port = 3000;

/*
    /
    /json
    /csv
*/

let callback = (request, response) => {
    let args = request.url.split('/');
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
    // args.length
    response.write(args[1] + '\n');
    response.write(args[2] + '\n');
    let about = require('./about.json');
    response.write(JSON.stringify(about, null, 4));
    response.end();
}

server.on("request", callback);

server.listen(port);
