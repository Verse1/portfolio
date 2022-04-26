import express, { Express, Request, Response } from 'express';

const router = express.Router();

router.use('/contact', require('./contact.route'));
router.use('/', require('./users.route'));
router.use('/admin', require('./admin.route'));
router.use('/requests', require('./requests.route'));

module.exports = router;
