const express = require("express");

const app = express();
const mainRouter = require('./app/routes');

const connection = require('./app/model/index');
const cors = require('cors');

app.use(express.json()); // supaya express bisa response json
app.use(express.urlencoded({ extended: false })); // supaya express bisa menerima body

app.use(cors());
// http router
app.use("/", mainRouter);
const port = 3000;
app.listen(port, function(){
    console.log(`Server running on port ${port}...`)
    connection.authenticate()
        .then(function(){
            console.log("Datbase connected")
        })
        .catch(function(err){
            console.log(`Error koneksi database: ${err}`);
        })
})


// API 
//1. GET List Provinsi beserta ibukota
//2. POST Add provinsi
