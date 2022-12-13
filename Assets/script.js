// Assignment code here


// Get references to the #generate element
//  (1) making a reference var which is called generateBtn in javascript
// which references the generate id in html and css
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// (3) the write password function will only run when the generate button is clicked
function writePassword() {

  // get numeric length for password via prompt
  // confirm is a true or false statement
  // variable for all criterias to generate password
  var passLength = prompt ("please choose a length of at least 8 characters and no more than 128 characters");
  var incLowercase = confirm("Should lowercase characters be included in the password?");
  var incUppercase = confirm("Should uppercase characters be included in the password?");
  var incNumeric = confirm("Should numeric characters be included in the password?");
  var incSpecial = confirm("Should special characters be included in the password?");

  // if pass length is less than 8 and greater than 128 alert them to enter valid number
  // otherwise return 
  if (passLength < 8 || passLength > 128) {
    alert ("Please choose a character length of at least 8 characters and no more than 128 characters.");
    return;
  }
  // if you didnt unclude a lowercase, uppercase, numeric, or special characters, alert them and return
  if (!incLowercase && !incUppercase && !incNumeric && !incSpecial) {
    alert ("Must choose at least one character type."); 
    return;
  }
  // this generates a random password with a length given at passlength with specific characters included. 
  // password is set to empty string and then a array Characterinc
  var password = "" ;
  var Characterinc = [];
  if (incLowercase) Characterinc.push("abcdefghijklmnopqrstuvwxyz");
  if (incUppercase) Characterinc.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (incNumeric) Characterinc.push("0123456789");
  if (incSpecial) Characterinc.push("!@#$%^&*()-_=+[]{}|;:'<>,.?/~`");
// used the passlength to create a for loop that adds a random character each time it goes through  a loop
// up until the password length is equal to i which adds on to its value everytime it goes through the loop
  for (var i = 0; i < passLength; i++) {
    var character = Characterinc[Math.floor(Math.random() * Characterinc.length)];
    var character = character[Math.floor(Math.random() * character.length)];
    password += character;
  }

 // this will replace both the alert password text and password id in html 
 // to the generated password 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  alert(" your password is " + password );
}

// Add event listener to generate button
//  (2) the generateBtn is referenced to #generate 
// which is calling the button with the id generate from the htmla nd css file
// once the generate button is clicked in the webpage 
// a writePassword function will run in javascript ^^^
generateBtn.addEventListener("click", writePassword);
