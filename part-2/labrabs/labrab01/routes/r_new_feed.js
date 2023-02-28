const express = require('express');
const router = express.Router();
let { model } = require("../models/m_new_feed.js");
const dp = require("../private/database.js");
const htmlParser = express.urlencoded({extended: false});

router.get('/', (req, res) => {
    res.render('new_feed.ejs', model); // render view
});

router.post('/', htmlParser, (req, res) => {
    let { userName, userFeed } = req.body;
    dp.insertFeed(userName, userFeed);
    res.redirect("/feeds");
});

module.exports = router;
