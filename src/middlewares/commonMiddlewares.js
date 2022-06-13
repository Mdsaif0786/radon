const middleware = require("../controllers/userController")

const mid1 = function (req, res, next) {
    let value = req.headers.isFreeAppUser
    console.log(value)
    if (value == undefined) 
        next()
     else {
        res.send({masg :"the request is missing a mandatory header"})
    }

}


const mid2 = function (req, res, next) {
    let value = req.headers.isFreeAppUser
    console.log(value)
    if (value == undefined) 
        next()
     else {
        res.send({masg :"the request is missing a mandatory header"})
    }

}

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

module.exports.mid1 = mid1
module.exports.mid2= mid2
//module.exports.mid3= mid3
//module.exports.mid4= mid4
