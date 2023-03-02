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

result = "";
teams
    .forEach(team => result += 
        `${team.nums[0]}\t \
        ${team.name}\t \
        ${team.nums[1]}\t \
        ${team.nums[2]}\t \
        ${team.nums[3]}\t \
        ${team.nums[4]}\n`    
    );

name_file_result = "result.txt";
fs.writeFileSync(name_file_result, result); 