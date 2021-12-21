// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberic = {
  msg: "numberic letters",
  content: "012345678"}
var lowercase = {
  content:"abcdefabcdefghijklmnopqrstuvwxyz",
  msg: "lowercase letter"}
var uppercase = {
  content: lowercase.content.toUpperCase(),
  msg: "uppercase letter"}
var special_characters = {
  content: "!@#$%^&*()_+~`|}{[]\:;?><,./-=",
  msg: "speacial characters"}
var char =""
var password ="";
var length

function generatePassword() {
  
  window.alert ("Choose your password criteria");
  
  var i= 0;
  while (i == 0) { 
   //Ask Users about Password length 
  length = window.prompt ("Please choose your password's length (>8, <128 letters): ");

   // If user pressed Cancel, immediately end function
  if (!length) {
    return;
  };

  // If password's length is not satisfy condition, ask users to try again
  if ((length<=8 || length>=128 || isNaN(length))) {
      window.alert ("wrong condition, please try again!");
      } 
    else {i=i+1};
  }
  
  //Password's criteria
  function add(crit) {
    var input = window.confirm("Do you want your password contains "+ crit.msg);
   if (input) {char+=crit.content};
     };
  
  add(lowercase);
  add(uppercase);
  add(numberic);
  add(special_characters);

  //  Generate password
  for (var i = 0; i <= length; i++) {
    var randomNumber = Math.floor(Math.random() * char.length);
    password += char.substring(randomNumber, randomNumber +1);
  }
  return password;
}

function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // reset variable for next use
  password="" 
  char=""
  return
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
