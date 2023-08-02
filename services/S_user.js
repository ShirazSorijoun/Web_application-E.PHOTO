
const User = require('../models/M_user'); //מייבא את הסכימה

const userService = {

    addUser: async (email, firstName, lastName, password) => {
        try{
        const user = new User({
            email,
            password,
            firstName,
            lastName,
            type: 'basic'
        });
        await user.save();
        } catch(error){
            console.error('Error in addUser function:', error);
        }
    },

    getAllUsers: async () =>{
        return await User.find().populate('boughtProduct');
    },

    getUserByFirstNameSearch: async (name) => {
        return await User.find({ firstName: {$regex: '^.*' + name + '.*$' , $options: 'i'} }).populate('boughtProduct');
    },

    getUserByEmail: async (email) => {
        return await User.findOne({ email: email }).populate('boughtProduct');
    },

    getUserByEmailAndPass: async (email, password) => {
        return await User.findOne({ email, password });
    },

    updateUser: async (user) => {
        return await User.findOneAndUpdate({ _id: user._id }, user);
    },

    deleteUser: async (_id) => {
        return await User.findOneAndDelete({ _id });
    }
}

module.exports = userService;

