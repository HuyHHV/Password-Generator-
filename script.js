// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "012345678";
var alphabet = "abcdefabcdefghijklmnopqrstuvwxyz";
var cap = alphabet.toUpperCase();
var characters ="!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var char =""
var password ="";
var length

function generatePassword() {
  var length
  
  window.alert ("Choose your password criteria");
  
  var i= 0;
  while (i == 0) { 
   //Ask Users about Password length 
  length = window.prompt ("Please choose your password's length (>8, <128 letters): ");

   // If user pressed Cancel, immediately end function
  if (!length) {
    return;
  };

  // If password length is not satisfy condition, ask users to try again
  if ((length<=8 || length>=128 || isNaN(length))) {
      window.alert ("wrong condition, please try again!");
      } 
    else {i=i+1};
  }
  
  //Password's criteria
  function add(input,crit) {
   if (input) {char+=crit};
   };
    console.log(char);
    var alpha = window.confirm("Do you want your password contains lowercase letters?");
    add(alpha,alphabet);
    console.log(char);
    var upper = window.confirm("Do you want your passwords contains uppercase letters?")
    add(upper,cap);
    console.log(char);
    var num = window.confirm("Do you want your password contains numbers?");
    add(num,numbers);
    console.log(char);
    var chac = window.confirm("Do you want your passwords contains speacial characters?")
    add(chac,characters);
    console.log(char);

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
