const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.end('<h1>welcome to My Server</h1>');
    //res.end('hello, this is our first server');
});

server.listen(port, hostname, ()=>{
    console.log(`server is running port  at http://${hostname}:${port}`);
})