const mysql = require('mysql')
require('dotenv/config')

const connection = mysql.createConnection({
    host: process.env.DB_SERVER,
    user: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: 'mvc'
  });

  

module.exports = connection;


