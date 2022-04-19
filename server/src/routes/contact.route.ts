const router = require('express').Router();
const contactController = require('../controllers/contact.controller');

router.post('/', userController.post);

module.exports = router;
