const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    BookName: String,
    AutherName: String,
    category: {
        type :String,
             enum : ["classic", "Horror","Fintasy","Litteral Fiction"],
               
    
    },
    
    year: {
        type: Number,
        
    },
}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema) //users



// String, Number
// Boolean, Object/json, array