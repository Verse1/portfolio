import requests from '../models/requests.model';
import { Request, Response } from 'express';

module.exports = {
  getRequests: async (req: Request, res: Response) => {
    try {
      const allRequests: Array<String> = await requests.find();
      res.status(200).json(allRequests);
    } catch (err) {
      res.status(500).json({
        message: 'Error getting requests',
        error: err,
      });
    }
  },
  addRequest: async (req: Request, res: Response) => {
    const request = new requests({
      user: req.body.user,
      type: req.body.type,
      title: req.body.title,
    });
    try {
      const newRequest = await request.save();
      res.status(201).json(newRequest);
    } catch (err) {
      res.status(500).json({
        message: 'Error adding request',
        error: err,
      });
    }
  },
};
