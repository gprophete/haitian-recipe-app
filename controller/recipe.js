const express = require(`express`)
const recipeModel = require(`../models/recipe.js`)

const recipeRouter = express.Router()

//All recipes
recipeRouter.get('/', (req, res) => {
    recipeModel.getAllRecipe()
        .then((allRecipe) => {
            res.json(allRecipe)
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
})

//One recipe
recipeRouter.get('/:id', (req, res) => {
    recipeModel.getOneRecipe(req.params.id)
        .then((oneRecipe) => {
            res.json(oneRecipe)
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
})

//Create recipe
recipeRouter.post('/', (req, res) => {
    recipeModel.createRecipe(req.body)
        .then((newRecipe) => {
            res.json(newRecipe)
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
})

//Update Recipe
recipeRouter.put('/:id', (req, res) => {
    recipeModel.updateRecipe(req.params.id, req.body)
        .then((updatedRecipe) => {
            res.json('updatedRecipe')
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
})

//Delete Recipe
recipeRouter.delete('/:id', (req, res) => {
    recipeModel.deleteRecipe()
        .then(() => {
            res.json('deleted')
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
})
module.exports = recipeRouter