const rsa = require('node-rsa');
const fs = require('fs');

function GeneratePair(){
    const key = new rsa().generateKeyPair();

    const publicKey = key.exportKey("public");

    const privateKey = key.exportKey("private");

    fs.openSync("./Keys/User1/public.key", "w")
    fs.writeFileSync("./Keys/User1/public.key", publicKey, "utf8")

    fs.openSync("./Keys/User1/private.key", "w")
    fs.writeFileSync("./Keys/User1/private.key", privateKey, "utf8")

    console.log("Key generated sucessfully")
}

GeneratePair();