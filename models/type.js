const mongoose = require(`../db/connection.js`)

const Schema = mongoose.Schema

const typeSchema = new Schema ({
    mealType: String,
    cookingType: String,
    dietType: String,
})

const typeCollection = mongoose.model('type', typeSchema)

//Get all types
function getAllType() {
    return typeCollection.find({})
}

//Get one type
function getOneType(id) {
    return typeCollection.findById(id)
}

//Create one type
function createType(newType) {
    return typeCollection.create(newType)
}

//Update type
function updateType(id, updatedType) {
    return typeCollection.findByIdAndUpdate(id, updatedType)
}

//Delete type
function deleteType(id) {
    return typeCollection.findByIdAndDelete(id)
}

module.exports = {
    getAllType,
    getOneType,
    createType,
    updateType,
    deleteType,
}