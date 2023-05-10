const express = require("express");

let port = 3000;
const app = express();
app.set("view engine", "hbs");
app.use(express.static('public'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use("/", require('./routers/index.js'));

app.listen(port, () => console.log(`http://localhost:${port}/`));
