const usersService = require('../services/S_users');

//...

const getUserByEmail = async(req,res)=>{
    const emailUser = await userService.getUserByEmail(req.params.email);
    if (!emailUser){
        return res.statuse(404).json({errors:['User was not found']});
    }

    res.json(emailUser);
}

//...
//...

const getUsers = async(req, res) =>{
    const Users = await usersService.getUsers();
    res.json(Users);
}


module.exports = {
    createUser,
    getUserByEmail,
    updateUserPasswordByEmail,
    deleteUserByEmail,
    getUsers
}