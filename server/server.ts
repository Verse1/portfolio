import express, { Express , Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const mongoose = require('mongoose');

const app : Express = express();

const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api', require('./src/routes/routes'));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
  console.log('Hello World!');
  
});

const uri = process.env.MONGO_URL;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.listen(port);
module.exports = app;
