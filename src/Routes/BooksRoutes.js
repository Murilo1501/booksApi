
const express = require('express')
const BookController = require('../Controllers/BookController')
const app = express()
app.use(express.json())

const routes = express.Router()

app.get('/books',BookController.ListBooks)
app.post('/books',BookController.RegisterBook)
app.get('/books/:id',BookController.ShowBook)
app.delete('/books/:id',BookController.DeleteUser)
app.put('/books/:id',BookController.UpdateUser)

module.exports = app
