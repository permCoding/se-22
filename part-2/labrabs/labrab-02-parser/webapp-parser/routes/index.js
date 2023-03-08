const router = require('express').Router();

let controller = require('../controllers/controller');

router.get(['/','/:field&:direct'], controller); // подключаем контроллер

module.exports = router;
