import mysql from 'mysql2'

const connection =  mysql.createConnection({
    user:'root',
    password:'',
    host:'localhost',
    database:'week4'
})

export default connection