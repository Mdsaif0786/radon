
let jwt = require("jsonwebtoken")


const validateToken= function ( req, res, next) {
    try{ 
    let token = req.headers["x-Auth-token"];
    if(!token)token =req.headers["x-auth-token"];
    if(!token){
      return res.status(404).send({ status: false, msg: "token must be present"})
    }
    console.log(token);
    let decodedToken = jwt.verify(token, "saif:chandrahi");
    if(!decodedToken){
      return res.status(400).send({status:false, msg:"invalid token"})
    }
   
    
    next()
}
catch(error){
    console.log(error);
    res.status(500).send({status:false, msg:"server error"})
}

}
module.exports.validateToken= validateToken;