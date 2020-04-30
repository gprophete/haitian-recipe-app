const express = require(`express`)
const listModel = require(`../models/list.js`)

const listRouter = express.Router()

// //All lists
listRouter.get('/', (req, res) => {
    listModel.getAllList()
        .then((allList) => {
            res.json(allList)
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
            res.json(oneList)
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
})

//Create list
listRouter.post('/', (req, res) =>{
    listModel.createList(req.body)
        .then((newList) => {
            res.json(newList)
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
})

//Update list
listRouter.put('/:id', (req, res) =>{
    listModel.updateList(req.params.id, req.body)
        .then((updatedList) =>{
            res.json('updated')
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
            res.json('deleted')
        })
        .catch((error) => {
            res.json('error')
            console.log(error)
        })
})

module.exports = listRouter