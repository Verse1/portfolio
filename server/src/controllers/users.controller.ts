import express, { Request, Response } from 'express';
import users from '../models/contact.model';
import bcrypt from 'bcrypt';

module.exports = {
  login: (req: Request, res: Response) => {
    const { username, password } = req.body;
    users
      .findOne({ username })
      .then((user: any) => {
        if (!user) {
          return res.status(404).json({
            message: 'Login failed',
          });
        }
        bcrypt.compare(
          password,
          user.password,
          (err, result: boolean) => {
            if (err) {
              return res.status(500).json({
                message: 'Error comparing passwords',
                error: err,
              });
            }
            if (result) {
              return res.status(200).json({
                message: 'Login successful',
                user,
              });
            }
            return res.status(401).json({
              message: 'Login failed',
            });
          }
        );
      })
      .catch((err: Error) => {
        return res.status(500).json({
          message: 'Error finding user',
          error: err,
        });
      });
  },
  register: (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    const newUser = new users({
      username,
      email,
      password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(() => {
            res.status(200).json({
              message: 'User saved successfully',
            });
          })
          .catch((err: Error) => {
            res.status(500).json({
              message: 'Error saving user',
              error: err,
            });
          });
      });
    });
  },
};
