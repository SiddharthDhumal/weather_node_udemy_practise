setTimeout(()=>{
    console.log("Wait for two seconds")
},2000);

const geocode = (address,callback)=>{
    setTimeout(()=>{
        data ={
            longitude:0,
            lattitude:0
        }
        callback(data);
    },2000);
    
};

geocode('philadelphia',(data)=>{
    console.log(data);
});
const a=0;
const b=0;
const add = (a,b,sum)=>{
    setTimeout(()=>{
          sum(a+b);
    },2000)
};

add(1,4,(sum)=>{
    console.log(sum);
});
