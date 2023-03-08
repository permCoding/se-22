const axios = require('axios');
const fs = require('fs');

url = "https://pcoding.ru/darkNet.php";

axios
    .get(url)
    .then(response => {
        fs.writeFileSync("data.html", response.data);
    })
    .catch(error => {
        console.log(error);
    });