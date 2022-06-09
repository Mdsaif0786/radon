//const {cont} = require('mongoose')
const BookModel= require("../models/bookModel")
const authorModel =require("../models/autherModel")



const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}


const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBookByChetanBhagat= async function (req, res) {
    let data= await authorModel.find( {authorName : "chetanBhagat" } ).select("author_id")
    let bookData = await BookModel.find({author_id :data[0].author_id})
    res.send({msg:bookData})
    
}


const getauthorOfBook= async function (req, res) {
    let data = await BookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
     let autherData =await autherModel.find({auther_id:data.auther_id}).select("author_name")
     res.send({msg:autherData,price}) 

}


module.exports.createAuthor=createAuthor
module.exports.createBook= createBook
module.exports.getBookByChetanBhagat=getBookByChetanBhagat
module.exports.getauthorOfBook= getauthorOfBook
