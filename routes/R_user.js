const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/C_user');

router.route('/')
    .get(userControllers.getAllUsers)
    .post(userControllers.addUser);

router.route('/:email')
    .get(userControllers.getUserByEmail)
    .put(userControllers.updateUserPasswordByEmail)
    .delete(userControllers.deleteUserByEmail);

module.exports = router;