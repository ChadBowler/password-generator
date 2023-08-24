// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

function generatePassword() {
  var password = "";
  var choices = [];
  const characters = {
    upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower:"abcdefghijklmnopqrstuvwxyz",
    numeric: "0123456789",
    special: "!@#$%^&*()-_+={}[]|\\;:'\",.<>/?"
  };

  var passwordLength = window.prompt("How long do you want your password? (between 8 and 128 characters)");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) || (passwordLength % 1 !== 0)) {
    alert("Password length must be a whole number between 8 and 128.");
    return password;
  };

  var lowers = confirm("Do you want lowercase letters included in your password?");
  var uppers = confirm("Do you want uppercase letters included in your password?");
  var numerics = confirm("Do you want numbers included in your password?");
  var specials = confirm("Do you want special characters included in your password?");
  
  if(lowers === false && uppers === false && numerics === false && specials === false) {
    alert("Well, you need SOMETHING in your password.");
    return password;
  }

  if(lowers) {choices += characters.lower;};

  if(uppers) {choices += characters.upper;};

  if(numerics) {choices += characters.numeric;};

  if(specials) {choices += characters.special;};
  
  for(var i=0; i<passwordLength; i++){
    var character = choices[Math.floor(Math.random()*choices.length)];
    password += character;
  };
  return password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
