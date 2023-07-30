const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Orders = require('./routes/R_order');
const Products = require('./routes/R_products');
const customEnv = require('custom-env');

customEnv.env(process.env.NODE_ENV, './config');

// Mongo DB connection
const database = process.env.CONNECTION_STRING || 'mongodb://127.0.0.1:27017/proddb';
mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Mongo connected'))
  .catch(err => console.log(err));

const app = express();

app.use(express.static(__dirname + '/views/views'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

/*
app.use(express.static('public', {
  setHeaders: (res, path) => {
      if (path.endsWith('.js')) {
          res.setHeader('Content-Type', 'application/javascript');
      }
  }
}));
*/

// Routes
app.use('/cart', Orders);
app.use('/Product', Products);

const PORT = process.env.PORT || 4111;

app.listen(PORT, () => console.log('Server started on port: ' + PORT));
