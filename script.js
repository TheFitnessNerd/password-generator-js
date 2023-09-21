// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt("Enter Password. 8-128 characters")
  var characters = promt("Use a combination of uppercase letters, lowercase letters, and special characters")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log()




// const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

// function generatePassword(length) {
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * chars.length);
//     password += chars[randomIndex];
//   }
//   return password;
// }

// // Example usage:
// const generatedPassword = generatePassword(12);
// console.log(generatedPassword);