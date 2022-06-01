const express = require('express');
const externalModule = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    res.send('My first ever api!')
});

router.get('/test-me1', function(req, res) {
    res.send('Welcome to myapplication.I am MD SAIF RAZA and a part of FunctionUp Radon cohort!')
});
