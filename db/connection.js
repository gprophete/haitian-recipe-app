const mongoose = require ('mongoose')

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/haitian-recipe-app";

mongoose.connect(connectionString)
    .then(() => {
        console.log(`Connected to mongo successfully`)
    })
    .catch((error) => {
        console.log(`Failed to connect to mongo`)
        console.log(`error`)
    })

module.exports = mongoose