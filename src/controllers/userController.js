const UserModel= require("../models/userModel")


const createUser= async function (req, res) {
    let data= req.body
    let val = req.headers.isFreeAppUser
    data.isFreeAppUser =val
    let saveData = await UserModel.create(data);
       res.send({msg : saveData});
}
module.exports.createUser= createUser;




    //let tokenDataInHeaders= req.headers.isFreeAppUser
    //Get all headers from request
   // console.log("Request headers before modificatiom",req.headers)
    //Get a header from request
     //req.headers["isFreeAppUser"]= true
    
    
    
   // console.log(req.headers["content-type"])
   // console.log(tokenDataInHeaders)
    //Set a header in request
    //req.headers['month']='June' //req.headers.month = "June"

    //Set an attribute in request object
    //req.anything = "everything"
    
    
    //console.log("Request headers after modificatiom",req.headers)
    
    //Set a header in response
   // res.header('year','2022')
   // res.send({msg: "Hi"})
 

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }


//module.exports.getUsersData= getUsersData
