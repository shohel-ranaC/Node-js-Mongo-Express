// // match from database authentication
// require('dotenv').config();
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const User = require("./models/user.model");

// const app = express();
//  const PORT = process.env.PORT || 5000;
//  const dbURL = process.env.MONGO_URL;

//  mongoose
//  .connect(dbURL)
//  .then(()=>{
//     console.log("mongoDB is connected");
//  })
//  .catch((error) => {
//     console.log(error);
//     process.exit(1);
//  });

// app.use(cors());
// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/./views/index.html");
// });

// app.post("/register", async(req, res) => {
//    try {
//     const newUser = new User(req.body);
//     await newUser.save();
//     res.status(201).json(newUser);
//    } catch (error) {
//     res.status(500).json(error.message);
//    }
// });

// app.post("/login", async(req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email: email });
//         if(user && user.password === password){
//             res.status(200).json({ status: 'valid user' });;
//         } else {
//             res.status(200).json({ status: 'valid not user' });;
//         }
//        } catch (error) {
//         res.status(500).json(error.message);
//        }
// });

// // route not found
// app.use((req, res, next) => {
//     res.status(404).json({
//         message: "Route not found",
//     });
// });

// // handling server errors
// app.use(( err, req, res, next) => {
//     res.status(500).json({
//         message: "something borke",
//     });
// });


// app.listen(PORT, ()=>{
//     console.log(`Server is running at http://localhost:${PORT}`);
// });


// // password hashing => avoid encryption key
// require('dotenv').config();
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const md5 = require("md5");
 
// //console.log(md5("message"));

// const User = require("./models/user.model");

// const app = express();
//  const PORT = process.env.PORT || 5000;
//  const dbURL = process.env.MONGO_URL;

//  mongoose
//  .connect(dbURL)
//  .then(()=>{
//     console.log("mongoDB is connected");
//  })
//  .catch((error) => {
//     console.log(error);
//     process.exit(1);
//  });

// app.use(cors());
// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/./views/index.html");
// });

// app.post("/register", async(req, res) => {
//    try {
//     const newUser = new User({
//         email: req.body.email,
//         password: md5(req.body.password),
//     });
//     await newUser.save();
//     res.status(201).json(newUser);
//    } catch (error) {
//     res.status(500).json(error.message);
//    }
// });

// app.post("/login", async(req, res) => {
//     try {
//         const email = req.body.email;
//         const password = md5(req.body.password);
//         const user = await User.findOne({ email: email });
//         if(user && user.password === password){
//             res.status(200).json({ status: 'valid user' });;
//         } else {
//             res.status(200).json({ status: 'valid not user' });;
//         }
//        } catch (error) {
//         res.status(500).json(error.message);
//        }
// });

// // route not found
// app.use((req, res, next) => {
//     res.status(404).json({
//         message: "Route not found",
//     });
// });

// // handling server errors
// app.use(( err, req, res, next) => {
//     res.status(500).json({
//         message: "something borke",
//     });
// });


// app.listen(PORT, ()=>{
//     console.log(`Server is running at http://localhost:${PORT}`);
// });

// password hashing + Salting => remove for same type password, generate same type hashing password p
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require("./models/user.model");

const app = express();
 const PORT = process.env.PORT || 5000;
 const dbURL = process.env.MONGO_URL;

 mongoose
 .connect(dbURL)
 .then(()=>{
    console.log("mongoDB is connected");
 })
 .catch((error) => {
    console.log(error);
    process.exit(1);
 });

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/./views/index.html");
});

app.post("/register", async(req, res) => {
   try {
    bcrypt.hash(req.body.password, saltRounds, async function(err, hash) {
        const newUser = new User({
            email: req.body.email,
            password: hash,
        });
        await newUser.save();
        res.status(201).json(newUser);
    });
   } catch (error) {
    res.status(500).json(error.message);
   }
});

app.post("/login", async(req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({ email: email });
        if(user){
            bcrypt.compare(password, user.password, function(err, result) {
                if(result === true){
                res.status(200).json({ status: 'valid user' });
                }
            });
        } else {
            res.status(200).json({ status: 'valid not user' });;
        }
       } catch (error) {
        res.status(500).json(error.message);
       }
});

// route not found
app.use((req, res, next) => {
    res.status(404).json({
        message: "Route not found",
    });
});

// handling server errors
app.use(( err, req, res, next) => {
    res.status(500).json({
        message: "something borke",
    });
});


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});