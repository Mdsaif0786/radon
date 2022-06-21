let axios = require("axios");

let wetherOfLandon =  async function(req ,res){
    try{
        
        let options= {
            method : "get",
            
           url :`http://api.openweathermap.org/data/2.5/weather?q=delhi&appid=994392c8dfd76716dc76908b73b6f74a`,
        
    
        }
        let result = await axios(options);
        console.log(result);
        let data = result.data;
        res.status(200).send({msg : data, status:true})
    }
    catch(error){
        console.log(error);
    
        res.status(500).send({msg : error.message})

    }
}

let getSortedCities = async function(req,res){
    try{
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
        let citiesObjArray = [];
        for(let i=0;i<cities.length;i++){
            let obj = {city:cities[i]};
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=994392c8dfd76716dc76908b73b6f74a`)
            console.log(resp.data.main.temp)
            obj.temp = resp.data.main.temp
            citiesObjArray.push(obj)

        }
        let sorted = citiesObjArray.sort(function(a,b){return a.temp-b.temp})
            console.log(sorted);
        res.status(200).send({status: true, data:sorted})
    } catch(error){
        console.log(error);
        res.status(500).send({msg : error.message})

        
    }
}

// let memeHandler = async function (req,res){
//     try{
//         let options {
//             method = "post",
//             url :https://api.imgflip.com/caption_image
//         }
//     }
// }

module.exports.wetherOfLandon = wetherOfLandon;
module.exports.getSortedCities = getSortedCities