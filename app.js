
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Orders = require('./routes/R_order');

const Products = require('./routes/R_products');
const Product = require('./models/M_product');
const productsData = require('./data/products');

const Locations = require('./routes/R_location')
const customEnv = require('custom-env');



customEnv.env(process.env.NODE_ENV, './config');

const app = express(); // Initialize the 'app' variable here

// google map
app.get('/api/google-maps-key', (req, res) => {
  res.json({ apiKey: process.env.GOOGLE_MAPS_API_KEY });
});

app.get('/api/store-location', (req, res) => {
  // Your code to fetch store location data from the database or any other source
  // For example:
  const storeLocations = [
    { lat: 40.7128, lng: -74.0060, name: 'New York' },
    { lat: 34.0522, lng: -118.2437, name: 'Los Angeles' },
    // Add more store locations as needed
  ];

  res.json(storeLocations); // Send the store location data as a JSON response
});


// Mongo DB connection
const database = process.env.CONNECTION_STRING || 'mongodb://127.0.0.1:27017/proddb';
mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Mongo connected'))
  .catch(err => console.log(err));

app.use(express.static(__dirname + '/views/'));
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
/////////////////
//ADDING DATA 


 // Save the products array to the MongoDB collection
 Product.insertMany(productsData)
 .then(() => {
   console.log('Products data saved to MongoDB');
   mongoose.disconnect(); // Close the connection after saving data
 })
 .catch((error) => {
   console.error('Error saving products data to MongoDB:', error);
   mongoose.disconnect(); // Close the connection on error
 }).catch((error) => {
console.error('Error connecting to MongoDB:', error);
});

///////////////////

// Routes
app.use('/cart', Orders);
app.use('/Product', Products);
app.use('/Location', Locations);
app.use('/controllers', express.static('controllers'));

const PORT = process.env.PORT || 4111;

app.listen(PORT, () => console.log('Server started on port: ' + PORT));
