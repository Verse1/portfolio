const contactRouter = require('express').Router();
const contactController = require('../controllers/contact.controller');

contactRouter.post('/', contactController.post);

module.exports = contactRouter;
