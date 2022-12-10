const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// data received from post request
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// DATABASE -> Collection/Table -> Document/Row 
// Create Products Schema
const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
// Create Product Model or table/collection
const Product = mongoose.model("Products", productsSchema);


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testProductDB');
        console.log("db is connected");
    } catch (error) {
        console.log("db is not connected");
        console.log(error.message);
        process.exit(1);
    }
};


app.get("/", (req, res) => {
    res.send("Welcome to My Home Page");
});

// CRUD -> Create, Read, Update, Delete
app.post("/products", async (req, res) => {
    try { 
        // POST: /products -> create a product 
        //=> save database from request body for single-document
        const newProduct = new Product({
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
        });
        const productData = await newProduct.save();
        res.status(201).send(productData);

    } catch (error) {
        res.status(500).send({message: error.message});
    }
});

// GET: /products -> Return all the products
// Read data from mongoDB database
app.get("/products", async (req, res) => {
    try {
       const products = await Product.find();
       if(products){
        res.status(200).send({
            success: true,
            message: "return all product",
            data: products,
        });
       } else {
        res.status(404).send({
            success: false,
            message: "Products not found",
         });
       }
    } catch (error) {
        res.status(404).send({ message: "Product not found" });
    }
});

// GET: /products/:id -> Return a specific product
app.get("/products/:id", async (req, res) => {
    try {
        const id = req.params.id;
       const product = await Product.findOne({ _id: id });
       if(product){
        res.status(200).send({
            success: true,
            message: "return single product",
            data: product,
        });
       } else {
        res.status(404).send({
            success: false,
            message: "Product not found",
         });
       }
    } catch (error) {
        res.status(500).send({message: error.message});
    }
});

// DELETE: /products/:id -> Delete a product Based on id
app.delete("/products/:id", async (req, res) => {
   try {
    const id = req.params.id;
    const product = await Product.deleteOne({_id: id});
    if (product) {
        res.status(200).send({
            success: true,
            message: " Single Product deleted successfully",
            data: product,
        });
    } else {
        res.status(404).send({
            success: false,
            message: "Product was not deleted with this id",
        });
    };
   } catch (error) {
    res.status(500).send({message: error.message});
   }
});

// PUT: /products/:id -> Update a product based on id
app.put("/products/:id", async (req, res) => {
    try {
     const id = req.params.id;
     const updateProduct = await Product.findByIdAndUpdate(
        {_id: id},
        {
            $set: {
                title: req.body.title,
                price: req.body.price,
                description: req.body.description,
            },
        },
        // receive update data Immediately
        {new: true}
        );
     if (updateProduct) {
         res.status(200).send({
             success: true,
             message: " updated single product successfully",
             data: updateProduct,
         });
     } else {
         res.status(404).send({
             success: false,
             message: "Product was not updated with this id",
         });
     };
    } catch (error) {
     res.status(500).send({message: error.message});
    }
 });
 


app.listen(PORT, async ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    await connectDB();
});

// POST: /products -> create a product
// GET: /products -> Return all the products
// GET: /products/:id -> Return a specific product
// PUT: /products/:id -> Update a product based on id
// DELETE: /products/:id -> Delete a product Based on id
