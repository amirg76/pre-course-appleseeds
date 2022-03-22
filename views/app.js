figlet(inputText, "Standard", function (err, text) {
  if (err) {
    console.log("something went wrong...");
    console.dir(err);
    return;
  }
  console.log(text);
});

// const bodyParser = require("body-parser");
// const { red } = require("color-name");
// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.static("public"));
// app.use("/js", express.static(__dirname + "public/js"));

// //Set Views
// app.set("views", "./views");
// app.set("view engine", "ejs");

// // app.get("", (req, res) => {
// //   res.sendFile(__dirname + "/views/index.html");
// // });

// app.listen(port, () => console.info(`Listening on port ${port}`));

// figlet("HANG MAN", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }

// figlet.text(
//   "HANG MAN",
//   {
//     font: "Ghost",
//     horizontalLayout: "default",
//     verticalLayout: "default",
//     width: 150,
//     whitespaceBreak: true,
//   },
//   function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }

//     console.log(data);
//     app.get("", (req, res) => {
//       res.render("index", { text: data });
//     });
//   }
// );

//// GAME CODE
// Guess the word one letter at a time.
// wrong ten times.

// Create a variable to store the number of bad guesses
var bad_guesses = 0;
// Create another array to store good guesses
var good_guesses = [];

// Prompt Player 1 to enter a word to guess and store
// as a variable.
// TODO: put this in a loop until a valid response is received.
var secret_word = prompt("Player 1: Enter your secret word.");
var secret_words = [
  "java",
  "script",
  "html",
  "css",
  "react",
  "developer",
  "nodejs",
  "appleseeds",
  "bootcamp",
  "coding",
];

// Fill this array with placeholders for guessing
for (i = 0; i < secret_word.length; i++) {
  good_guesses.push("_");
}

// for (i = 0; i < secret_words[i].length; i++) {
//   good_guesses.push("_");
// }
// Start a loop that continues as long as the person has
// not guessed wrong ten times, or all of the letters have
// been guessed.
while (bad_guesses !== 10 && good_guesses.indexOf("_") !== -1) {
  // Prompt Player 2 to guess a letter and store as
  // a variable.
  // TODO: put this in a loop until a valid response is received.
  var guess = prompt(
    good_guesses.join(" ") + "\n\n" + "Player 2: Guess a letter."
  );

  // If the letter does not exist in the word,
  // add it to the bad guesses.
  if (secret_word.indexOf(guess) === -1) {
    bad_guesses++;
    alert("Bad guess!");

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
if (bad_guesses === 3) {
  alert("Sorry, please play again!");
} else {
  alert("Congratulations on your win!");
}
alert("The secret word was " + secret_word);
