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


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'M_photo'
    }],
    boughtPhotos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'M_photo'
    }],
    uploadedPhotos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'M_photo'
    }]
});

// Create the User model
const User = mongoose.model('User', userSchema);
// Export the User model
module.exports = User;