import express, { Request, Response } from 'express';
import contact from '../models/contact.model';

module.exports = {
  post: (req: Request, res: Response) => {
    const { name, email, message } = req.body;
    
    const newContact = new contact({
      name,
      email,
      message,
    });
    newContact
      .save()
      .then(() => {
        res.status(200).json({
          message: 'Contact saved successfully',
        });
      })
      .catch((err: Error) => {
        res.status(500).json({
          message: 'Error saving contact',
          error: err,
        });
      });
  },
};
