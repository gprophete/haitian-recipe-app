const mongoose = require(`../db/connection.js`)

const Schema = mongoose.Schema

const recipeSchema = new Schema ({
    name: String,
    time: String,
    ingredients: String,
    prep: String,
    servings: Number

})

const recipeCollection = mongoose.model('recipe', recipeSchema)

//Get all recipes
function getAllRecipe() {
    return recipeCollection.find({})

}
//Get one recipe by ID
function getOneRecipe(id) {
    return recipeCollection.findById(id)
}

//Create recipe
function createRecipe(newRecipe) {
    return recipeCollection.create(newRecipe)
}

//Update recipe
function updateRecipe(id, updatedRecipe) {
    return recipeCollection.findByIdAndUpdate(id, updatedRecipe)

}

//Delete recipe
function deleteRecipe(id) {
    return recipeCollection.findByIdAndDelete(id)
}

module.exports = {
    getAllRecipe,
    getOneRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe,
}