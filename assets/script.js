// Assignment Code

// Variables Needed for Password Criteria
let passwordLength = ;
let lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "=", "-", ".", "~", "|", "/", "?", "<", ">", "_", "{", "}", "[", "]"];

//targets Generate Password Button
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // prompts for password criteria
  // 
  // prompt for length between 8 and 128 characters
  //  passwordLength = 
  //   if (passwordLegth < 8 or > 128) return: "Please select a length between 8 and 128 characters"
  // prompt for whether or not to include lowercase, uppercase, numeric, and/or special characters
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // need to make generatePassword function
  var passwordText = document.querySelector("#password");

  // displays password on the screen 
  passwordText.value = password;

}

// Add event listener to generate button
// Calls the writePassword function when the button is clicked
generateBtn.addEventListener("click", writePassword);


// when prompts are completed run function to generate password
// when password is generated display password in prompt or on screen

