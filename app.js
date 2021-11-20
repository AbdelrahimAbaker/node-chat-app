//  console.log('starting app.js ');

//=============== Node modules / Core ==========================
 const fs = require('fs');
//  const os = require('os');

//=========== Third party modules ===============================
const _ = require('lodash');
const yargs = require('yargs');

//============= My file =========================================
 const nots = require('./notes');

// ============ App codes =======================================

const argv = yargs.argv;
// let command = process.argv[2];
let command = argv._ [0];

// console.log('command: '+command);
// console.log('process:', process.argv);
// console.log('yargs:', argv);

if (command==='add') {
   let note = nots.addNote(argv.title,argv.body);
   if (note) {
        console.log('Note created');  
        nots.logNote (note) ;

      }else{
       console.log('Note title alredy exist!');
   }
}else if (command==='list') {
   var allNotes = nots.getAll();
   console.log(`Printing ${allNotes.length} note(s).`)
   allNotes.forEach( (note) => nots.logNote(note) );

}else if (command==='read') {
    let note = nots.getNote(argv.title);
    if (note) {
        console.log('Note found:');  
        // console.log(note);  
        nots.logNote (note) ;
      }else{
       console.log('Note not found!');
   }
}else if (command==='remove') {
   let noteRemoved = nots.removeNote(argv.title);
   let message = noteRemoved? "Note was removed" : "not removed";
   console.log(message);

}else{
    console.log('The command not recognized');
}





// ==============================================================
// console.log(_.isString(true));
// console.log(_.isString('waw'));
// console.log(_.uniq([1,2,2,3,4,4,1]));
//  let res = nots.add(6,8);

//  let user = os.userInfo();

//  console.log(res);
// fs.appendFileSync ('greating.txt','\n hello '+user.username+'! you are: '+nots.age);
// // fs.appendFileSync ('greating.txt',' hello ${user.username} ! ');
 