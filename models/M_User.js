const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required: [true, "Email is required."],
        unique: true
    },
    password:{
        type:String,
        required: [true, "Password is required."]
    },
    firstName: {
      type: String,
      required: [true, "First name is required."]
    },
    lastName: {
      type: String,
      required: [true, "Last name is required."]
    },
    type:{
        type:String,
        required: [true, "Type is required."]
    },
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'ShoppingBasketSchema'
    }],
    boughtProduct:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'productSchema'
    }]
});

// Create the User model
const User = mongoose.model("User", userSchema);
// Export the User model
module.exports = User;