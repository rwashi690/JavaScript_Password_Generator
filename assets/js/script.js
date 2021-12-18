
// Assignment Code

var generateBtn = document.querySelector("#generate");

// // Create a function that will generate a random password given number digits -most simple function
// function generatePassword(digits){
//   if (Number.isInteger(parseInt(digits))==true){
//     var passwordResult = Math.random().toString(36).substring(0, digits);
//   } else {
//     alert("Password will not be generated must enter a valid number");
//   }
//   return passwordResult;
// }

//Adding word banks and prompts for each type of character
var upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerCase='abcsdefghijklmnopqrstuvwxyz'
var numbers='1234567890'
var specialcharacters='!@#$%&'

// Source: https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript

function shuffelWord (word){
  var shuffledWord = '';
  word = word.split('');
  while (word.length > 0) {
    shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
  }
  return shuffledWord;
}


function generatePassword(){
  var passwordResult = '';
  var wantPassword = prompt("Would you like to generate a password? (yes or no)");
  if (wantPassword ==='YES' || wantPassword ==="yes"|| wantPassword ==="Yes"){
    var digits = prompt("How long would you like your password to be?");
    if (Number.isInteger(parseInt(digits))==true && parseInt(digits)>7 && parseInt(digits)<129){
      var lcdigits = prompt ("How many lowercase letters? You have " + parseInt(digits) + " digits available");
      var ucdigits = prompt("How many upper case letters? You have "+ parseInt(digits-lcdigits) + " digits available");
      var numdigits = prompt("How many numbers? You have "+ parseInt(digits-lcdigits-ucdigits) + " digits available");
      var scdigits = prompt("How many special characters? You have "+ parseInt(digits-lcdigits-ucdigits-numdigits) + " digits available");
      var totaldigits = parseInt(digits-lcdigits-ucdigits-numdigits-scdigits);
       if (totaldigits == 0){
        for ( var i = 0; i < lcdigits; i++ ) {
          passwordResult += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
      }
        for ( var i = 0; i < ucdigits; i++ ) {
          passwordResult += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    }
        for ( var i = 0; i < numdigits; i++ ) {
          passwordResult += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }
        for ( var i = 0; i < scdigits; i++ ) {
          passwordResult += specialcharacters.charAt(Math.floor(Math.random() * specialcharacters.length));
    }
      } else{
        alert("Password cannot be generated, invalid criteria");
      }
    } else {
      alert("Password will not be generated must enter an integer that is greater than 7 and less than 129");
    }
  } else{
    alert("Password will not be generated")
  }
  // To randomize password I am going to use this function I found on Stack Exchange 
  shufflePassword=shuffelWord(passwordResult)
  return shufflePassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


