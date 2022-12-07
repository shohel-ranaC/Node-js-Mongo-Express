const express = require('express');
const { body, validationResult } = require("express-validator");
const userRoutes = require('./routes/user');


const app = express();
const PORT = 3000;

//  for bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
    res.send("hello world!");
});

app.use("/api", userRoutes);


app.listen(PORT, () =>{
    console.log(`Server is running at  http://localhost:${PORT}`);
 });

 //Form validation -> User registration workflow
 // name, email, password, dob
 // api/register