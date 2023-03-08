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
        let pdf = /\S{1,}\.pdf/g;
        if (lnk.search(pdf) > -1)
            if (lnk.split("/")[3] == "download")
                data.push(lnk);
    });

console.log(data);
