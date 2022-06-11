const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
//const { commonMW} = require('./middlewares/commonMiddlewares.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Mdsaif0786:Mdsaif07860@cluster0.g284j.mongodb.net/saif", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


    const midGlb= function (req, res, next) {
        console.log ("inside GLOBAL MW This is the code by Md saif Raza");
        let date_ob= new Date();
        console.log(date_ob)
        next();
  }
  

app.use(midGlb,route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
