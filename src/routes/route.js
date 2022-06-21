const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const wetherController = require("../controllers/wetherController")
const customerController = require("../controllers/customerController")
const auth = require("../middlewares/auth.js")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createCustomer", customerController.createCustomer);
router.post("/login",customerController.login)
router.get("/getCustomerData/:userId",auth.validateToken,customerController.getCustomerData)
router.post("/updateCustomer/:userId",auth.validateToken,customerController.updateCustomer)
router.post("/postMessage/:userId",auth.validateToken,customerController.postMessage)
router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/findByDistrict",CowinController.findByDistrict)
router.get("/getWitherOfLandon", wetherController.wetherOfLandon)
router.get("/getSortedCities", wetherController.getSortedCities)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;