const axios = require('axios');

url = "https://russianfootballtable.ru/";
// url = "https://www.championat.com/football/_england/tournament/4013/table/";

axios
    .get(url)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });