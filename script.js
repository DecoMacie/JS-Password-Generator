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
  var passLenght = parseInt(prompt("Add the length of the Password. Between 8-128",""))
  var charTypes = [["Lowercase Characters",lowerCasedCharacters], ["Uppercase Characters",upperCasedCharacters], ["Numeric Characters",numericCharacters], ["Special Characters ($@%&*, etc)",specialCharacters]];
  
  //Validate the password's length and prompts the user to input the correct criteria
  while (passLenght<8 || passLenght>128){
    if (passLenght<8){
      passLenght = parseInt(prompt("Your password MUST have 8 or more characters\nPlease try again",""));
    }
    else if (passLenght>128){
      passLenght = parseInt(prompt("Your password MUST have 128 characters at most\nPlease try again",""));
    }
  }
  
  // for (i = 0; i < charTypes.length; i++){

  // }
  var d = passLenght * 2;
  console.log(charTypes[0][1]);
  console.log(passLenght);
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()
  
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
generateBtn.addEventListener('click', writePassword);


