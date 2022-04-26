const requestsRouter = require('express').Router();
const requestsController = require('../controllers/requests.controller');

requestsRouter.get('/', requestsController.getRequests);
requestsRouter.post('/', requestsController.addRequest);

module.exports = requestsRouter;
