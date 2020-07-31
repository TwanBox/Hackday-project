const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/twanboox_db', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch(error => console.log(error));

app.listen(5000, () => console.log('server Listening on port 5000!!'));

const Users = require('./routes/users');
app.use('/users', Users);