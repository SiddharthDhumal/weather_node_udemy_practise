const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

console.log('Client Side Javascript is loaded');

fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json({}).then((data)=>{
        console.log(data)
    })
})


fetch('http://localhost:3000/weather?address='+location).then((data)=>{
    response.json({}).then((data)=>{
        if(data.error){
            messageOne.textContent = data.error;
        }
        else{
        messageOne.textContent=data.location;
        messageTwo.textContent=data.forecastData;
        }
    })
})



const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
//messageOne.textContent = 'from Javascript';

weatherform.addEventListener('submit',(event)=>{
    
    event.preventDefault()
    const location = search.value;

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    console.log(location);
})