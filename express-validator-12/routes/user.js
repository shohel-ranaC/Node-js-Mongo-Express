const express = require('express');
const { body, validationResult } = require('express-validator');
const { userRegister, userLogin } = require('../controllers/controller');
const { userRegistrationValidator, userLoginValidator } = require('../validation/auth');
const { runValidation } = require('../validation/validate');

const userRoutes = express.Router();

userRoutes.post("/register",
 userRegistrationValidator,
 runValidation,
 userRegister 
 );

 
// for login
userRoutes.post('/login',
userLoginValidator,
runValidation,
userLogin
);


module.exports = userRoutes;