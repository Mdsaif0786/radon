const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModule.js")
const bookController= require("../controllers/bookControler")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", bookController.createBook  )

router.get("/getBookData", bookController.getBookData)

module.exports = router;