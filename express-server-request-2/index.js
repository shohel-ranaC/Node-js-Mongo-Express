const { request } = require('express');
const express = require('express');
const app = express();
const PORT = 3001;

// at first npm bodyParser install........
// for use only body-parser............
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


      // query parameter request practice...........
      //request id http://localhost:3001/?id=1192&name=shohel

// app.get('/', (req, res) => {  
//     const id = req.query.id;
//     const name = req.query.name;
//     res.send(`Student Name is: ${name} and Student id is: ${id}`);
// });
 
      // route parameter request...........
      //http://localhost:3001/userId/1010/userAge/30
// app.get('/userId/:id/userAge/:age', (req, res) => {  
//     const id = req.params.id;
//     const age = req.params.age;
//     res.send(`Student ID is: ${id} and Student Age is: ${age}`);
    
// });

       // header parameter request...................
// app.get('/', (req, res) => {  
//        const id = req.header('id');
//        const name = req.header('name');
//        res.send(`Student ID is: ${id} and Student Name is: ${name}`);
            
//         });


       //for bodyParser......post request with json or from data...................
//  app.post('/user', (req, res) => {  
//     const name = req.body.name;
//     const age = req.body.age;
//     res.send(`Student Name is: ${name} and Student Age is: ${age}`);         
// });
  
    // for send and receive data from...........
app.get('/register', (req, res) => {  
   res.sendFile(__dirname + '/index.html');      
});

app.post('/register', (req, res) => {  
    const fullName = req.body.fullName;
    const age = req.body.age;
    res.send(`<h1>Your Name Is: ${fullName} <br/> Your Age is: ${age}</h1>`);  
});

app.listen(PORT, ()=>{
    console.log(`Server is running at port http://localhost:${PORT}`);
});