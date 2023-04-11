# rsa-testing

Need to create a seperate folder called Keys
Create sub-folders called User1, User2 and User3
Add 2 files and name its as private.key and public.key to each sub-folders

<!-- Step : -->
Run the rsa.js to generate the private and public keys and it will be stored in the specified paths.

<!-- Step 2 -->
Run the rsa-encrypt.js it will encrypt the data using public key and store the encrypted hash in the specified paths.

<!-- Step 3 -->
Run the rsa-decrypt.js it will fetch the encrypted hash from the specified path and decrypt the data using private key and store it in the specified paths.

<!-- Step 4 -->
Run the ipfs-store.mjs it will fetch the encrypted hash from the specified path and store it in the IPFS and it will return an CID hash and it will be stored in the specified path.