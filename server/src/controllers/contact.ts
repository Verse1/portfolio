import express, { Request, Response } from 'express';

module.exports = {
  post: (req: Request, res: Response) => {
    const { name, email, message } = req.body;
    const db = req.app.get('db');
    db.contact
      .post([name, email, message])
      .then((response: Response) => {
        res.status(200).send(response);
      })
      .catch((err: Error) => {
        res.status(500).send(err);
      });
  },
};
