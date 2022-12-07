const { check } = require("express-validator");

exports.userRegistrationValidator = [
check("name")
.trim()
.notEmpty()
.withMessage("Name is missing!")
.isLength({min: 5})
.withMessage("name must have at least 5 characters")
.isLength({max: 30})
.withMessage("name can have maximum 30 characters"),

check("email")
.trim()
.notEmpty()
.withMessage("Email is missing!")
.isEmail()
.withMessage("Not a valid email"),

check("password")
.trim()
.notEmpty()
.withMessage("Password is missing!")
.isLength({min: 5})
.withMessage("password must have at least 5 characters"),

check("dob")
.trim()
.notEmpty()
.withMessage("date of birth is missing!")
.isISO8601()
.toDate()
.withMessage("Not a valid date of birth")

];

exports.userLoginValidator = [
    check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is missing!")
    .isEmail()
    .withMessage("Not a valid email"),
    
    check("password")
    .trim()
    .notEmpty()
    .withMessage("Password is missing!")
    .isLength({min: 5})
    .withMessage("password must have at least 5 characters")
    
    ];