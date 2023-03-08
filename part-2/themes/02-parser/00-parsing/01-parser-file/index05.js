const fs = require('fs');
const cheerio = require('cheerio');

name_file = "data.html";
let html = fs.readFileSync(name_file, "utf8");

let $ = cheerio.load(html);

let links = $("a")
data = [];

links
    .each((i, link) => {
        let lnk = $(link).attr("href");
        // let pdf = /\S{1,}\.pdf/g;
        let pdf = /\S+\.pdf/g;
        if (lnk.search(pdf) > -1) data.push(lnk);
    });

data.map(item=>console.log(item));
