// Assignment Code
const generateBtn = document.querySelector("#generate");

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of special characters to be included in password
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let finArray = [];
let passwordArray = [];

function generatePassword() {
  // TODO: Write your code here
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// After clicking generate password
function generatePassword() {
  let length = prompt("How many characters do you want in your password?");
  if (length < 8 || length > 129 || length === null || isNaN(length) === true) {
    alert("Password must be between 8-128 characters");
    generatePassword();
    return
  }

  const lower = confirm("Do you want lower case letters in your password?");
  const upper = confirm("Do you want upper case letters in your password?");
  const number = confirm("Do you want numbers in your password?");
  const unique = confirm("Do you want special characters in your password?");
  
  // Password prompt check
  if (lower === true) {
    finArray = lowerCasedCharacters.concat(finArray);
    passwordArray.push(lowerCasedCharacters[Math.floor(lowerCasedCharacters.length * Math.random())]);
    length--;
   }
  if (upper === true) {
    finArray = upperCasedCharacters.concat(finArray);
    passwordArray.push(upperCasedCharacters[Math.floor(upperCasedCharacters.length * Math.random())]);
    length--;
  }
  if (number === true) {
    finArray = numericCharacters.concat(finArray);
    passwordArray.push(numericCharacters[Math.floor(numericCharacters.length * Math.random())]);
    length--;
  }
  if (unique === true) {
    finArray = specialCharacters.concat(finArray);
    passwordArray.push(specialCharacters[Math.floor(specialCharacters.length * Math.random())]);
    length--;
  }

  if (lower === false && upper === false && number === false && unique === false) {
    alert("Password can not be made with given information");
    generatePassword();
    return
  }
  
  //Password generator
    const passwordOutput = Array.from({ length }, () => finArray[Math.floor(finArray.length * Math.random())]).concat(passwordArray).join("");
    let shuffle = [...passwordOutput];
  
  //Fisher-Yates shuffle algorithm 
    const getRandomValue = (i, N) => Math.floor(Math.random() * (N - i) + i);

    shuffle.forEach( (elem, i, arr, j = getRandomValue(i, arr.length)) => [arr[i], arr[j]] = [arr[j], arr[i]] );

    shuffle = shuffle.join('');

    console.log(shuffle);
    return shuffle

}
