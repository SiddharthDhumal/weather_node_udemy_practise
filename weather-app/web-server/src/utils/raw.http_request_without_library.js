
const http = require('http');

//const url= 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=45,-75&units=f';
const url ='http://api.weatherstack.com/current?access_key=3e44e5eedd7d95823ce19d7ebbc1a951&query=37.8267,-122.4233';

const request =http.request(url,(response)=>{
   let data='';
    response.on(data,(chunk)=>{
        const data = data + chunk.toString();
    })
    response.on('end',()=>{
        const body = JSON.parse(data);
        console.log(body);

    })

    response.on('error',(error)=>{
        console.log('An error',error)
    })
})

request.end();