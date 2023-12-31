const express =  require('express')
const books  = require('./Models/Book')




const app = express()
app.use(express.json())


array = {
    "id":"1"
}

function searchBook(id){
    return books.findIndex(books =>{
        return books.id === Number(id)
    });
}

app.get('/',(req,res) =>{
    res.status(200).send('curso de node.js')
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





module.exports = app;
