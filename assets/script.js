// Assignment Code

// Variables Needed for Password Criteria

let lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "=", "-", ".", "~", "|", "/", "?", "<", ">", "_", "{", "}", "[", "]"];

document.getElementById("password").value = password;

// Prompt user to choose length and types of characters and store this data
function getPasswordChoices() {
  
  // Prompt for Password Length
  let passwordLength = parseInt(prompt("Please enter the desired character length of your password as an integer between 8 and 128."));
  // alerts user to try again if length entered does not meet parameters
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      window.alert("The password length must be an integer between 8 and 128. Please try again.");
      return null;
    }

  // Confirm Lowercase
  let includeLowerChar = confirm("Would you like your password to include lowercase characters?");

  // Confirm Uppercase
  let includeUpperChar = confirm("Would you like your password to include uppercase characters?");

  // Confirm Numbers
  let includeNumChar = confirm("Would you like your password to include numeric characters?");

  // Confirm Special
  let includeSpecialChar = confirm("Would you like your password to include special characters?");

  // Alerts user to select at least one if no character types selected
  if (includeLowerChar === false && includeUpperChar === false && includeNumChar === false && includeSpecialChar === false) {
    alert("You did not select any character types. Please select at least one.");
    return null;
  }

  // Variable Containing Character Options based on User Choices
  let passwordChoices = {
    passwordLength: passwordLength,
    includeLowerChar: includeLowerChar,
    includeUpperChar: includeUpperChar,
    includeNumChar: includeNumChar,
    includeSpecialChar: includeSpecialChar,
  };
    return passwordChoices;
  }

  // Function to randomly select item from an array
  function getRandom(arr) {
    // select index from array
    let randomIndex = Math.floor(Math.random() * arr.length);
    // store string associated with that index
    let randomChar = arr[randomIndex];
    return randomChar;
}

function generatePassword () {
  let passwordOptions = getPasswordChoices();
  // Array to store password
  let result = [];
  // Array to store characters that can be included in password based on user choices
  let possibleChar = [];
  let guaranteedChar = [];

  if (!passwordOptions) return null;

  // If statement that concatenates character type arrays into password options array if they were confirmed by user
  if (passwordOptions.includeLowerChar) {
    possibleChar = possibleChar.concat(lowerChar);
    guaranteedChar.push(getRandom(lowerChar));
  }

  if (passwordOptions.includeUpperChar) {
    possibleChar = possibleChar.concat(upperChar);
    guaranteedChar.push(getRandom(upperChar));
  }

  if (passwordOptions.includeNumChar) {
    possibleChar = possibleChar.concat(numChar);
    guaranteedChar.push(getRandom(numChar));
  }

  if (passwordOptions.includeSpecialChar) {
    possibleChar = possibleChar.concat(specialChar);
    guaranteedChar.push(getRandom(specialChar));
  }

  // for loop to select random characters from possibleChar array
  for (let i = 0; i < passwordOptions.passwordLength; i++) {
    let chosenChar = getRandom(possibleChar);
    // Push randomly chosen characters into result array
    result.push(chosenChar);
    // need to call results array and randomChar somewhere
  }

  for (let i=0; i < guaranteedChar.length; i++) {
    // result[i] = guaranteedChar[i];
    result.push(guaranteedChar[i]);
  }

  return result.join("");
}

//targets Generate Password Button
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let result = generatePassword();
  let passwordText = document.querySelector("#password");

  // displays password on the screen 
  passwordText.value = result;

}

// Add event listener to generate button
// Calls the writePassword function when the button is clicked
generateBtn.addEventListener("click", writePassword);



