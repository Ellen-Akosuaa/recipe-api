import express from "express";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category.js";

// connect to database
await mongoose.connect(process.env.MONGO_URL)
    
// Create Express App
const app = express();
expressOasGenerator.handleResponses(app, {
    tags: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),
});


// Apply middlewares
app.use(express.json());

// Use Routes
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));

// listen for incoming requests
const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`App listening on port ${port}`);
});
