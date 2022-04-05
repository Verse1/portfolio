const router = require('express').Router();
const controller = require('../controllers/contact.controller');

router.post('/', controller.post);

module.exports = router;