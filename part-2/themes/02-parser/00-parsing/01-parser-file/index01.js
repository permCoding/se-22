const axios = require('axios');

url = "https://pcoding.ru/darkNet.php";

axios
    .get(url)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });