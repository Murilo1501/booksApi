const express = require('express')
const books = require('../Models/Book')

class BookController{

    static async ListBooks (req,res){
        books.getusers((error,results)=>{
            res.status(200).json(results)
        })
    }
}

module.exports = BookController