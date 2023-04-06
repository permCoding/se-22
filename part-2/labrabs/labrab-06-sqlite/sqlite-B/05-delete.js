const sqlite = require('sqlite-sync')

sqlite.connect('prods.db')

let sql_delete = 'DELETE FROM prods'

sqlite.run(sql_delete)

sqlite.close()
