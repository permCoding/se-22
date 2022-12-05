const http = require("http");

const server = http.createServer();
const port = 3000;

/*
    /
    /json
    /csv
*/

let callback = (request, response) => {
    let req = request.url;
    let args = req.split('/');
    response.write(args.join(' / '));
    let about = require('./about.json');
    response.write(JSON.stringify(about, null, 4));
    response.end();
}

server.on("request", callback);

server.listen(port);
