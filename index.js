import express from "express";
import recipeRouter from "./routes/recipes.js";

// Create Express App
const app = express();

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