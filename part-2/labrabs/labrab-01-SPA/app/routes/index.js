const router = require('express').Router();

let controller = require('../controllers/contr_index');

router.get('/', controller); // подключаем контроллер

module.exports = router;
