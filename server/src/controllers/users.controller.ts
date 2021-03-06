import express, { Request, Response } from 'express';
import users from '../models/users.model';
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
        bcrypt.compare(password, user.password, (err, result: boolean) => {
          if (err) {
            return res.status(500).json({
              message: 'Error comparing passwords',
              error: err,
            });
          }
          if (result) {
            req.session.user = user;

            return res.status(200).json({
              message: 'Login successful',
              auth: true,
              admin: user.role === 'admin',
              approved: user.approved,
            });
          }
          return res.status(401).json({
            message: 'Login failed',
          });
        });
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
            req.session.user = newUser;
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
  auth: (req: Request, res: Response) => {
    let user: any;

    if (req.session.user) {
      try {
        user = JSON.parse(req.session.user);
      } catch (err) {
        user = req.session.user;
      }

      return res.status(200).json({
        message: 'User authenticated',
        auth: true,
        admin: user.role === 'admin',
        approved: user.approved,
      });
    }
    return res.status(200).json({
      message: 'User not authenticated',
      auth: false,
      admin: false,
      approved: false,
    });
  },

  getUsers: async (req: Request, res: Response) => {
    try {
      const fetchedUsers = await users.find(
        {},
        { email: 1, username: 1, role: 1, approved: 1 }
      );
      return res.status(200).json({
        message: 'Users retrieved successfully',
        fetchedUsers,
      });
    } catch (err) {
      return res.status(500).json({
        message: 'Error retrieving users',
        error: err,
      });
    }
  },

  deleteUser: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await users.findByIdAndDelete(id);
      return res.status(200).json({
        message: 'User deleted successfully',
      });
    } catch (err) {
      return res.status(500).json({
        message: 'Error deleting user',
        error: err,
      });
    }
  },
  approveUser: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await users.findByIdAndUpdate(id, {
        approved: true,
      });
      return res.status(200).json({
        message: 'User approved successfully',
      });
    } catch (err) {
      return res.status(500).json({
        message: 'Error approving user',
        error: err,
      });
    }
  },
};
