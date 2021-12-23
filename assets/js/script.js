// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberic = {
  msg: "numberic letters",
  content: "012345678",}
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

// Ask user for password's length
function passwordLength() {
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
};
// Ask user for which character types need to be included in password
function chacTypes() {
  function add(crit) {
    var input = window.confirm("Do you want your password contains "+ crit.msg);
   if (input) {char+=crit.content};
     };
  
  add(lowercase);
  add(uppercase);
  add(numberic);
  add(special_characters);
};

// Generate password based on input criteria
function generatePassword() {
  
  window.alert ("Choose your password criteria");
  
  passwordLength ();
  
// If user pressed Cancel, immediately end function
  if (!length) {
    return;
    };

  
  chacTypes();
  
  //  Add message when no character type was chosen
  if (char == "") {
    alert("No character type was chosen, please press 'Generate Password' to try again'")
  };

  //  Generate password
  for (var i = 0; i <= length; i++) {
    var randomNumber = Math.floor(Math.random() * char.length);
    password += char.substring(randomNumber, randomNumber +1);
  }
  return password;
}

// Display password on the page and the variables for next use
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // reset variable for next use
  password="" 
  char=""
  return
}

// Generate password by clicking "generate" button
generateBtn.addEventListener("click", writePassword);
