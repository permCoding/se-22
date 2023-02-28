const express = require('express');
const app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    let pagePath = __dirname + "/views/" + "intro.html";
    res.sendFile(pagePath);
});

app.get("/:page", (req, res) => {
    let page = req.params.page;
    let pagePath = __dirname + "/views/" + page;
    res.sendFile(pagePath);
});

app.listen(3000, "localhost", () => console.log(`--> to stop: Ctrl+C`));
