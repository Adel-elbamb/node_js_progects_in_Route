const mysql = require('mysql2')

const connection =  mysql.createConnection({
    user:'root',
    password:'',
    host:'localhost',
    database:'week4'
})

module.exports = connection