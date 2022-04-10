var currentGameMode = "waiting for user name";
var userName = "";
var mode = "";

// get a randomised number
var generateRandomInteger = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

// define variables for scissors papers stone
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone;";
var REVERSED_SCISSORS = "reversed scissors";
var REVERSED_PAPER = "reversed paper";
var REVERSED_STONE = "reversed stone;";

// define random computer output for scissors paper stone
var generateRandomOutput = function () {
  var randomOutput = generateRandomInteger();
  if (randomOutput === 1) {
    return SCISSORS;
  }
  if (randomOutput === 2) {
    return PAPER;
  }
  if (randomOutput === 3) {
    return STONE;
  }
};

// write a function that return icon when player or computer choose certain function
var getObjectIcon = function (object) {
  if (object == SCISSORS || object == REVERSED_SCISSORS) {
    return "✂️";
  }
  if (object == STONE || object == REVERSED_STONE) {
    return "🪦";
  }
  if (object == PAPER || object == REVERSED_PAPER) {
    return "🗒";
  }
};

//define game state
var main = function (input) {
  var myOutputValue = "";

  if (userName == "") {
    //set the name
    userName = input;

    myOutputValue = `Hello, ${userName} <br><br> The game is Scissors Paper Stone. ✌✋✊ <br><br> Enter 1 for normal Scissors Paper Stone. <br> Enter 2 for muk-jji-ppa.`;
    //define output after set username
    return myOutputValue;
  }
  // If game mode is not yet set, accept user's second input the mode, and
  // return an output that prompts the user to start playing SPS.
  if (mode == "") {
    mode = input;
    myOutputValue = `You choose mode ${input}`;
    return myOutputValue;
  }
  //code if gameType SPS is choosen
  if (mode == 1) {
    var myGuess = input;
    var comOutput = generateRandomOutput();
    var genericOutput = `You choose: ${myGuess} ${getObjectIcon(myGuess)}.<br> The computer choose: ${comOutput} ${getObjectIcon(comOutput)}.`;

    if (
      (myGuess === SCISSORS && comOutput === PAPER) ||
      (myGuess === PAPER && comOutput === STONE) ||
      (myGuess === STONE && comOutput === SCISSORS) ||
      (myGuess === REVERSED_SCISSORS && comOutput === STONE) ||
      (myGuess === REVERSED_STONE && comOutput === PAPER) ||
      (myGuess === REVERSED_PAPER && comOutput === SCISSORS)
    ) {
      return `${genericOutput} <br><br> You Win! <br><br> Now you can type "scissors" "paper" or "stone" to play another round!`;
    }
    if (
      (comOutput === SCISSORS && myGuess === PAPER) ||
      (comOutput === PAPER && myGuess === STONE) ||
      (comOutput === STONE && myGuess === SCISSORS) ||
      (comOutput === REVERSED_SCISSORS && myGuess === STONE) ||
      (comOutput === REVERSED_STONE && myGuess === PAPER) ||
      (comOutput === REVERSED_PAPER && myGuess === SCISSORS)
    ) {
      return `${genericOutput} <br><br> You Lose, Bummer! <br><br> Now you can type "scissors" "paper" or "stone" to play another round!`;
    }
    if (
      (comOutput === SCISSORS && myGuess === SCISSORS) ||
      (comOutput === PAPER && myGuess === PAPER) ||
      (comOutput === STONE && myGuess === STONE) ||
      (comOutput === REVERSED_SCISSORS && myGuess === SCISSORS) ||
      (comOutput === REVERSED_STONE && myGuess === STONE) ||
      (comOutput === REVERSED_PAPER && myGuess === PAPER)
    ) {
      return `${genericOutput} <br><br> You Draw <br><br> Now you can type "scissors" "paper" or "stone" to play another round!`;
    }
    return 'Please choose either "scissors" "paper" or "stone"';
  };
  }


  //code if gameType mukjiba is choosen
  if (mode == 2) {
    var myGuess = input;
    var comOutput = generateRandomOutput();
    var genericOutput = `You choose: ${myGuess} ${getObjectIcon(myGuess)}.<br> The computer choose: ${comOutput} ${getObjectIcon(comOutput)}.`;

    if (
      (myGuess === SCISSORS && comOutput === PAPER) ||
      (myGuess === PAPER && comOutput === STONE) ||
      (myGuess === STONE && comOutput === SCISSORS) ||
      (myGuess === REVERSED_SCISSORS && comOutput === STONE) ||
      (myGuess === REVERSED_STONE && comOutput === PAPER) ||
      (myGuess === REVERSED_PAPER && comOutput === SCISSORS)
    ) {
      return `${genericOutput} <br><br> You Win! <br><br> Now you can type "scissors" "paper" or "stone" to play another round!`;
    }
    if (
      (comOutput === SCISSORS && myGuess === PAPER) ||
      (comOutput === PAPER && myGuess === STONE) ||
      (comOutput === STONE && myGuess === SCISSORS) ||
      (comOutput === REVERSED_SCISSORS && myGuess === STONE) ||
      (comOutput === REVERSED_STONE && myGuess === PAPER) ||
      (comOutput === REVERSED_PAPER && myGuess === SCISSORS)
    ) {
      return `${genericOutput} <br><br> You Lose, Bummer! <br><br> Now you can type "scissors" "paper" or "stone" to play another round!`;
    }
    if (
      (comOutput === SCISSORS && myGuess === SCISSORS) ||
      (comOutput === PAPER && myGuess === PAPER) ||
      (comOutput === STONE && myGuess === STONE) ||
      (comOutput === REVERSED_SCISSORS && myGuess === SCISSORS) ||
      (comOutput === REVERSED_STONE && myGuess === STONE) ||
      (comOutput === REVERSED_PAPER && myGuess === PAPER)
    ) {
      return `${genericOutput} <br><br> You Draw <br><br> Now you can type "scissors" "paper" or "stone" to play another round!`;
    }
    return 'Please choose either "scissors" "paper" or "stone"';
  };
  }
//now we have the name, set the mode
