const fs = require('fs');
const cheerio = require('cheerio');

name_file = "data.html";
let html = fs.readFileSync(name_file, "utf8");

let $ = cheerio.load(html);

let links = $("a")
data = [];

links
    .each((i, link) => {
        data.push($(link).attr("href"));
    });

console.log(data);
