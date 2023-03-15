const router = require('express').Router();

let c_get = require('../controllers/controller_get');
let c_post = require('../controllers/controller_post');

router.get('/', c_get); // подключаем контроллер
router.post('/sorted/', c_post); // подключаем контроллер

module.exports = router;
