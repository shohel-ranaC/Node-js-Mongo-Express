const express = require('express');
const chalk = require('chalk');
// const morgan = require('morgan'); ----> http request check kore
// chalk ---> console a color kore

const app = express();
// app.use(morgan("dev"));

app.get('/products', (req, res) => {
    res.send("list all the products");
});

// app.post('/products', (req, res) => {
//     res.status(2001).send("Create a product");
// });

app.listen(3000, () =>{
    console.log(chalk.yellow(`Server is running at  http://localhost:3000`));
 });