const mongoose = require('mongoose');

const connection = mongoose.createConnection(`mongodb+srv://masa:masa2001@cluster0.nnfi8te.mongodb.net/JobApp`).on('open',()=>{console.log("MongoDB Connected");}).on('error',()=>{
    console.log("MongoDB Connection error");
});

module.exports = connection;