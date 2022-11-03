const express = require('express');
const app = express();
const PORT = 3000;

// access static public folder........
app.use(express.static('public')); 

// const myMiddleware = (req, res, next) => {
//     console.log('middle ware function');
//     req.currentTime = new Date(Date.now());
//     next();
// };
// access the middleware all........
// app.use(myMiddleware); 

// error handling middleware

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

// app.use((err, req, res, next) => {
//     res.status(500).send('bad url request');
//  });

// app.get('/', myMiddleware, (req, res)=>{
//     console.log('i am home'+ req.currentTime);
//     res.send('Home Route');
// });

// app.get('/about', (req, res)=>{
//     console.log('i am home' + req.currentTime);
//     res.send('Home Route');
// });


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});