var currentGameMode = "waiting for user name";
var userName = "";
var mode = "";
var determineWhoWin = "";
var gameMode = "";
var myGuess = "";

// get a randomised number
var generateRandomInteger = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

// define variables for scissors papers stone
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
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

var numGamesPlayed = 0;
var userNumGamesWon = 0;
var userNumGamesLoss = 0;

var getWinRateInfo = function () {
  var userWinRate = ((userNumGamesWon / numGamesPlayed) * 100).toFixed(2);
  var userLossRate = ((userNumGamesLoss / numGamesPlayed) * 100).toFixed(2);

  return `Times played: ${numGamesPlayed}<br>Wins: ${userNumGamesWon} (${userWinRate}%)<br>Losses: ${userNumGamesLoss} (${userLossRate}%)`;
};

// write a function that return icon when player or computer choose certain function
var getObjectIcon = function (object) {
  if (object === SCISSORS || object === REVERSED_SCISSORS) {
    return "✂️";
  }
  if (object === STONE || object === REVERSED_STONE) {
    return "🪦";
  }
  if (object === PAPER || object === REVERSED_PAPER) {
    return "🗒";
  }
};

//define game state
var main = function (input) {
  var myOutputValue = "";

  if (userName == "") {
    //set the name
    userName = input;

    return `Hello, ${userName} <br><br> The game is Scissors Paper Stone. ✌✋✊ <br><br> Enter 1 for normal Scissors Paper Stone. <br> Enter 2 for muk-jji-ppa.`;
    //define output after set username
  }
  // If game mode is not yet set, accept user's second input the mode, and
  // return an output that prompts the user to start playing SPS.
  if (!mode) {
    mode = input;
    if (mode == 1) {
      return `You choose Scisscors Paper Stone. Please input "reverse" or "regular" to select game mode.`;
    } else if (mode == 2) {
      return `You choose Muk-Jji-Ppa, Enter one of 'scissors', 'paper' or 'stone' to begin playing.`;
    } else {
      mode = "";
      return 'Please choose either mode "1" or mode "2"';
    }
  }
  //code if gameType SPS is choosen

  var REVERSE = "reverse";
  var REGULAR = "regular";

  if (mode == 1 && !gameMode) {
    gameMode = input;
    if (gameMode == REVERSE) {
      return `You are now in reverse game mode! Please select 'scissors' 'paper' or 'stone'`;
    } else if (gameMode == REGULAR) {
      return `You are now in regular game mode! Please select 'scissors' 'paper' or 'stone'`;
    } else {
      gameMode = "";
      return `Please input "reverse" or "regular" to select game mode.`;
    }
  }

  if (gameMode == REGULAR) {
    myGuess = input;
    var comOutput = generateRandomOutput();
    var genericOutput = `You choose: ${myGuess} ${getObjectIcon(
      myGuess
    )}.<br> The computer choose: ${comOutput} ${getObjectIcon(comOutput)}.`;

    if (
      (myGuess == SCISSORS && comOutput == PAPER) ||
      (myGuess == PAPER && comOutput == STONE) ||
      (myGuess == STONE && comOutput == SCISSORS)
    ) {
      userNumGamesWon += 1;
      numGamesPlayed += 1;
      return `${genericOutput} <br><br> You Win! <br><br> Now you can type "scissors" "paper" or "stone" to play another round!<br><br>${getWinRateInfo()}`;
    }
    if (
      (comOutput == SCISSORS && myGuess == PAPER) ||
      (comOutput == PAPER && myGuess == STONE) ||
      (comOutput == STONE && myGuess == SCISSORS)
    ) {
      userNumGamesLoss += 1;
      numGamesPlayed += 1;
      return `${genericOutput} <br><br> You Lose, Bummer! <br><br> Now you can type "scissors" "paper" or "stone" to play another round!<br><br>${getWinRateInfo()}`;
    }
    if (
      (comOutput == SCISSORS && myGuess == SCISSORS) ||
      (comOutput == PAPER && myGuess == PAPER) ||
      (comOutput == STONE && myGuess == STONE)
    ) {
      return `${genericOutput} <br><br> You Draw. Try Again! <br><br> Now you can type "scissors" "paper" or "stone" to play another round!`;
    }
    return 'Please choose either "scissors" "paper" or "stone"';
  }
  if (gameMode == REVERSE) {
    myGuess = input;
    var comOutput = generateRandomOutput();
    var genericOutput = `You choose: ${myGuess} ${getObjectIcon(
      myGuess
    )}.<br> The computer choose: ${comOutput} ${getObjectIcon(comOutput)}.`;

    if (
      (myGuess == SCISSORS && comOutput == STONE) ||
      (myGuess == STONE && comOutput == PAPER) ||
      (myGuess == PAPER && comOutput == SCISSORS)
    ) {
      userNumGamesWon += 1;
      numGamesPlayed += 1;
      return `${genericOutput} <br><br> You Win! <br><br> Now you can type "scissors" "paper" or "stone" to play another round!<br><br>${getWinRateInfo()}`;
    }
    if (
      (comOutput == SCISSORS && myGuess == STONE) ||
      (comOutput == STONE && myGuess == PAPER) ||
      (comOutput == PAPER && myGuess == SCISSORS)
    ) {
      userNumGamesLoss += 1;
      numGamesPlayed += 1;
      return `${genericOutput} <br><br> You Lose, Bummer! <br><br> Now you can type "scissors" "paper" or "stone" to play another round!<br><br>${getWinRateInfo()}`;
    }
    if (
      (comOutput == SCISSORS && myGuess == SCISSORS) ||
      (comOutput == STONE && myGuess == STONE) ||
      (comOutput == PAPER && myGuess == PAPER)
    ) {
      return `${genericOutput} <br><br> You Draw. Try Again! <br><br> Now you can type "scissors" "paper" or "stone" to play another round!`;
    }
    return 'Please choose either "scissors" "paper" or "stone"';
  }

  //code if gameType mukjiba is choosen
  if (mode == 2) {
    var myGuess = input;

    var comOutput = generateRandomOutput();

    var genericOutput = `You choose: ${myGuess} ${getObjectIcon(
      myGuess
    )}.<br> The computer choose: ${comOutput} ${getObjectIcon(comOutput)}.`;

    if (
      (myGuess == SCISSORS && comOutput == PAPER) ||
      (myGuess == PAPER && comOutput == STONE) ||
      (myGuess == STONE && comOutput == SCISSORS)
    ) {
      determineWhoWin = "usernameWin";
      return `MUK 묵! ✊ JJI 찌! ✌ PPA 빠! ✋<br><br> ${genericOutput} <br><br> ${userName}: "Muk-jji-ppa!" <br><br>`;
    }

    if (
      (comOutput == SCISSORS && myGuess == PAPER) ||
      (comOutput == PAPER && myGuess == STONE) ||
      (comOutput == STONE && myGuess == SCISSORS)
    ) {
      determineWhoWin = "computerWin";
      return `MUK 묵! ✊ JJI 찌! ✌ PPA 빠! ✋<br><br> ${genericOutput} <br><br> Computer: "Muk-jji-ppa!" <br><br>`;
    }

    if (
      determineWhoWin == "usernameWin" &&
      ((comOutput == SCISSORS && myGuess == SCISSORS) ||
        (comOutput == PAPER && myGuess == PAPER) ||
        (comOutput == STONE && myGuess == STONE))
    ) {
      userNumGamesWon += 1;
      numGamesPlayed += 1;
      return `MUK 묵! ✊ JJI 찌! ✌ PPA 빠! ✋<br><br>${genericOutput} <br><br> You Win! Congrats! :D <br><br> Play again?<br><br>${getWinRateInfo()}`;
    }

    if (
      determineWhoWin == "computerWin" &&
      ((comOutput == SCISSORS && myGuess == SCISSORS) ||
        (comOutput == PAPER && myGuess == PAPER) ||
        (comOutput == STONE && myGuess == STONE))
    ) {
      userNumGamesLoss += 1;
      numGamesPlayed += 1;
      return `MUK 묵! ✊ JJI 찌! ✌ PPA 빠! ✋<br><br>${genericOutput} <br><br> Yon lost! Oh well :( The computer is gloating in victory. Play again?<br><br>${getWinRateInfo()}`;
    }

    if (myGuess !== SCISSORS || myGuess !== PAPER || myGuess !== STONE) {
      return `You didn't enter a valid choice. The game is Scissors Paper Stone!<br><br>Don't be nervous! Enter one of 'scissors', 'paper' or 'stone'. ✌✋✊`;
    }
  }
};
//now we have the name, set the mode
