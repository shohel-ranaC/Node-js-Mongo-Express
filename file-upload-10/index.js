const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');

const app = express();
 const PORT = 8005;

 app.use(express.urlencoded({ extended: true}));
 app.use(express.json());

// connecting to BD
const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/usersTestDB');
        console.log('db connection established')
    } catch (error) {
        console.log('db is not connected');
        console.log(error);
        process.exit(1);
    }
};

// creating schema and model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'user name is required'],
    },
    image: {
        type: String,
        required: [true, 'user image is required'],
    },
});

const User = mongoose.model('User', userSchema);

 // upload a file
 const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const name = Date.now() + '-' + file.originalname;
      cb(null, name);
    }
  })
  
  const upload = multer({ storage: storage })


 app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/./index.html');
 });


 app.post('/register', upload.single('image'), async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            image: req.file.filename,
        });
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
 });

 app.get('/test', (req, res) => {
    res.status(200).send('Hello World!');
 });

 app.listen(PORT, async () =>{
    console.log(`Server is running at  http://localhost:${PORT}`);
    await connectDB();
 });