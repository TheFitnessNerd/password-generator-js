// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = parseInt(prompt("Choose a length of at least 8 but no more than 128 charcters."));

  if (length < 8 || length > 128) {
  alert("Invalid length")
  return;
  }

  var useLowerCase = confirm("Would you like to use lowercase letters?");
  var useUpperCase = confirm("Would you like to use uppercase letters?");
  var useNumeric = confirm("Would you like to use numbers?");
  var useSpecial = confirm("Would you like to use special characters?");

if (!useLowerCase && !useUpperCase && !useNumeric && !useSpecial){
  
  alert("Please select at least one character type for your password");
  generatePassword();

} else {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?";

var allChars = ``
  if (useLowerCase) allChars += lowercaseChars;
  if (useUpperCase) allChars += uppercaseChars;
  if (useNumeric) allChars += numberChars;
  if (useSpecial) allChars += specialChars;
// console.log(allChars);
selectedCharsArray = [...allChars];
// console.log(selectedCharsArray);
let randomPassword = "";
for (let i = 0; i < length; i++) {
//  console.log(selectedCharsArray[i])
let randomIndex = Math.floor(Math.random() * selectedCharsArray.length);
// console.log(randomIndex);
// console.log(selectedCharsArray[randomIndex]);
randomPassword = randomPassword + selectedCharsArray[randomIndex];

}
return randomPassword;
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


