const express = require(`express`)
const listModel = require(`../models/list.js`)

const listRouter = express.Router()

// //All lists
listRouter.get('/', (req, res) => {
    listModel.getAllList()
        .then((allList) => {
            res.render('list/allList', {allList})
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
})

listRouter.get('/new', (req, res) => {
    res.render('list/createList')
})

//Edit List
listRouter.get('/:id/edit', (req, res) => {
    listModel.getOneList(req.params.id)
        .then((oneList) => {
            res.render('list/editList', {oneList})
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
        
})

//One list
listRouter.get('/:id', (req, res) =>{
    listModel.getOneList(req.params.id) 
        .then((oneList) => {
            res.render('list/oneList', {oneList})
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
})

//Create list
listRouter.post('/', (req, res) =>{
    listModel.createList(req.body)
        .then((oneList) => {
            res.redirect(`list/${oneList._id}`)
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
})

//Update list
listRouter.put('/:id', (req, res) =>{
    listModel.updateList(req.params.id, req.body)
        .then(() =>{
            res.redirect(`/list/${req.params.id}`)
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
})


// Delete list
listRouter.delete('/:id', (req, res) =>{
    listModel.deleteList(req.params.id)
        .then(() =>{
            res.redirect(`/recipe`)
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
})




module.exports = listRouter