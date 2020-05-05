const mongoose = require(`../db/connection.js`)

const Schema = mongoose.Schema

const listSchema = new Schema({
    // parentId: mongoose.Types.ObjectId,
    parentId: {
        type: String,
        required: true,
    },
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

//Get list by parentId
function getAllListByParentId(parentId) {
    return listCollection.find({ parentId: parentId })
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
    getAllListByParentId,
    createList,
    updateList,
    deleteList,
}
