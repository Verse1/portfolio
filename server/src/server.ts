import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';

declare module 'express-session' {
  interface SessionData {
    user: string;
  }
}

dotenv.config();

const mongoose = require('mongoose');

const app: Express = express();

const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(cookieParser());

const uri = process.env.MONGO_URL;

app.use(
  session({
    secret: process.env.SESSION_SECRET ?? 'secret',
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
  })
);

app.use('/api', require('./routes/routes'));

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello World!');
  console.log('Hello World!');
});

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
module.exports = app;
