const express = require('express');
const router = express.Router();
let { model } = require('../models/m_intro.js');

router.get('/', (req, res) => {
    res.render('intro.ejs', model); // render view
});

module.exports = router;
