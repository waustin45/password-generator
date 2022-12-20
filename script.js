// Assignment Code
var generateBtn = document.querySelector("#generate");
const lower = ["abcdefghijklmnopqrstuvwxyz"]
const upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
const specially = ["[]{}&^%$#@<>?*()"]
const newArray = [...lower, ...specially].join("")
const firstCombo =[...lower, ...upper].join("")
const thirdCombo = [...lower, ...upper, ...specially].join("")
// Write password to the #password input
function generatePassword () {
  // sets the number of characters for password
let randoNumb =""
let password =""
const characters = window.prompt("How many characters?")

console.log("characters " + characters)



console.log(newArray)
if (characters > 6 && characters < 16) {
  const fontStyle = window.confirm("Do you want UpperCase letters?")
    if (fontStyle) {
      const specialChar = window.confirm("Add special Characters?")
        if (specialChar) {
          for (var i = 0; i <= characters; i++) {
            randoNumb += thirdCombo[Math.floor(Math.random() * thirdCombo.length)] ;
           password += newArray.substring(randoNumb, randoNumb + 1)
         }
        } else {
          for (var i = 0; i <= characters; i++) {
            randoNumb += firstCombo[Math.floor(Math.random() * firstCombo.length)] ;
           password += newArray.substring(randoNumb, randoNumb + 1)
         }
        }
    } else {
      const specialChar = window.confirm("Add special Characters?")
      if (specialChar) {
        for (var i = 0; i <= characters; i++) {
          randoNumb += newArray[Math.floor(Math.random() * newArray.length)] ;
         password += newArray.substring(randoNumb, randoNumb + 1)
       }
      } else {
        for (var i = 0; i <= characters; i++) {
          randoNumb += lower[Math.floor(Math.random() * lower.length)] ;
         password += newArray.substring(randoNumb, randoNumb + 1)
       }
      }
    }
} else {
  window.alert("Your password needs to be between 6 and 16 characters.")
}
// for (var i = 0; i <= characters; i++) {
//    randoNumb += newArray[Math.floor(Math.random() * newArray.length)] ;
//   password += newArray.substring(randoNumb, randoNumb + 1)
  
 
// }
return randoNumb;


}
 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
