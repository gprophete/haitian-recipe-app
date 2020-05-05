const express = require(`express`)
const typeModel = require(`../models/type.js`)

const typeRouter = express.Router()

typeRouter.get('/', (req, res) => {
    typeModel.getAllType()
        .then((allType) => {
            res.render("type/allType", {allType})
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
})

typeRouter.get('/new', (req, res) => {
    res.render('type/createType')
})

//Edit Type
typeRouter.get('/:id/edit', (req, res) => {
    typeModel.getOneType(req.params.id)
        .then((oneType) => {
            res.render('type/editType', {oneType})
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
        
})

//Single Type
typeRouter.get('/:id', (req, res) => {
    typeModel.getOneType(req.params.id)
        .then((oneType) => {
            res.render('type/oneType', {oneType})
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
})

typeRouter.post('/', (req, res) => {
    typeModel.createType(req.body)
        .then((newType) => {
            res.redirect(`/recipe/${newType.recipeId}`)
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
})

typeRouter.put('/:id', (req, res) => {
    typeModel.updateType(req.params.id, req.body)
        .then((updatedType) => {
            res.redirect(`/recipe/${updatedType.recipeId}`)
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
})

typeRouter.delete('/:id', (req, res) => {
    typeModel.deleteType(req.params.id)
        .then(() => {
            res.redirect(`/recipe/`)
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
})







module.exports = typeRouter
