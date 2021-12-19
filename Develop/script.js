// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "012345678";
var alphabet = "abcdefabcdefghijklmnopqrstuvwxyz";
var characters ="!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var char =""
var password ="";
var length
// Write password to the #password input
function genPass() {
  window.alert ("Choose your password criteria")

  function condition() {
    var length = window.prompt ("Please choose your password's length (>8, <128 letters)");

    if ((length<=8 || length>=128 || isNaN(length))) {
      window.alert ("wrong condition, please try again!");
      condition()
      }
    else if (!length) {
      return;
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

  console.log (password)

}

genPass()
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
