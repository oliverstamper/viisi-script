// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("Enter the desired length of your password. Must be between 8 and 128 characters"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter an appropriate password length between 8 and 128 characters");
    return;
  }

  let hasSpecialCharacters = confirm("Do you wish to use special characters?");
  let hasNumericCharacters = confirm("Do you wish to have numeric characters?");
  let hasUpperCasedCharacters = confirm("Do you wish to have upper case characters?");
  let hasLowerCasedCharacters = confirm("Do you wish to have lower case characters?");

  if (!hasLowerCasedCharacters && !hasUpperCasedCharacters && !hasNumericCharacters && !hasSpecialCharacters) {
    alert("Please select at least one character type.");
    return;
  }

  return {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters
  };
}

// Function for getting random element from array

function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password

function generatePassword() {
  var options = getPasswordOptions();
  var charset = [];

  if (options.hasLowerCasedCharacters) {
    charset = charset.concat(lowerCasedCharacters);
  }
  if (options.hasUpperCasedCharacters) {
    charset = charset.concat(upperCasedCharacters);
  }
  if (options.hasNumericCharacters) {
    charset = charset.concat(numericCharacters);
  }
  if (options.hasSpecialCharacters) {
    charset = charset.concat(specialCharacters);
  }

  var password = "";
  for (var i = 0; i < options.length; i++) {
    password += getRandom(charset);
  }

  alert("Generated Password: " + password);
}

// Get references to the #generate element

var generateBtn = document.querySelector('#generate');

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener('click', generatePassword);