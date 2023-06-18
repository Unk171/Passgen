
// Variables
var generateBtn = document.querySelector("#generate");
var lowChar = "abcdefghijklmnopqrstuvwxyz";
var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "0123456789";
var symChar = "!@#$%^&*()";
var char = "";

// Button action 
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  // Choosing lenght 
  var lengthPass = prompt("Please, enter password lenght between 8 and 128 characters");
  // checking correct length 
  if (lengthPass < 8) {
    alert("Password must be more 7 characters");
    lengthPass = prompt("Please, enter password lenght between 8 and 128 characters");
  }
  else if (lengthPass > 128) {
    alert("Password must be less than 128 characters");
    lengthPass = prompt("Please, enter password lenght between 8 and 128 characters");
  }
  // choosing characters type 
  var lowCharT = confirm("Do you want use lowercase letters?");
  var upCharT = confirm("Do you want use uppercase letters?");
  var numCharT = confirm("Do you want use numbers?");
  var symCharT = confirm("Do you want use special symbols?");

  // creating a variable with selected characters 
  if (lowCharT === true) {
    char = lowChar;
  }
  if (upCharT === true) {
    char = char + upChar;
  }
  if (numCharT === true) {
    char = char + numChar;
  }
  if (symCharT === true) {
    char = char + symChar;
  }
  // selected characters checking 
  console.log(char);
  // alert if no one type is selected 
  if (char === "") {
    alert("You didn't choose any characters. Please, try again");
  }
  else {
    // generate password 
    var password = "";
    for (var i = 0; i <= lengthPass; i++) {
      var randomNumber = Math.floor(Math.random() * char.length);
      password += char.substring(randomNumber, randomNumber + 1);
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
  }
}


