import { RecipeModel } from "../models/recipe.js";

export const getRecipes =  async (req, res, next) => {
    try {
        // Get all recipes from database
        const allRecipes = await RecipeModel.find();
        // Return all recipes as response
        res.json(allRecipes);
    } catch (error) {
        next(error)
    }
}

// Post Recipes
export const postRecipes = async (req, res, next) => {
    try {
        // Add recipe to database
        const newRecipe = await RecipeModel.create(req.body);
        // Return response
        res.json("Recipe Added")
    } catch (error) {
        next(error);
    }
}

// Patch Recipe
export const patchRecipe =  (req, res) => {
    res.json(`Recipe with Id ${req.params.id} Updated`);
}



// Delete Recipe
export const deleteRecipe = async (req, res, next) => {
    try {
        // delete recipe by id
        const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
        // return response
        res.json(`Recipe with Id ${req.params.id} Deleted`);
    } catch (error) {
        next (error);
    }
    
        
    }

// Get Recipe
export const getRecipe = (req, res) => {
    res.json(`Recipe with Id ${req.params.id} Added`);
}