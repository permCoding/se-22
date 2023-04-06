const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

sql_create = `
    CREATE TABLE IF NOT EXISTS prods(
        id INTEGER UNIQUE,
        title TEXT,
        href TEXT,
        price INTEGER,
        stores TEXT,
        PRIMARY KEY (id AUTOINCREMENT)
    );
`

sqlite.run(sql_create, (res) => { 
    if (res.error) throw res.error;
})

sqlite.close()
