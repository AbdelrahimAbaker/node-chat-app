/* var obj = {
    name:'Abdu'
};
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);
*/
    // ---------------------------------------------//
/*
var personString = '{"name":"Abdu","age":25}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
*/

const fs = require('fs') ;

var originalNote = {
    title:' secret',
    body:'Some  secret.....',
    awa:'dddddd'
}
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('note.json',originalNoteString);

var noteString = fs.readFileSync('note.json');
var note =  JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);