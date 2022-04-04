import express, { Express} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const mongoose = require('mongoose');

const app : Express = express();

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./src/routes/routes'));

const uri = process.env.MONGO_URL;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.listen(port);
module.exports = app;
