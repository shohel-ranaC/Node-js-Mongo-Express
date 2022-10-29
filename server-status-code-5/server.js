const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    // res.writeHead(202, { 'Content-Type': 'text/plain' });
    res.writeHead(202, { 'Content-Type': 'text/html' });
    res.write('<h2>This is my first server</h2>');
    res.write('<h2>Name: Shohel Rana</h2>');
    res.write('<h2>Age: 30</h2>');
    res.end();
    //res.end('hello, this is our first server');
});

server.listen(port, hostname, ()=>{
    console.log(`server is running port  at http://${hostname}:${port}`);
})