import express, { Express, Request, Response } from 'express';

const router = express.Router();

router.use('/contact', require('./contact'));

module.exports = router;
// const s = 3;
// s=4;
