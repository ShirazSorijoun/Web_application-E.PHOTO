const mongoose = require ('mongoose');

mongoose.connect('mongodb://<db_username>:<db_password>@<db_host>/<db_name>', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

const storeLocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  }
});

const StoreLocation = mongoose.model('StoreLocation', storeLocationSchema);  
module.exports = StoreLocation;