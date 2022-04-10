//create rolldice function as per dice input
var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var myOutputValue = "";
var status = "";
var p1Array = [];
var p2Array = [];
var order = "";

var main = function (input) {
  if (!status) {
    var p1FirstDice = rollDice();
    var p1SecondDice = rollDice();
    status = "Player1Rolled";
    p1Array = [p1FirstDice, p1SecondDice];
    return `Welcome Player 1. <br> You rolled ${p1FirstDice} for Dice 1 and ${p1SecondDice} for Dice 2.<br>Choose the order of the dice by entering "1" or "2".<br>`;
  }

  if (status == "Player1Rolled") {
    order = input;
    status = "Player1Finish";

    if (order == "1") {
      var p1DiceValue = Number(p1Array.join(""));
      return `🎲 PLAYER 1 🎲<br><br>You chose Dice 1 first. Your number is ${p1DiceValue}.<br><br>It is now Player 2's turn.`;
    } else if (order == "2") {
      p1Array = [p1Array[1], p1Array[0]];
      var p1DiceValue = Number(p1Array.join(""));
      return `🎲 PLAYER 1 🎲<br><br>You chose Dice 2 first. Your number is ${p1DiceValue}.<br><br>It is now Player 2's turn.`;
    } else {
      return 'Please choose either "1" or "2" for the order.';
    }
  }

  if (status == "Player1Finish") {
    var p2FirstDice = rollDice();
    var p2SecondDice = rollDice();
    status = "Player2Rolled";
    p2Array = [p2FirstDice, p2SecondDice];
    return `Welcome Player 2. <br> You rolled ${p2FirstDice} for Dice 1 and ${p2SecondDice} for Dice 2.<br>Choose the order of the dice by entering "1" or "2".<br>`;
  }

  if (status == "Player2Rolled") {
    status = "Player2Finish";
    if (order == "1") {
      var p2DiceValue = Number(p2Array.join(""));
      return `🎲 PLAYER 2 🎲<br><br>You chose Dice 1 first. Your number is ${p2DiceValue}.<br><br>Click "Submit" to see the result.`;
    } else if (order == "2") {
      p1Array = [p1Array[1], p1Array[0]];
      var p2DiceValue = Number(p2Array.join(""));
      return `🎲 PLAYER 2 🎲<br><br>You chose Dice 2 first. Your number is ${p2DiceValue}.<br><br>Click "Submit" to see the result.`;
    } else {
      return 'Please choose either "1" or "2" for the order.';
    }
  }
  
  if(status== "Player2Finish")

  
};

//make it as an array with sort. and then reverse it. and then join it
