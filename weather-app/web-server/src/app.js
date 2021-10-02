const express = require('express');
const path = require('path');
const { title } = require('process');
const app = express();
const hbs = require('hbs');
//const { require } = require('yargs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const request = require('postman-request');
const { callbackify } = require('util');
const { URL } = require('url');
const { response } = require('express');
// console.log(__dirname);
// console.log(__filename);

//const publicDirectory = path.join(__dirname,'../public');
//app.use(express.static(publicDirectory));

const partialpath = path.join(__dirname,"../templates/partials");
hbs.registerPartials(partialpath);
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'../templates/views'));
app.use(express.static(partialpath))



app.get('',(req,res)=>{
    res.render('index',{
        title : 'Weather',
        name:'Siddharth Dhumal'
    });
});

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about ',
        name: 'Siddharth'
    });
});

app.get('/products',(req,res)=>{
    if(!req.query.search){
     return res.send({
         error: "Please provide proper data"
     })
    }
     console.log(req.query.search);
     res.send({
         products : []
     })
});

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"please provide address"
        })
    }
    
geocode(req.query.address,(error,{lattitude,longitude,location}={})=>{
    if(error){
        return res.send({error});
    }
    forecast(lattitude,longitude,(error,forecastData)=>{
        if(error){
            return res.send({error});
        }
        res.send({
            lattitude,
            longitude,
            address:req.query.address,
            location,
            forecastData
        })
    })

})

})



app.get('/help',(req,res)=>{
   res.render('help',{ 
       message:'Give me my golden days back',
       name : 'NPK',
       title:"Help"
});
});

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Siddharth',
        errorMessage:'page not found'
    })
 });

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Siddharth',
        errorMessage:'page not found'
    })
});



// app.get("",(req,res)=>{
//    res.send('<h1>home page</h1>');
// })

// app.get("/about",(req,res)=>{
//     res.send("<h1>about page</h1>");
// })

// app.get("/help",(req,res)=>{
//     res.send([{
//         name:"Siddharth"
//     },{
//         Age:24
//     }]);
// })

// app.get("/weather",(req,res)=>{
//     res.send({
//          forecast :50,
//          location:"Kolhapur"
//     });
// })

app.listen(3000,()=>{
    console.log("listening at 3000 port");
})


