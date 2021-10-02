
const { default: chalk } = require('chalk');
const fs =require('fs');
const getnotes = function(){
   return "Your Notes...";
};

const addNote = function(title,body){
      const notes = loadNotes()
      const duplicateNotes = notes.filter(function(note){
         return note.title === title
      })
      if(duplicateNotes.length ===0){
         notes.push({
            title:title,
            body:body
         })
      
   
      saveNotes(notes)
      console.log('New note added')
      }
      else{
         console.log('Note title taken')
      }
}
debugger
const saveNotes = function(notes){
     const dataJSON = JSON.stringify(notes)
     fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = function(){
   try{
      const dataBuffer = fs.readFileSync('notes.json')
   const dataJSON = dataBuffer.toString();
   return JSON.parse(dataJSON)
   }catch(e){
      return [];
   }
   
}

const removeNote = function(title,body){
   const rnotes = rloadNotes();
   const duplicateNotes = rnotes.filter(function(note){
      return note.title !==title
   })
   if(rnotes.length>duplicateNotes.length){
      console.log(chalk.green.inverse0("note get removed"))
      rsaveNotes(rnotes)
   }
   else{
      console.log(chalk.red.inverse("note will not removed"))
   }
}

const rsaveNotes =function(rnotes){
 const removenotesJSON = JSON.stringify(rnotes);
 fs.writeFileSync('notes.json',removenotesJSON)
}

const rloadNotes = function(){
   try{
      dataBuffer = fs.readFileSync('notes.json');
      dataJSON = dataBuffer.toString();
      rdata = JSON.parse(dataJSON);
   }catch(e){
      return[];
   }
  
}

// const listNotes= ()=>{
//    try{dataBuffer=fs.readFileSync('notes.json');
// dataJSON=dataBuffer.toString();
// listdata = JSON.parse(dataJSON)}
// catch(e){
//    return []
// }
// }

module.exports ={
   getnotes : getnotes,
   addNote : addNote,
   removeNote : removeNote,
   //listNotes:listNotes
}

