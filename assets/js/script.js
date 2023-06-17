// Assignment Code
var generateBtn = document.querySelector("#generate");
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lengthPass =  prompt("Please, enter password lenght between 8 and 128 characters");

if (lengthPass < 8) {
  alert("Password must be more 7 characters");
  lengthPass =  prompt("Please, enter password lenght between 8 and 128 characters");
  }
else if (lengthPass > 128) {
  alert("Password must be less than 128 characters");
  lengthPass =  prompt("Please, enter password lenght between 8 and 128 characters");
}
function writePassword() {
    var password = "";

  for (var i = 0; i <= lengthPass; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

generateBtn.addEventListener("click", writePassword);
