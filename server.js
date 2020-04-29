const express = require('express')
const recipeRouter = require(`./controller/recipe.js`)

const app = express()

const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.json('Recipes')
})

app.use('/recipe', recipeRouter)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})