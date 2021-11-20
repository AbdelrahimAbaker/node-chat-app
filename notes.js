// console.log('starting notes.js');

const fs = require('fs');

// console.log(module);
let fetchNote = ()=> {
    try {
        let noteString = fs.readFileSync('note-data.json')
        return JSON.parse(noteString); 
    } catch (e) {
        return [];
    }
};

let saveNote = (notes)=> {
    fs.writeFileSync('note-data.json',JSON.stringify(notes));
};

let addNote=  (title,body)=>{
    // console.log('adding Note: ',title,body );
    let notes = fetchNote();

    let note = {
        title,
        body
    };

    let dupleNote = notes.filter( (note) => note.title===title );
    // console.log(dupleNote );

    if (dupleNote.length == 0) {
        notes.push(note);
        saveNote(notes);
        return note ;
    }
};

let getAll=()=>{
return fetchNote();
};

let getNote = (title) =>{
   let notes = fetchNote();
   let filteredNote = notes.filter( (note) => note.title===title );
   return filteredNote[0];

};

let removeNote = (title) =>{
    let notes = fetchNote();
    let filteredNote = notes.filter( (note) => note.title!==title );
    saveNote(filteredNote);
    return notes.length !== filteredNote.length;
};

let logNote = (note) => {
    console.log('-----');  
    console.log("Title: ",note.title ,'\nBody: ',note.body);

};

module.exports={
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}
