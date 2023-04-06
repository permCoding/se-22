const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

let sql_delete = 'DELETE FROM prods'
sqlite.run(sql_delete)

let sql_seq = `
    UPDATE SQLITE_SEQUENCE 
    SET seq = 0 
    WHERE name = 'prods';
`
sqlite.run(sql_seq)

sqlite.close()
