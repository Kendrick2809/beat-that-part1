var madLibsAdjectivesMain = function (input) {
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.
  var arrRandomAdj = [];
  var randomAdj = "";

  var splitInput = input.split(" ");
  console.log(splitInput);

  arrRandomAdj = arrRandomAdj.concat(splitInput);

  console.log(arrRandomAdj);

  var arrayLength = arrRandomAdj.length;

  console.log(arrayLength);

  var getRandomIndex = function () {
    // create a random number from zero to array length minus one.
    // this number is in the range from the first
    // index (zero) to the last index (array length minus one)
    var randomIndex = Math.floor(Math.random() * arrayLength);
    console.log(randomIndex);
    return randomIndex;
  };

  randomAdj = arrRandomAdj[getRandomIndex()];

  var madLib =
    '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
    randomAdj +
    " wife.";

  return madLib;
};

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.
  var arrRandomAdj = [];
  var arrRandomNoun = [];
  var arrRandomAdverb = [];
  var arrRandomExclamation = [];
  var randomAdj = "";
  var randomNoun = "";
  var randomAdverb = "";
  var randomExclamation = "";

  if (input == "adverb") {
  }

  var splitInput = input.split(" ");
  console.log(splitInput);

  arrRandomAdj = arrRandomAdj.concat(splitInput);

  console.log(arrRandomAdj);

  var arrayLength = arrRandomAdj.length;

  console.log(arrayLength);

  var getRandomIndex = function () {
    // create a random number from zero to array length minus one.
    // this number is in the range from the first
    // index (zero) to the last index (array length minus one)
    var randomIndex = Math.floor(Math.random() * arrayLength);
    console.log(randomIndex);
    return randomIndex;
  };

  randomAdj = arrRandomAdj[getRandomIndex()];

  var madLib = `${randomExclamation}! he said ${randomAdverb} as he jumped into his convertible ${randomNoun} and drove off with his ${randomAdj} wife.`;

  return madLib;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
