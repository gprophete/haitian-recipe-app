const mongoose = require(`../db/connection.js`)

const Schema = mongoose.Schema

const listSchema = new Schema ({
    name: String,
    amount: String,
    produce: Boolean,
    animalProtein: Boolean,
    dairy: Boolean

})

const listCollection = mongoose.model('list', listSchema)

//Get all lists
function getAllList() {
    return listCollection.find({})

}

//Get one list
function getOneList(id) {
    return listCollection.findById()
}

//Create list
function createList(newList) {
    return listCollection.create(newList)
}

//Update list
function updateList(id, updatedList) {
    return listCollection.findByIdAndUpdate(id, updatedList)
}

//Delete list
function deleteList(id) {
    return listCollection.findOneAndDelete(id)
}

module.exports = {
    getAllList,
    getOneList,
    createList,
    updateList,
    deleteList,
}
