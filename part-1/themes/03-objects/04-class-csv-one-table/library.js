class WorkCSV {
    _json; //
    constructor(file_name, del) {
        this.fs = require("fs");
        this._ = require("lodash");
        this.csvjson = require("csvjson");
        this.fastcsv = require("fast-csv");
        this._json = this.csv_to_json(file_name, del);
    }
    csv_to_json(nameFile, del=',') {
        let textCSV = this.fs.readFileSync(nameFile, 'utf-8');
        return this.csvjson.toObject(textCSV, { delimiter: del });
    }
    write_to_csv(array, nameFile) {
        let fw = this.fs.createWriteStream(nameFile);
        this.fastcsv
            .write(array, {headers:true})
            .pipe(fw);
    }
    select() {
        // SQL Select
        // FIELDS
        // WHERE
        // ORDER BY
    }
}

module.exports = {
    WorkCSV
}