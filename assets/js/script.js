// Assignment Code
var generateBtn = document.querySelector("#generate");

// First create a bank of letters, numbers, and special characters for the password
letters = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ']
numbers =['1234567890']
characters =['@!#$%&']

//Create variables for prompts
var wantPassword = prompt('Would you like to generate a password? (yes/y or no/n)')
var passwordlength = prompt('How long would you like the password to be? (enter a number less than 50)')


function generatePassword(digits){
  var digits
  if( wantPassword == 'yes' && want){

  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
