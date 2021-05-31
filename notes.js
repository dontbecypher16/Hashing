const bcrypt = require('bcrypt')

const saltRounds = 10
const plainText = "Coming Soon..."



////Generate the Salt using the bcrypt.genSalt method
bcrypt.genSalt(saltRounds)
  .then(salt => {
    console.log(salt);
    //Output: $2b$10$uuIKmW3Pvme9tH8qOn/H7u
    //A 29 characters long random string.
  });



  //////Inside the genSalt callback, call bcrypt.hash method
  bcrypt.hash(plainText , salt)
 .then(hash => {
   console.log(hash);
   //Output: $2b$10$uuIKmW3Pvme9tH8qOn/H7uZqlv9ENS7zlIbkMvCSDIv7aup3WNH9W
   //A 61 character long string (notice that the 1st part of the string is actually the salt.
 });


 ////Above combined...
 const bcrypt = require('bcrypt');
const saltRounds = 10;
const plainText = "Hello World";
bcrypt.genSalt(saltRounds)
 .then(salt => {
    bcrypt.hash(myPlaintextPassword, salt)
      .then(hash => {
        console.log(hash);
      });
 });



 //******************************** */

 //another way to do it. auto-generated
 bcrypt.hash(myPlaintextPassword, saltRounds)
 .then(hash => {
    console.log(hash);
 });


 ///bcrypt module provides another method called bcrypt.compare to compare the input string with the hashed string.
 // Load hash from your database for the password.
bcrypt.compare(loginPasswordString, hash)
.then(result => {
   console.log(result);
   // This will be either true or false, based on if the string
   // matches or not.
});