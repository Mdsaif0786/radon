const jwt = require("jsonwebtoken");


const mid1 = async  function(req, res, next) {
    
    
    let token = req.headers["x-auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  console.log("hello")
    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    console.log(token);

    next()
}


const mid2 = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let token = req.headers["x-auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
   // if (!token) return res.send({ status: false, msg: "token must be present" });
  
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
   
    next()
}
module.exports.mid1 = mid1;
module.exports.mid2 = mid2;