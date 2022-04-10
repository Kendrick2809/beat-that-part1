// Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
// global scope
var globalVariable = 0;

// also global scope
var introScopeMain = function (input) {
  let localVariable = input;
  typeof input === 'number';
  // function scope
  console.log(
    `globalVariable has a value of ${globalVariable}, localVariable has a value of ${localVariable}`
  );
  // we can manipulate the value of a global varaible
  // without having to re-declare using the var keyword:

  globalVariable += 1;
  localVariable += 2;

  console.log(
    `globalVariable now has a value of ${globalVariable}, localVariable now has a value of ${localVariable}`
  );
  var myOutputValue;
  if (globalVariable % 2 == 0) {
    // block scope
    // we can access both myOutputValue and globalVariable within block scope
    myOutputValue = `Global variable is even, with a value of ${globalVariable}`;
  } else {
    myOutputValue = `Global variable is odd, with a value of ${globalVariable}`;
  }
  return myOutputValue;
};

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
var previousDiceRoll = randomDiceNumber ;

for (let i=0; i<5;i++) {
var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  
    var randomDiceNumber = rollDice();
   
    if (randomDiceNumber == input && i=1)
    {
      myOutputValue = 'You just rolled a ${randomDiceNumber}. You guessed ${input}. You win on your first roll!';
      i=5;
    }
  
    if (randomDiceNumber == input && i>1)
    {
      myOutputValue = 'Your last roll was ${previousDiceRoll}. You just rolled a ${randomDiceNumber}. You guessed ${input}. You win!';
    }

    if (randomDiceNumber != input)
    {'Your last roll was ${previousDiceRoll}. You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose!'
    }
return myOutputValue;
  };



var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
