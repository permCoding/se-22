const request = require('request');

let URL = 'https://pcoding.ru/darkNet.php';

request(URL, function (err, res, body) {
    if (err) throw err;
    console.log(body);
    console.log(res.statusCode);
});
