function Generate() {
  var lowercaselletter = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseletter = lowercaselletter.toUpperCase();
  var pwlength = document.getElementById("pwlength").value;
  var Symbol = "!<>,.:;''/?{[}]+_-()*&^%$#@|";
  var Numbers = "0123456789";
  var number = document.getElementById("number").checked;
  var lowercase = document.getElementById("lowercase").checked;
  var uppercase = document.getElementById("uppercase").checked;
  var symbol = document.getElementById("symbol").checked;
  var passwords = "";

  var add = "";
  if (lowercase) {
    add += lowercaselletter;
  }
  if (uppercase) {
    add += uppercaseletter;
  }
  if (number) {
    add += Numbers;
  }
  if (symbol) {
    add += Symbol;
  }
  console.log(add);
  for (let i = 0; i < pwlength; i++) {
    passwords += add.charAt(Math.floor(Math.random() * add.length));
  }
  document.getElementById("passwords").value = passwords;
}
// Generate Random Number: Math.random() gives you a number between 0 and 1.
// Scale to Index Range: Multiply by the length of the string/array.
// Round Down: Math.floor() converts this number to an integer index.
// Pick Character: charAt(index) uses this integer index to retrieve the character from the string.
// Math.random(): Creates a random number between 0 and 1, but doesn’t know about your data’s length.
// Scaling: Multiply this random number by the length of the string or array to fit the range.
// Indexing: Use Math.floor() to convert the scaled number into a valid integer index.
