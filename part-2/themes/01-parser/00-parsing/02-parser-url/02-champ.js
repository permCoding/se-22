const axios = require('axios');
const fs = require('fs');

url = "https://www.championat.com/football/_england/tournament/4013/table/";

axios
    .get(url)
    .then(response => {
        fs.writeFileSync("data_champ.html", response.data);
    })
    .catch(error => {
        console.log(error);
    });