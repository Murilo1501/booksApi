const connection = require('../config/connectDb')




    function getusers(callback){
        const query = 'SELECT * FROM users'

        connection.query(query,(err,results)=>{
            if(err) {
                callback(err,null)
                return;
            }

            callback(null, results);
    
           
        })
    
    }

    function insertUser(){
        
        return new Promise((resolve,reject)=>{
            const queryInsert = "INSERT INTO users (nome) VALUES ('Murilo')"
            connection.query(queryInsert,(err,result)=>{
                if(err){
                    reject(err)
                    return
                }

                resolve(result)

            })
        })
       
    }

    function showBook(id){
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM users WHERE id = ?';
     
            connection.query(query,[id],(err,result)=>{
                if(err) {
                    reject(err);
                    return;
                }
     
                resolve(result);
            });
        });
    }

    function DeleteUser(id){
        return new Promise((resolve,reject)=>{
            const query = 'DELETE FROM users WHERE id = ?'
            connection.query(query,[id],(err,result)=>{
                if(err){
                    reject(err)
                    return
                }

                resolve(result)
            })
        })
    }

    function UpdateUser(id){
        return new Promise((resolve,reject)=>{
            const query = "UPDATE users SET nome = 'Alice' WHERE id=?"
            connection.query(query,[id],(err,result)=>{
                if(err){
                    reject(err)
                    return
                }

                resolve(result)
            })
        })
    }

    

module.exports = {
    getusers,insertUser,showBook,DeleteUser,UpdateUser
}
   
