const http = require('http');
const fs = require('fs');
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // res.end('welcome Shohel Rana');

     const handleReadFile = (statusCode, fileLocation)=>{
        fs.readFile(fileLocation, (err, data)=>{
            res.writeHead(statusCode, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
     }

    if(req.url === '/'){
        handleReadFile(200, './home/index.html');
         // fs.readFile('./home/index.html', (err, data)=>{
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write(data);
        //     res.end();
        // });
    }
    else if(req.url === '/about'){
        handleReadFile(200, './home/about.html');
        // fs.readFile('./home/about.html', (err, data)=>{
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write(data);
        //     res.end();
        // });
    }
    else if(req.url === '/contact'){
        handleReadFile(200, './home/contact.html');
        // fs.readFile('./home/contact.html', (err, data)=>{
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write(data);
        //     res.end();
        // });
    }
    else{
        handleReadFile(200, './home/error.html');
        // fs.readFile('./home/error.html', (err, data)=>{
        //     res.writeHead(404, {'Content-Type': 'text/html'});
        //     res.write(data);
        //     res.end();
        // });
    }

});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});
