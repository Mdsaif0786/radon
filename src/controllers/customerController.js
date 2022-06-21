const customerModel = require("../models/customerModel")
const jwt = require("jsonwebtoken")

let createCustomer = async function(req,res){
    try{

    let data = req.body;
    let savedData = await customerModel.create(data);
    res.status(200).send({msg : savedData, status: true})

    }
    catch(error){
    
        console.log(error);
        res.status(500).send({ "This is the server site error": error})
    }
}
let login = async function(req,res){
    try{
        let user_id = req.body.emailid;
        let password = req.body.password;

        let customer = await customerModel.findOne({emailid:user_id, password:password});
        console.log(customer);
        if(!customer){
            res.status(401).send({status: false, msg: "invalid user_id or password"})
        }
        let token = jwt.sign({
             userId:customer._id.toString(),
            Name : "saif",
        },"saif:chandrahi");
       
        res.status(200).send({status: true, data:token});


        

    }catch(error){
        console.log(error)
        res.status(500).send({"this is the server site error" :error})
    }
}
let getCustomerData = async function(req,res){
    try{
        let userId =req.params.userId;
        let customerDetail = await customerModel.findById(userId);
        if(!customerDetail){  
           return res.status(404).send({status:false, msg:"user not exist"});

        }
        
        res.status(200).send({status: true, data: customerDetail})

    }catch(error){
        console.log(error)
        res.status(500).send({status:false , msg:"server site error"})
    }
}
let updateCustomer = async function(req,res){
    try{
        let userId= req.params.userId;
        let customer = await customerModel.findById(userId);
        if(!customer){
            return res.status(404).send({ status: false, msg: "user not exist"});
        }
        let customerData = req.body;
        let updatedCustomer = await customerModel.findByIdAndUpdate({_id:userId},customerData,{new:true});
        res.status(200).send({status: "updatedData", data: updatedCustomer})
    }
    catch(error){
    
        console.log(error);
        res.status(500).send({status:false, msg: "server error"})
    }
}
let postMessage = async function(req,res){
    try{
        let message = req.body.message;
        let userToBeModified = req.params.userId;
        let token= req.headers["x-Auth-token"];
         if(!token)token =req.headers["x-auth-token"]
        let decodedToken = jwt.verify(token, "saif-chandrahi")
        let logedinUser = decodedToken.userId;
        if(userToBeModified!=logedinUser){
            return res.status(403).send({
                status:false, msg: "loged user is not allowed to post any message to request user data"
            })

            
            
            
        }
        let user = await customerModel.findById(req.params.userId);
        if(!user){
            return res.status(404).send({status:false, msg: "user not exist"});
        }
        let updatedPosts = posts.user;
        updatedPosts.push(message);
        let updateCustomer = await customerModel.findOneAndUpdate({userId:user._id},{posts:updatedPosts},{new:true})
        res.status(200).send({status:true,data:updateCustomer});
    }
    catch(error){
        console.log(error);
        res.status(500).send({status: false, msg: "server error"})
    }
    

}


module.exports.createCustomer = createCustomer;
module.exports.login = login;
module.exports.getCustomerData= getCustomerData;
module.exports.updateCustomer = updateCustomer;
module.exports.postMessage = postMessage;