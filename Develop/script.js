// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "012345678";
var alphabet = "abcdefabcdefghijklmnopqrstuvwxyz";
var characters ="!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var char =""
var password ="";
var length
// Write password to the #password input
function generatePassword() {
  var length
  
  window.alert ("Choose your password criteria");
  //Password criteria  
  function condition() {
    length = window.prompt ("Please choose your password's length (>8, <128 letters): ");
    if (!length) {
      return;}
    else if ((length<=8 || length>=128 || isNaN(length))) {
      window.alert ("wrong condition, please try again!");
      condition()
      }
    }
  
  condition()

  var alpha = window.confirm("Do you want your password contains aphabet letters?");
  if (alpha) {char=char + alphabet};
  var num = window.confirm("Do you want your password contains numbers?");
  if (num) {char = char + numbers};
  var upper = window.confirm("Do you want your passwords contains uppercase letters?")
  if (upper) {char= char +alphabet.toUpperCase()};
  var chac = window.confirm("Do you want your passwords contains speacial characters?")
  if (chac) {char=char + characters}

  for (var i = 0; i <= length; i++) {
    var randomNumber = Math.floor(Math.random() * char.length);
    password += char.substring(randomNumber, randomNumber +1);
  }
  return password;
}

function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  console.log (password);
  passwordText.value = password;
  // reset password for next use
  password="" 
  return
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
