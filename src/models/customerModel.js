const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({ 

    firstName : String,
    lastName : String,
    fatherName:String,

    mobile: {
        type:String,
        unique: true,
        required:true
    },
    adharNumber: String,
    pancard:String,
    Bank:String,
    AccountNo:{
        type: String,
        category: String,
        unique: true,
        required:true,
    },
    gender:{
        type: String,
        enum: ["male","female","other"]
    },
    age: Number,
    address: String,
    emailid:{
type:String,
unique:true,
required: true
    } ,
    password:{
        type: String,
        unique:true,
        required:true
    },
    posts: {type: [], deafult: []}
},{timestamps:true});



module.exports= mongoose.model("newcustomer", userSchema)

