const request = require('postman-request');

const geocode =(address,callback)=>{

const URL ="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1Ijoic2lkZGhhcnRoOTgiLCJhIjoiY2t0c3Q1anViMWpleDJvbXBwdmtlYnBteSJ9.LjNZbOKBwgSBht5SOmnpXg&limit=1"

 request({url : URL,json:true},(error,response)=>{
    if(error){
        callback("Unable to connect with internet",undefined);
    }else if((response.body.features.length)===0){
        callback("data is not fetching",undefined);
    }else{
        callback(undefined,{
          lattitude:response.body.features[0].center[0],
         longitude: response.body.features[0].center[1],
          location: response.body.features[0].place_name 
        })
    }
})

}

 module.exports= geocode;