const rsa = require('node-rsa');
const fs = require('fs');

const publicKey = new rsa();

const  public = fs.readFileSync("./Keys/User1/public.key", "utf8");

publicKey.importKey(public);

function EncryptData(){
    const healthData = fs.readFileSync("./Data/User1.json");

    const encrypted = publicKey.encrypt(healthData, "base64")
    
    fs.openSync("./Encrypted-Data/User1", "w")
    fs.writeFileSync("./Encrypted-Data/User1", encrypted, "utf8")

    console.log("Data encrypted", encrypted);
    console.log("Data-Encrypted Successfully");
}

EncryptData();