const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('I am a get request at home page');
});
router.get('/register', (req, res) => {
    res.send('I am a post request at Register page');
    res.end();
});
router.get('/login', (req, res) => {
    res.send('I am a put request at Login page');
    res.end();
});

module.exports =router;