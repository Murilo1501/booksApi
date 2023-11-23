const express =  require('express')
const connection = require('./config/connectDb')


  connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
  
    console.log('Resultados da consulta:', results);
  });


const app = express()
app.use(express.json())

const books = [
    {
        id:1,
        title:"Vikings"
    },

    {
        id:2,
        title:"Percy Jackson"
    }
   
]

function searchBook(id){
    return books.findIndex(books =>{
        return books.id === Number(id)
    });
}

app.get('/',(req,res) =>{
    res.status(200).send('curso de node.js')
})

app.get('/books',(req,res)=>{
    res.status(200).json(books)
})

app.post('/books',(req,res) => {
    books.push(req.body)
    res.status(201).send('Created register')
})

app.get("/books/:id",(req,res) => {
    const index = searchBook(req.params.id)
    res.status(200).json(books[index])
})

app.put("/books/:id", (req,res) => {
    const index = searchBook(req.params.id)
    books[index].title = req.body.title
    res.status(200).json(books)
})

app.delete("/books/:id",(req,res) => {
    const index = searchBook(req.params.id)
    books.splice(index,1)
    res.status(200).json(books)
})



module.exports = app;
