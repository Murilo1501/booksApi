const express = require('express')
const books = require('../Models/Book')

const bodyParser = require('body-parser');


class BookController{

    static async ListBooks (req,res){
        books.getusers((error,results)=>{
            res.status(200).json(results)
        })
    }

    static async RegisterBook (req,res){
        try{
         
            await books.insertUser()
            res.status(200).send('register successfully')
           
        } catch(error){
            res.send('error'+ error)
        }
    }

     static async ShowBook(req,res){
        try{
            const id = req.params.id
            const user = await books.showBook(id)
            console.log(user)
           res.status(200).send(user)
        }catch(error){
            res.send('error')
        }
     }

     static async DeleteUser(req,res){
        try{
            const id = req.params.id
            books.DeleteUser(id)
            res.status(200).send('user deleted')
        } catch(err){
            res.send('error')
        }
       
     }

     static async UpdateUser(req,res){
        try{
            const id = req.params.id
            books.UpdateUser(id)
            res.status(200).send('user updated succesfully')
        }catch(err){
            res.send('error'+ err)
        }
     }
}

module.exports = BookController