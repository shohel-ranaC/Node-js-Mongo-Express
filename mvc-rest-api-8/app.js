const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users.route');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/users', userRouter)



// Home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// route not found error
app.use((req, res, next) => {
    res.status(404).json({
        message: 'route not found',
    });
});

// server error
app.use((req, res, next) => {
    res.status(500).json({
        message: 'something went wrong',
    });
});

module.exports = app;