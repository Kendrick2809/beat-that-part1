var rollDice = function () {
  return mathFloor(mathRandom() * 6) + 1;
};

var lucky11Main = function (guess) {
  var dice1 = rollDice();
  var dice2 = rollDice();
  var message = `Dice1: ${dice1}. Dice2: ${dice2};`;
  if (guess == dice1 || guess == dice2 || dice1 + dice2 == 11) {
    return `${message} You win`;
  }
  return `${message} You lose`;
};
// Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var generateRandomInteger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var generateRandomHawkerDish = function () {
  var numDishesInRepertoire = 6;
  var randomDishNum = generateRandomInteger(numDishesInRepertoire);
  if (randomDishNum == 1) {
    return "chicken rice";
  }
  // "else if" is implied in the following if statements because we return in each if statement.
  if (randomDishNum == 2) {
    return "roti prata";
  }
  if (randomDishNum == 3) {
    return "nasi lemak";
  }
  if (randomDishNum == 4) {
    return "hokkien mee";
  }
  if (randomDishNum == 5) {
    return "bak kut teh";
  }
  if (randomDishNum == 6) {
    return "laksa";
  }
  // If we reach this line, randomDishNum was invalid.
  return "Oops! There was a bug!";
};

var hawkerFoodRandomnessMain = function (hawkerDishGuess) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var randomHawkerDish = generateRandomHawkerDish();
  var genericOutput = `Your guess: ${hawkerDishGuess}. Uncle's dish: ${randomHawkerDish}.`;
  if (hawkerDishGuess == randomHawkerDish) {
    return `${genericOutput} You get a free meal!`;
  }
  return `${genericOutput} There is no free lunch!`;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
