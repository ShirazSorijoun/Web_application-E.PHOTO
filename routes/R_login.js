const express = require("express");
const router = express.Router();

const loginController  = require("../controllers/C_login");

//router.get("/register", loginController.registerForm);
//router.post("/register", loginController.register);
//router.get("/login", loginController.loginForm);
//router.post("/login", loginController.login);
//router.get('/logout',loginController.logout);
//router.get('/', loginController.isLoggedIn, loginController.foo);


router.get('/register',loginController.registerView);
router.get('/login', loginController.loginView);

module.exports = router;
