const fs = require('fs');
const cheerio = require('cheerio');
const sqlite3 = require('sqlite3').verbose();

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


var db = new sqlite3.Database("./db/teams.db");

let query = `INSERT INTO results(pos, name_team, games, wins, draws, defs) VALUES(?, ?, ?, ?, ?, ?)`;

teams
    .forEach(team => {
        let arr = [
            team.nums[0], 
            team.name,
            team.nums[1],
            team.nums[2],
            team.nums[3],
            team.nums[4]
        ];

        db.run(query, arr, (err) => { });        
    });

db.close();