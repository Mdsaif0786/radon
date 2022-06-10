//const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    
    res.send({data: bookCreated})
}


let totalBooksByAuthor =async function (req, res) {
    let totalBooks= await bookModel.aggregate(
        [
            { $group :{ _id:"$author_id",total:{$sum : "$price"}}},
            {$sort:{total:-1}}
        ]
    )
    res.send({msg: totalBooks} )
}

module.exports.createBook= createBook
module.exports.totalBooksByAuthor=totalBooksByAuthor
 //module.exports.getBooksData= getBooksData
//module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails



 /*
const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}*/

