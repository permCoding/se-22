const fs = require('fs');
const cheerio = require('cheerio');

name_file = "data.html";
let html = fs.readFileSync(name_file, "utf8");

let $ = cheerio.load(html);

let trs = $("table.t_scores tbody tr")

let teams = [];

trs
    .each((i, tr) => {
        team_name = $(tr).find('td.team').text();
        tds = $(tr).find('td.number');
        items = [];
        tds.each((j, td) => {
            items.push($(td).text());
        });
        teams.push({
            name: team_name,
            nums: items.join(', ')
        });
    });

teams.forEach(team => console.log(team));