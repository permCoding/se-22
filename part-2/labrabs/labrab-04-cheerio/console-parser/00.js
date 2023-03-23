const request = require('sync-request'); // npm i sync-request

let url = "https://pcoding.ru/darkNet.php";
let ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) \
    AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36';
let res = request('GET', url, { headers: {'user-agent': ua} });
let html = res.getBody('utf8');

console.log(html);

/*
общая задача:
сначала получить всю страницу
затем выбрать из неё нужные данные
будем выбирать ссылки на pdf-документы
<a class="links" href="https://pcoding.ru/pdf/AgroRobot.pdf" target="_blank">
    AgroRobot.pdf
</a>
*/