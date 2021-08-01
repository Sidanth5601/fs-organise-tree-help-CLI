
function fnHelp() {
    console.log(`1. node main.js tree "path" \n2. node main.js organise "path" \n3. node main.js help" `);
}

// code export 
module.exports = {
    fxnHelp : fnHelp // PASS ONLY Function name fnHelp != fnHelp()
};