const mongoose = require(`../db/connection.js`)

const Schema = mongoose.Schema

const listSchema = new Schema ({
    title: String,
    produce: String,
    animalProtein: String,
    dairy: String,
    misc: String

})

const listCollection = mongoose.model('list', listSchema)

//Get all lists
function getAllList() {
    return listCollection.find({})

}

//Get one list
function getOneList(id) {
    return listCollection.findById(id)
}

//Create list
function createList(newList) {
    return listCollection.create(newList)
}

//Update list
function updateList(id, editList) {
    return listCollection.findByIdAndUpdate(id, editList)
}

//Delete list
function deleteList(id) {
    return listCollection.findByIdAndDelete(id)
}

module.exports = {
    getAllList,
    getOneList,
    createList,
    updateList,
    deleteList,
}