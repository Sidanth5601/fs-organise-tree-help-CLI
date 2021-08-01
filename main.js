/** 
 * @file main.js
 * @brief : Activity of tree, organise, help commands
 * 
 * 
 * 
*/
// main input
// input -> node main.js tree "path"
// print -> tree command executed with path ""

// input -> node main.js organize "path"
// print -> organize command executed with path ""

// input -> node main.js help "path"
// print -> list of all the commands
            // 1. node main.js help
            // 2. node main.js organize
            // 3. node main.js tree





// imported file's from command directory
let treeObj = require("./command/tree");
let organiseObj = require("./command/organise");
let helpObj = require("./command/help");

let organiseSirObj = require("./command/organiseSir");

// input taken
let inputArr = process.argv.slice(2);
let cmd = inputArr[0];
let inputpath = inputArr[1];



// Solution:

// Using if-else

// if(cmd == "help") {
//     helpObj.fxnHelp();
// }
// else if (cmd == "organise") {
//     organiseObj.fxnOrganise(path);
// }
// else if(cmd == "tree") {
//     treeObj.fxnTree(path);
// }

// Using switch
switch(cmd) {
    case "tree" : 
    if(inputpath === undefined) { // no path given then do tree command on cwd
        treeObj.fxnTree(process.cwd());
    }
    else treeObj.fxnTree(inputpath);
    break;

    case "organise" : organiseObj.fxnOrganise(inputpath);
    break;
    case "organiseSir" : organiseSirObj.fxnOrganise(inputpath);
    break; 
    
    case "help" : helpObj.fxnHelp(  );
    break;

    default : console.log("Invalid Command");
    break;
}
