// Attempt the Follow Along exercise from the Arrays module below with followArraysMain as the main function.
// Store guesses in a global array that persists across Submits.
var guesses = [];

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var followArraysMain = function (userInput) {
  // Add the user's guess to the guesses array.
  guesses.push(userInput);
  // Generate a random dice number.
  var randomDiceNumber = rollDice();
  // Initialise output to communicate loss.
  // Output the record of all guesses regardless of loss or win.
  var myOutputValue = "You lose. Your guesses: " + guesses;
  // If the guess matches the dice roll, change output to communicate win.
  if (randomDiceNumber == userInput) {
    myOutputValue = "You win. Your guesses: " + guesses;
  }
  // Return output value.
  return myOutputValue;
};

var followArraysLoopsMain = function (userInput) {
  // Attempt the Follow Along exercise from the Looping Over An Array module below with followArraysLoopsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
