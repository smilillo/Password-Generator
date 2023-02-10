// Assignment Code

//targets Generate Password Button
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
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

// prompts for password criteria
// 
// prompt for length between 8 and 128 characters
//  passwordLength = 
//   if (passwordLegth < 8 or > 128) return: "Please select a length between 8 and 128 characters"
// prompt for whether or not to include lowercase, uppercase, numeric, and/or special characters
// when prompts are completed run function to generate password
// when password is generated display password in prompt or on screen

