BookController = require('../Controllers/BookController')
const express = require('express')
const app = express()
app.use(express.json())

const routes = express.Router()

app.get('/books',BookController.ListBooks)

module.exports = app
