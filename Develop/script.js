// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "012345678"
var alphabet = "abcdefabcdefghijklmnopqrstuvwxyz"
var characters =""
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
