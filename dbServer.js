const express = require("express")
const app= express()
const mysql = require("mysql")

const db = mysql.createPool({
    connectionLimit: 100, 
    host: "127.0.0.1", 
    user: "newuser", 
    password: "password1#",
    database: "kb954_project", 
    port: "3306"
})

db.getConnection ((err, connection)=> {
if (err) throw (err) 
    console.log ('DB connected sucessful:'+ connection.threadId)

})

