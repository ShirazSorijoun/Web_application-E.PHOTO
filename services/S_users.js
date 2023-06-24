const User = require('../models/M_users'); //מייבא את הסכימה

const createUser = async(email,password,type,cart,orders,yourProducts)=>{
    try {
        const user = new userSchema({
            email: email,
            password: password,
            type: type
        });
        if(type == 'client')
        {
            user.cart = cart;
            user.orders = orders;
            yourProducts = null;
        }
        if (type == 'photographer')
        {
            user.cart = null;
            user.orders = null; 
            yourProducts = yourProducts;
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