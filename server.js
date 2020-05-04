const express = require('express')
const methodOverride = require('method-override')
const recipeRouter = require(`./controller/recipe.js`)
const listRouter = require(`./controller/list.js`)
const typeRouter = require(`./controller/type.js`)
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(methodOverride('_method'))

app.use(express.urlencoded())

// app.get('/', (req, res) => {
//     res.json(`Ok`)
// })

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs')

app.use('/recipe', recipeRouter)

app.use('/list', listRouter)

app.use('/type', typeRouter)



app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})