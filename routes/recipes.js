import { Router } from "express";

// Create Router
const recipeRouter = Router();

//Define routes 
recipeRouter.get('/recipes', (req, res) => {
    res.json('All Recipes');
});

recipeRouter.post('/recipes', (req, res) => {
    res.json('Recipe Added')
});

recipeRouter.patch('/recipes/:id', (req, res) => {
    res.json(`Recipe with Id ${req.params.id} Updated`);
});

recipeRouter.delete('/recipes/:id', (req, res) => {
    res.json(`Recipe with Id ${req.params.id} Deleted`);
});

// Export router
export default recipeRouter;