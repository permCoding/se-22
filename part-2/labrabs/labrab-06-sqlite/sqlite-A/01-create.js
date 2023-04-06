const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

sql_create = `
    CREATE TABLE IF NOT EXISTS prods(
        title TEXT,
        href TEXT,
        price TEXT,
        stores TEXT
    );
`

sqlite.run(sql_create)
// sqlite.run(sql_create, (res) => { 
//     if (res.error) throw res.error;
//     console.log(res);
// })

sqlite.close()
