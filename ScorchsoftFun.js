const crypto = require('crypto')
//import {crypto} from "crypto"

// Creates a random initialization vector (IV) used as a ~seed
let iv = crypto.randomBytes(16);

let secret_message = 'SCORCHSOFT-INTERVIEW-092023';
let key = 'iWantToWorkAtScorchsoft,SeemsFun'; 

// Instead of using a random IV I made my own so i can share
let funBuffer = Buffer.from('AdventOfCodeFun!');

console.log(funBuffer);

// aes 256-bit encryption
let cipher = crypto.createCipheriv('aes256', key, funBuffer);
let encrypted = cipher.update(secret_message, 'utf-8', 'hex');
encrypted += cipher.final('hex');

console.log('encrypted: ' + encrypted)


// aes 256-bit decryption
let decipher = crypto.createDecipheriv('aes256', key, funBuffer);
let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
decrypted += decipher.final('utf-8');

console.log('decrypted: ' + decrypted)