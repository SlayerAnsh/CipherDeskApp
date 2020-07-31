/*
====================
ABOUT THIS SOLUTION
====================
Ceasar Cipher Also known as the ​ shift cipher​ , ​ it is a type of encryption technique in which each letter in
the plaintext is replaced by a letter some fixed number of positions down the alphabet.
For example, for a shift number of 3, D would be replaced by A and E would be B. For
further information, visit ​ link​ .
*/

// Application controller
const {writeFile, write, readFile, read} = require('fs');
const { stdout, stderr } = require('process');
var exec = require('child_process').exec;


const app = {};


// Shift cipher function declaration
app.ceaserCipher = () => {

//   Str to be encrypted || decrypted
  let  plainText = document.getElementById('cipher-textarea'),
      cipherLabel = document.getElementById('cipherLabel');
  
  let result = document.getElementById('js__cipher__content');

  
//   prevent form submitting by default
  let form = document.getElementById('cipherForm');
      form.addEventListener('submit', (e) => e.preventDefault());
  
//   Buttons declarations
  let encryptBtn = document.getElementById('encrypt'),
      decryptBtn = document.getElementById('decrypt');

  let ecommand = 'encrypt';
  let dcommand = 'decrypt';
  let directory = 'cd build';
  
//   Trigger the encryption process once the button is clicked
  encryptBtn.addEventListener('click', (e) => {
    text = plainText.value;
    if(text.trim() !== '') {
      writeFile('message.txt', text, (err) => {
        if(err) throw err;
        console.log('message created')
      });
      exec(ecommand, (err, stdout, stderr) => {
        if(err !== null) {
            console.log('exec error: ' + err)
        }
        readFile('message.txt', (err, text) => {
        if(err) throw err;
        result.textContent = "Encrypted: " + text;
        })
      });
      cipherLabel.textContent = '* Cipher';
      cipherLabel.style.color = '#333333';
      plainText.style.borderBottomColor = '#333333';
      form.reset();
      
    }
    else {
      cipherLabel.textContent = '* Please type something on the box';
      cipherLabel.style.color = 'red';
      plainText.style.borderBottomColor = 'red';
    }
  });
  
//   Triggers the decryption process once the button is clicked
  decryptBtn.addEventListener('click', (e) => {
//     Text from input
    text = plainText.value;

    if(text.trim() !== '') {
      writeFile('message.txt', text, (err) => {
        if(err) throw err;
        console.log('message created')
      })
      exec(dcommand, (err, stdout, stderr) => {
        if(err !== null) {
            console.log('exec error: ' + err)
        }
        readFile('message.txt', (err, text) => {
        if(err) throw err;
        result.textContent = "Decrypted: " + text;
        });
      });
      cipherLabel.textContent = '* Cipher';
      cipherLabel.style.color = '#333333';
      plainText.style.borderBottomColor = '#333333';
      form.reset();
    }
    else {
      cipherLabel.textContent = '* Please type something on the box';
      cipherLabel.style.color = 'red';
      plainText.style.borderBottomColor = 'red';
    }
  });
  
}