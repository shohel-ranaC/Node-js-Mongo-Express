const express = require('express');
const router = express.Router();


router.get('/register', (req, res) => {
    res.send('I am a post request at Register page');
    res.end();
});
router.get('/login', (req, res) => {
    res.send('I am a put request at Login page');
    res.end();
});

module.exports =router;