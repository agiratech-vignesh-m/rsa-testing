import * as IPFS from 'ipfs-core' 
// import { readFileSync, openSync, writeFileSync } from 'fs';
import fs from 'fs'

async function saveData(){
    const ipfs = await IPFS.create() 
    const encryptedData = fs.readFileSync("./Encrypted-Data/User1");

    let store = await ipfs.add(encryptedData)
    

    fs.openSync("./IPFS-Data/User1", "w")
    fs.writeFileSync("./IPFS-Data/User1", store.cid.toString())

    console.log("Stored on IPFS Successfully");
    console.log("CID:", store);
}
saveData();