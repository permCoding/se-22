const express = require('express');
const router = express.Router();
const { model } = require("../models/m_feeds.js");
const dp = require("../private/database.js");

router.get('/', (req, res) => {
    model.feeds = dp.getFeeds();
    res.render('feeds.ejs', model); // render view
});

module.exports = router;
