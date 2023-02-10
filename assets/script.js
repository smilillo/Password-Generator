// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompts for password criteria
// prompt for length between 8 and 128 characters
// prompt for whether or not to include lowercase, uppercase, numeric, and/or special characters
// when prompts are completed run function to generate password
// when password is generated display password in prompt or on screen

