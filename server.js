const express = require('express')
const methodOverride = require('method-override')
const recipeRouter = require(`./controller/recipe.js`)

const app = express()

const port = 3000

app.use(express.json())
app.use(methodOverride('_method'))

app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.json('Recipes')
})

app.set('view engine', 'hbs')

app.use('/recipe', recipeRouter)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})