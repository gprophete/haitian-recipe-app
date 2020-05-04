const express = require(`express`)
const recipeModel = require(`../models/recipe.js`)
const listModel = require(`../models/list.js`)
const typeModel = require(`../models/type.js`)
const recipeRouter = express.Router()

//All recipes
recipeRouter.get('/', (req, res) => {
    recipeModel.getAllRecipe()
        .then((allRecipe) => {
            res.render(`recipe/allRecipe`, { allRecipe })
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
})

recipeRouter.get('/new', (req, res) => {
    res.render(`recipe/createRecipe`)
})

recipeRouter.get('/:id/edit', (req, res) => {
    recipeModel.getOneRecipe(req.params.id)
        .then((oneRecipe) => {
            res.render(`recipe/editRecipe`, { oneRecipe })
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })

})

//One recipe + list + Type
recipeRouter.get('/:id', async (req, res) => {
    try {
        const oneRecipe = await recipeModel.getOneRecipe(req.params.id)
        const list = await listModel.getAllListByRecipeId(req.params.id)
        const type = await typeModel.getAllTypeByRecipeId(req.params.id)
        res.render('recipe/oneRecipe', { oneRecipe, list, type })
    } catch (error) {
        res.json('error')
        console.log(error)
    }
})


    //Create recipe
    recipeRouter.post('/', (req, res) => {
        recipeModel.createRecipe(req.body)
            .then((createRecipe) => {
                res.redirect(`recipe/${createRecipe._id}`)
            })
            .catch((error) => {
                res.json('error')
                console.log(error)
            })
    })

    //Update Recipe
    recipeRouter.put('/:id', (req, res) => {
        recipeModel.updateRecipe(req.params.id, req.body)
            .then(() => {
                res.redirect(`/recipe/${req.params.id}`)
            })
            .catch((error) => {
                res.json('error')
                console.log(error)
            })
    })

    //Delete Recipe
    recipeRouter.delete('/:id', (req, res) => {
        recipeModel.deleteRecipe(req.params.id)
            .then(() => {
                res.redirect('/recipe')
            })
            .catch((error) => {
                res.json('error')
                console.log(error)
            })
    })





    module.exports = recipeRouter