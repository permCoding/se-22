const pathDB = "./private/database.db";
const db = require('better-sqlite3')(pathDB);

class DataProcessing {
    getFeeds() {
        let query = `
            SELECT userName, userFeed
            FROM feeds
            ORDER BY idFeed DESC`;
        let rows = db.prepare(query).all();
        return rows;
    }
    insertFeed(name, feed) {
        let values = { name: name, feed: feed };
        let query = `
            INSERT INTO feeds (userName,userFeed)
            VALUES (@name, @feed)`;
        db.prepare(query).run(values);
    }
}

module.exports = new DataProcessing();
