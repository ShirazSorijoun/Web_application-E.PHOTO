const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/C_user');

router.route('/')
    .get(usersControllers.getUsers)
    .post(usersControllers.createUser);

router.route('/:email')
    .get(usersControllers.getUserByEmail)
    .put(usersControllers.updateUserPasswordByEmail)
    .delete(usersControllers.deleteUserByEmail);