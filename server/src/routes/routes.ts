import express, { Express, Request, Response } from 'express';

const router = express.Router();

router.use('/contact', require('./contact.route'));

module.exports = router;
