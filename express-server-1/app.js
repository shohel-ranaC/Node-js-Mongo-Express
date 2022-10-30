const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

app.use('/api/user', userRouter);


app.use('/register', (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + '/views/register.html');
});

// app.use('/login', (req, res) => {
//     res.send('<h1>I am a get request at Login page</h1>');
// });

app.use('/login', (req, res) => {
    // res.cookie('Name', 'Shohel Rana');
    // res.cookie('Age', '30');
    res.clearCookie('Name');
    res.end();
});

// send json file............
app.use('/json', (req, res) => {
    // res.status(200).json({
    //     message: 'I am a Shohel Rana',
    //     statusCode: 200,
    // });
    res.redirect('/login');
});

app.use('/', (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + '/views/index.html');
});

app.use((req, res)=>{
    res.send('<h1>404 No found</h1>');
});


module.exports = app;