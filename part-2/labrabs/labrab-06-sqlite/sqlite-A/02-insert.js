const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

let prod = {
    "title": "120 ГБ 2.5\" SATA накопитель Team Group GX1 [T253X1120G0C101] [SATA, чтение - 500 Мбайт/сек, запись - 320 Мбайт/сек, 2D NAND 3 бит TLC]",
    "href": "https://www.dns-shop.ru/product/2046fc61ba4a3332/120-gb-25-sata-nakopitel-team-group-gx1-t253x1120g0c101/",
    "price": "950 ₽",
    "stores": "В наличии: в 18 магазинах"
}

// let sql_insert = "INSERT INTO prods VALUES(?, ?, ?, ?);"

sqlite.insert('prods', prod)

// sqlite.insert('prods', prod, (res) => { 
//     if (res.error) throw res.error;
// })

sqlite.close()
