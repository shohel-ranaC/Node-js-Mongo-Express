const express = require('express');
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/circle', (req, res)=>{
    res.sendFile(__dirname + '/circle.html');
});

app.get('/triangle', (req, res)=>{
    res.sendFile(__dirname + '/triangle.html');
});

app.post('/triangle', (req, res)=>{
    const height = req.body.height;
    const base = req.body.base;
    const area = 0.5 * height * base;
    res.send(`<h1>Area of Triangle is: ${area}</h1>`);
});
app.post('/circle', (req, res)=>{
    const radius = req.body.radius;
    const area = Math.PI * radius * radius;
    res.send(`<h1>Area of Circle is: ${area}</h1>`);
});

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});