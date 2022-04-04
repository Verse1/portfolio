const router = require('express').Router();
const controller = require('../controllers/contact');

router.post('/', controller.post);

module.exports = router;