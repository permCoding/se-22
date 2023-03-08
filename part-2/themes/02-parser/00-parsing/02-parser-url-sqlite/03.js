const fs = require('fs');
const cheerio = require('cheerio');

name_file = "data.html";
let html = fs.readFileSync(name_file, "utf8");

let $ = cheerio.load(html);

let find = $("table.t_scores tbody tr")

let data = [];

find
    .each((i, tr) => {
        team = $(tr).find('td.team').text();
        data[i] = team;
    });

data.forEach((item, i) => console.log(i + '\t' + item));