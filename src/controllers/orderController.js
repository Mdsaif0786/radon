const orderModel= require("../models/orderModel")


const createOrder= async function (req, res) {
    

    let data= req.body
    let saveData = await orderModel.create(data);
       res.send({msg : saveData});
}
module.exports.createOrder = createOrder;