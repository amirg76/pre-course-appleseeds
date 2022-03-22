//// GAME CODE
// Guess the word one letter at a time.
// wrong ten times.

// Create a variable to store the number of bad guesses
var bad_guesses = 10;
// Create array to store good guesses
var good_guesses = [];
// Create another array to store words pool
var secret_words = [
  "java",
  "script",
  "html",
  "css",
  "react",
  "developer",
  "nodejs",
  "apples",
  "bootcamp",
  "coding",
];

//choise random word from array and put in secret word
var randomNumber = Math.floor(Math.random() * 10);
var secret_word = secret_words[randomNumber];
////
var sameGuess = true; //check for decrease gusess
var doubleWord = 0; //check to see which prompt active

// Fill this array with placeholders for guessing
for (i = 0; i < secret_word.length; i++) {
  good_guesses.push("__");
}

// Start a loop that continues as long as the person has
// not guessed wrong ten times, or all of the letters have
// been guessed.
while (bad_guesses !== 0 && good_guesses.indexOf("__") !== -1) {
  ///////////////////////
  // Prompt Player to enter a word to guess and store
  // as a variable.
  if (!doubleWord) {
    var guess = prompt(
      `You have ${bad_guesses} guesses` +
        "\n\n" +
        "The word is:  " +
        `${good_guesses}`
    );
  }

  // function to check worng letters
  function allLetter(inputtxt) {
    var letters = /^[A-Za-z]+$/;
    if (inputtxt.match(letters)) {
      return true;
    } else {
      return false;
    }
  }
  //send to check worng letters
  var checkLetters = allLetter(guess);

  //   check if length and letters is not ok
  if (guess.length > 1 || !checkLetters) {
    guess = prompt(
      "Please enter only one character" +
        "\n\n" +
        `You have ${bad_guesses} guesses` +
        "\n\n" +
        "The word is:  " +
        //   "\n\n" +
        `${good_guesses}`
    );
    sameGuess = false;
    doubleWord = 1;
  } else {
    sameGuess = true;
    doubleWord = 0;
  }
  guess = guess.toLowerCase();

  // If the letter does not exist in the word,
  // add it to the bad guesses.
  if (secret_word.indexOf(guess) === -1 && sameGuess) {
    bad_guesses--;
    sameGuess = true;

    // If the letter exists in the word, we need to
    // add it to the good guesses array
  } else {
    for (i = 0; i < secret_word.length; i++) {
      // Each time the guess letter is found, we
      // add it as a good guess in the same spot
      if (secret_word[i] === guess) {
        good_guesses[i] = guess;
      }
    }
  }
}

// Once the player has exited the loop, congratulate
// them on a win, or tell them they have lost and show
// the secret word.

if (bad_guesses === 0) {
  alert("Sorry, please play again!");
  alert("The secret word was " + secret_word);
} else {
  alert("Wow You are good!!!");
}
