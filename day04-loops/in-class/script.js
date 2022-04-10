var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.

  var myOutputValue = "";
  var repeatCounter = 0;

  while (repeatCounter < input) {
    myOutputValue = myOutputValue + "Up ";
    repeatCounter += 1;
  }

  return myOutputValue;
};

///////////////////////////////////////////////////////

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = "";

  // Initialise the outer counter, outerLoopCounter
  var outerLoopCounter = 0;

  while (outerLoopCounter < input) {
    // Inside the outer loop, initialise the inner counter, innerLoopCounter
    var innerLoopCounter = 0;

    // Every time the outer loop runs, the inner loop runs repeatedly until
    // the inner loop condition is met.
    while (innerLoopCounter < input) {
      // Each time the inner loop runs, it adds "hello" to output
      myOutputValue = myOutputValue + "Up ";
      innerLoopCounter = innerLoopCounter + 1;
    }

    // At the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + "<br>";
    outerLoopCounter = outerLoopCounter + 1;
  }
  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};

////////////////////////////////////////////////////////////

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var myOutputValue = "";

  // Initialise the outer counter, outerLoopCounter
  var outerLoopCounter = 1;

  while (outerLoopCounter <= input) {
    // Inside the outer loop, initialise the inner counter, innerLoopCounter
    var innerLoopCounter = 0;

    // Every time the outer loop runs, the inner loop runs repeatedly until
    // the inner loop condition is met.
    while (innerLoopCounter < outerLoopCounter) {
      // Each time the inner loop runs, it adds "hello" to output
      myOutputValue = myOutputValue + "Up ";
      innerLoopCounter = innerLoopCounter + 1;
    }

    // At the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + "<br>";
    outerLoopCounter = outerLoopCounter + 1;
  }
  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = "";

  // Initialise the outer counter, outerLoopCounter
  var outerLoopCounter = 0;

  while (outerLoopCounter < input) {
    // Inside the outer loop, initialise the inner counter, innerLoopCounter
    var innerLoopCounter = 0;
    // Every time the outer loop runs, the inner loop runs repeatedly until
    // the inner loop condition is met.

    if (outerLoopCounter == 0 || outerLoopCounter == input - 1) {
      while (innerLoopCounter < input) {
        // Each time the inner loop runs, it adds "hello" to output
        myOutputValue = myOutputValue + "👍 ";
        innerLoopCounter = innerLoopCounter + 1;
      }
    } else {
      while (innerLoopCounter < input) {
        if (innerLoopCounter == 0 || innerLoopCounter == input - 1) {
          // Each time the inner loop runs, it adds "hello" to output
          myOutputValue = myOutputValue + "👍 ";
          innerLoopCounter = innerLoopCounter + 1;
        } else {
          myOutputValue = myOutputValue + "🤣 ";
          innerLoopCounter = innerLoopCounter + 1;
        }
      }
    }
    // At the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + "<br>";
    outerLoopCounter = outerLoopCounter + 1;
  }
  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
