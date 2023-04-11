const NodeRSA = require('node-rsa');

let rsaKey = new NodeRSA({b: 512});
console.log("rsaKey", rsaKey);

//private key
const privateKey = rsaKey.exportKey("pkcs8-private");
console.log("PrivateKey", privateKey);
const publicKey = rsaKey.exportKey("pkcs8-public");
console.log("PublicKey", publicKey);