const usersService = require('../services/S_users');

//...

const getUserByEmail = async(req,res)=>{
    try{
        const emailUser = await userService.getUserByEmail(req.params.email);
        if (!emailUser){
            return res.statuse(404).json({errors:['User was not found']});
        }
        res.json(emailUser);
    }catch(error){
    console.log(error);
    }
}

//...
//...

const getUsers = async(req, res) =>{
    try{
        const Users = await usersService.getUsers();
        res.json(Users);
    } catch (error){
        console.log(error);
    }
}


module.exports = {
    createUser,
    getUserByEmail,
    updateUserPasswordByEmail,
    deleteUserByEmail,
    getUsers
}