
const Party ={
    name:"Birthday Party",
    Guests:["Siddharth","Rohan","Chaitanya"], 
    printguestList:function(){
        console.log('Today is '+this.name );
        
        this.Guests.forEach((guests)=>{
            console.log(guests+" "+"is coming for"+" "+this.name)
        })

    }
}

Party.printguestList();