// Simple number guessing game using HTML input and buttons

// Get references to HTML elements
const startButton = document.getElementById("start-button");
const submitButton = document.getElementById("submit-button");
const guessInput = document.getElementById("guess");
const messageBox = document.getElementById("message");

let secretNumber = 0; // The secret number to guess
let attempts = 0;     // Number of attempts
let gameActive = false; // Is the game running?

// Start the game when the "Start Game" button is clicked
startButton.addEventListener("click", function() {
  // Generate a random number between 1 and 10
  secretNumber = Math.floor(Math.random() * 10) + 1;
  console.log(secretNumber);
  attempts = 0;
  gameActive = true;
  messageBox.textContent = "Game started! Enter your guess.";
  guessInput.value = "";
  guessInput.disabled = false;
});

// Handle the guess when the "Submit" button is clicked
submitButton.addEventListener("click", function() {
  // Only allow guessing if the game is active
  if (!gameActive) {
    messageBox.textContent = "Click 'Start Game' to play!";
    return;
  }

  // Get the player's guess and convert it to a number
  const guess = Number(guessInput.value);

  // Check if the guess is valid
  if (guess < 1 || guess > 10 || isNaN(guess)) {
    messageBox.textContent = "Please enter a number between 1 and 10.";
    return;
  }

  // Increase the attempt count
  attempts = attempts + 1;

  // Check the guess
  if (guess === secretNumber) {
    // Player guessed correctly
    if (attempts > 1) {
      messageBox.textContent = `🎉 Congratulations! You guessed it in ${attempts} attempts.`;
    } else {
      messageBox.textContent = `🎉 Congratulations! You guessed it in ${attempts} attempt.`;
    }
    gameActive = false;
    guessInput.disabled = true;
  } else if (guess < secretNumber) {
    // Guess is too low
    messageBox.textContent = "Too low! Try again.";
  } else {
    // Guess is too high
    messageBox.textContent = "Too high! Try again.";
  }
});