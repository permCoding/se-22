const http = require("http");

const server = http.createServer();
const port = 3000;

let callback = (request, response) => {
    let req = request.url;
    // todo req
    let lines = [
        "id,name,age",
        "1,Алиса,22",
        "2,Коля,18"];
    let line = lines.join('\n');

    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
    response.write(line);
    response.end();
}

server.on("request", callback);

server.listen(port);
