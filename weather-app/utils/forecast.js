const request = require('postman-request');

const forecast=(latitude,longitude,callback)=>{

const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=' + latitude + ',' + longitude + '&units=f';

request({url:url,json:true},(error,response)=>{

    if(error){
        callback('unable to connect internet',undefined);
    }else if(response.body.error){
        callback('not fetching api',undefined);
    }
    else{
        callback(undefined,response.body.current.weather_descriptions[0] +". current temperature is " + response.body.current.temperature +" but it's feels like ");
    }

})

}

module.exports = forecast;