let fs = require("fs");
let path = require("path");

let asf = "";

function fnTree(startPath) {
    console.log(`tree command executed with path ${startPath}`);

    asf += `|\n__ ${startPath}\n\t`;

    let stats = fs.lstatSync(startPath);
    if(stats.isDirectory() == true) {
        let contentOfStartPath = fs.readdirSync(startPath);
        for(let i = 0; i < contentOfStartPath; i++) {
    
            let contentPath = path.join(startPath, contentOfStartPath[i]);
            let stats = fs.lstatSync(startPath);
            if(stats.isDirectory() == true) {
                fnTree(contentPath);
            }
            else if (stats.isFile() == true) {
                asf += `|--\n ${contentOfStartPath}`;
            }
        }

    }

console.log(asf);
}

console.log(asf);

// code export 
module.exports = {
    fxnTree : fnTree
};