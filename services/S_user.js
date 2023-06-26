const User = require('../models/M_user'); //מייבא את הסכימה

const createUser = async(email,password,type,cart,boughtPhotos,uploadedPhotos)=>{
    try {
        const user = new userSchema({
            email: email,
            password: password,
            type: type
        });
        if(type == 'client')
        {
            user.cart = cart;
            user.boughtPhotos = boughtPhotos;
            uploadedPhotos = null;
        }
        if (type == 'photographer')
        {
            user.cart = null;
            user.boughtPhotos = boughtPhotos; 
            uploadedPhotos = uploadedPhotos;
        }
        if (type == 'admin')
        //...
        //...

        return await user.save();
    } catch(error){
        console.error('Error in createUser function:', error);
    }
};


const getUserByEmail = async(email)=>{
    return await User.find(email);
}

const updateUserPasswordByEmail = async(email, newPassword)=>{
    const user = await getUserByEmail(email);
    if (!user)
    return null;

    user.password = newPassword;
    await user.save();
    return user;
}

const deleteUserByEmail = async(email) =>{
    const user = await getUserByEmail(email);
    if (!user)
    return null;

    await user.remove();
    return user;
}

//...
//...


module.exports = {
    createUser,
    getUserByEmail,
    updateUserPasswordByEmail,
    deleteUserByEmail
}