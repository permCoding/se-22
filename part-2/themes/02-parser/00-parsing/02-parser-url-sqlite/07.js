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
            nums: items.map(item => +item)
        });
    });

teams  // по кол-ву побед
    .sort((a, b) => { return b.nums[2] - a.nums[2]; })
    .slice(0,5)
    .forEach(team => console.log(`${team.nums[2]}\t${team.name}`));