const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

      userId :{
         type : String
       
     },
    productId: {
        type :String
        
    },
    amount: Number,
    isFreeAppUser: {
        type: Boolean,
        default:false
    },
    
    date : String


},{timestamps : true})

module.exports = mongoose.model('order', orderSchema)