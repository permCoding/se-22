const http = require("http");

const server = http.createServer();
const port = 8080;

let callback = (request, response) => {
    let req = request.url;
    // todo req
    response.write(req);
    response.end();
}

server.on("request", callback);

server.listen(port);
