const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
const app = express();


mongoose.connect('mongodb+srv://love:MVfE6vwYHwWzRIJU@cluster0.paolat1.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;
  
db.on('error', (error) => {
    console.error(error);
})
  
db.once('open', () => {
    
    console.log('Connected to MongoDB database');
})



app.use('/',router);


const PORT = 5000;
app.listen(PORT,() => console.log('Server started on port ${PORT}'));