// Assignment Code
var generateBtn = document.querySelector("#generate");
const lower = ["abcdefghijklmnopqrstuvwxyz"].join('')
const upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
const specially = ["[]{}&^%$#@<>?*()"]
const newArray = [...lower, ...specially].join("")
const firstCombo =[...lower, ...upper].join("")
const thirdCombo = [...lower, ...upper, ...specially].join("")
// Write password to the #password input
function generatePassword () {
 
let randoNumb =""
 // sets the number of characters for password
const characters = window.prompt("How many characters?") - 1

console.log("characters " + characters)



console.log(newArray)
// prompt for number of characters: true
if (characters > 6 && characters < 16) {
  const fontStyle = window.confirm("Do you want UpperCase letters?")
  // prompt for uppercase letters: true
    if (fontStyle) {
      const specialChar = window.confirm("Add special Characters?")
      // prompt for special characters :true
        if (specialChar) {
          for (var i = 0; i <= characters; i++) {
            randoNumb += thirdCombo[Math.floor(Math.random() * thirdCombo.length)] ;
           
         }
        } else { // false prompt for special characters
          for (var i = 0; i <= characters; i++) {
            randoNumb += firstCombo[Math.floor(Math.random() * firstCombo.length)] ;
           
         }
        }
    } else { // false prompt for uppercase
      const specialChar = window.confirm("Add special Characters?")
      if (specialChar) {
        for (var i = 0; i <= characters; i++) {
          randoNumb += newArray[Math.floor(Math.random() * newArray.length)] ;
         
       }
      } else { // false prompt for special characters 
        for (var i = 0; i <= characters; i++) {
          randoNumb += lower[Math.floor(Math.random() * lower.length)] ;
         
       }
      }
    }
} else { //false prompt for character #
  window.alert("Your password needs to be between 6 and 16 characters.")
}

return randoNumb;


}
 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
