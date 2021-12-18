// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create a function that will generate a random password depenedt on the number of digits entered in the prompt
function generatePassword(digits){
  if (Number.isInteger(parseInt(digits))==true){
    var passwordResult = Math.random().toString(36).substring(0, digits);
  } else {
    alert("Password will not be generated must enter a valid number");
  }
  return passwordResult;
}


// Write password to the #password input
function writePassword() {
  const digits = prompt("How long would you like your password to be?"); //Added digits prompt
  var password = generatePassword(digits);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


