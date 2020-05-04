const mongoose = require(`../db/connection.js`)

const Schema = mongoose.Schema

const listSchema = new Schema ({
    // recipeId: mongoose.Types.ObjectId,
    recipeId:{ 
        type : String,
        required : true,
    } ,
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

//Get list by recipeId
function getAllListByRecipeId(recipeId) {
    return listCollection.findById({recipeId: recipeId})
}

//Create list
function createList() {
    return listCollection.create()
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
    getAllListByRecipeId,
    createList,
    updateList,
    deleteList,
}
