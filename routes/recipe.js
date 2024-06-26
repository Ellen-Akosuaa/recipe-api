import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";

// Create Router
const recipeRouter = Router();

//Define routes 

recipeRouter.get('/recipes', (req, res) => {
    res.json('All Recipes');
});

recipeRouter.post('/recipes', async (req, res) => {
    // Add recipe to database
    await RecipeModel.create(req.body);
    // Return response
    res.json("Recipe Added")
});

recipeRouter.patch('/recipes/:id', (req, res) => {
    res.json(`Recipe with Id ${req.params.id} Updated`);
});

recipeRouter.delete('/recipes/:id', (req, res) => {
    res.json(`Recipe with Id ${req.params.id} Deleted`);
});

recipeRouter.get('/recipes/:id', (req, res) => {
    res.json(`Recipe with Id ${req.params.id} Added`);
});

// Export router
export default recipeRouter;