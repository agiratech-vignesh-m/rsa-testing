const rsa = require('node-rsa');
const fs = require('fs');

const privateKey = new rsa();

const  private = fs.readFileSync("./Keys/User1/private.key", "utf8");

privateKey.importKey(private);

function DecryptData(){
    const healthData = fs.readFileSync("./Encrypted-Data/User1", "utf8");
    // console.log("Data", healthData);

    const decrypted = privateKey.decrypt(healthData, "utf8")
    
    fs.openSync("./Decrypted-Data/User1", "w")
    fs.writeFileSync("./Decrypted-Data/User1", decrypted, "utf8")

    console.log("Data decrypted", decrypted);
    console.log("Data-Decrypted Successfully");
}

DecryptData();