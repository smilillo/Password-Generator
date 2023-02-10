// Assignment Code

// Variables Needed for Password Criteria
// let passwordLength = ;
let lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "=", "-", ".", "~", "|", "/", "?", "<", ">", "_", "{", "}", "[", "]"];

// don't know if this will be useful
// const keys = {
// numChar: "1234567890",
// lowerChar: "abcdefghijklmnopqrstuvwxyz",
// upperChar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
// specialChar: "!@#$%^&*()_+-=~}{[]></."
// }
// From Act 28 mini-project index = Math.floor(Math.random() * options.length)


//targets Generate Password Button
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // prompts for password criteria
  // 
  // prompt for length between 8 and 128 characters
  let passwordLength = parseInt(prompt("Please enter the desired length of your password as an integer between 8 and 128."));
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("The password length must be an integer between 8 and 128. Please try again.");
    }


  //  passwordLength = 
  //   if (passwordLegth < 8 || > 128) return: "Please select a length between 8 and 128 characters"
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

