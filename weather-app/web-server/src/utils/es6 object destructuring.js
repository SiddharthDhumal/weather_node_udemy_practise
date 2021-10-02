
//  const name ="Siddharth"
//  const userAge = "23"

// const  user ={
  
//     name,
//     age:userAge,
//     location:"Kolhapur"
// }

// console.log(user);

const product = {
    label : 'red notebook',
    price:3,
    stock:201,
    salesprice:undefined,
    rating:4.2
}

// const {label:productLabel,stock,rating=5}=product

// //console.log(label);
// console.log(stock);
// console.log(rating);
// console.log(productLabel);

const transaction=(type,{label,stock = 0}={})=>{
    console.log(type,label,stock);
}

transaction('order',product);