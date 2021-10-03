const request = require('postman-request');
const geocode = require('../../../utils/geocode');
const forecast = require('../../../utils/forecast');
// const url = "http://api.weatherstack.com/current?access_key=3e44e5eedd7d95823ce19d7ebbc1a951&query=37.8267,-122.4233&units=f";

// request({url:url, json:true},(error,response)=>{
//    if(error){
//       console.log("unable to connect")
//    }else if(response.body.error){
//       console.log('Something is wrong in input api');
//    }else{
//      const  current_temperature= response.body.current.temperature; 
//     const feelslike_temperature= response.body.current.feelslike;
//    const weather_description = response.body.current.weather_descriptions[0];
// console.log( response.body.current.weather_descriptions[0] +". current temperature is " + response.body.current.temperature +" but it's feels like "+ response.body.current.feelslike);
// }
// });


// const geocode='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2lkZGhhcnRoOTgiLCJhIjoiY2t0c3Q1anViMWpleDJvbXBwdmtlYnBteSJ9.LjNZbOKBwgSBht5SOmnpXg';

// request({url:geocode,json:true},(error,response)=>{
//    if(error){
//       console.log("unable to connect to location services");
//    }else if((response.body.features.length)===0){
//       console.log("wrong api fetched");
//    }else{
//    console.log(`lattitude is ${response.body.features[0].center[0]}`);
//    console.log(`longitude is ${response.body.features[0].center[1]}`);
//    }
// });

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


const address = process.argv[2];
if(!address){
  console.log("Please provide address")
}else{
   
  geocode("kolhapur",(error,data)=>{
    if(error){
     return  console.log(error)
    }
 
    forecast(data.lattitude, data.longittude, (error, forecastData) => {
 
     if(error){
       return console.log(error)
     }
     console.log(data.location);
     console.log(forecastData)
   })
  
 });
 
}


