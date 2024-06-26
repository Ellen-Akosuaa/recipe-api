import express from "express";
import mongoose from "mongoose"
import recipeRouter from "./routes/recipe.js";

// connect to database
await mongoose.connect(process.env.MONGO_URL)
    
// Create Express App
const app = express();

// Apply middlewares
app.use(express.json());

// Define Routes
app.get('/', (req, res) => {
    res.json('Welcome Home');
});

app.post('/login', (req, res) => {
    res.json('Login Successful');
});

app.delete('/product', (req, res) => {
    res.json('Product Deleted');
});

app.patch('/list', (req, res) => {
    res.json('List Updated');
});

// Use Routes
app.use(recipeRouter);

// listen for incoming requests
app.listen(3000, () => {
    console.log('App listening on port 3000');
});

// 34jSYgTdVPkoly6U