let fileTypes = {
    media: ["mp4", "mp3", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: [ 'deb', 'exe', 'dmg', 'pkg']
}

let fs = require("fs");
let path = require("path");

function fnOrganise(srcPath) {
    console.log(`organise command executed with path ${srcPath}`);

    // first content is readed then organised_file folder is made ----> why? becoz we need only files to read
    let contentOfSrcPath = fs.readdirSync(srcPath);

    // 1 organised_file directory created
    let organisePath = path.join(srcPath, "Organised_files");
    if(fs.existsSync(organisePath) == false) {
        fs.mkdirSync(organisePath);
    }

    // 2 traverse through content of given path one by one
    for(let i = 0; i < contentOfSrcPath.length; i++) {
        let fileAdded = false;
        let cfilePath = path.join(srcPath, contentOfSrcPath[i]);
        let ext = path.extname(cfilePath);
        ext = ext.slice(1);
       // 3. copy to that folder to which it belongs 
        for(let key in fileTypes) {
            for(let j = 0; j < key.length; j++) {
                if(ext == fileTypes[key][j]) {
                    
                    let cdirPath = path.join(organisePath, key);
                    
                    if(fs.existsSync(cdirPath) == false) {
                        fs.mkdirSync(cdirPath);
                    }
                    let srcFilePath = path.join(srcPath, contentOfSrcPath[i]); // cfilePath is same as srcfilepath
                    let destFilePath = path.join(cdirPath, contentOfSrcPath[i]);
                    fs.copyFileSync(srcFilePath, destFilePath); // copy to new directory
                    fs.unlinkSync(srcFilePath); //delete one copy
                    fileAdded = true; // flag updated
                    break;  
                }
            }
            if(fileAdded == true) { break; }
        }
        // other
            // file copy
        if(fileAdded == false) {
           let othersPath = path.join(organisePath, "others");
           if(fs.existsSync(othersPath) == false) {
               fs.mkdirSync(othersPath);
           }
           let srcFilePath = path.join(srcPath, contentOfSrcPath[i]);
           let destFilePath = path.join(othersPath, contentOfSrcPath[i]);
           fs.copyFileSync(srcFilePath, destFilePath);
           fs.unlinkSync(srcFilePath);
           fileAdded = true;
           

        }

    }

}

// code export 
module.exports = {
    fxnOrganise : fnOrganise
};