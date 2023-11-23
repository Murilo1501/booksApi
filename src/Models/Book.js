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

    

module.exports = {
    getusers
}
   
