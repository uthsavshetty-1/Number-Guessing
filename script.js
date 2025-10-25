// =====================
// Identity / Branding
// =====================
const creator = "Uthsav N Shetty - Project ID: UN123";

// =====================
// Game Variables
// =====================
let maxNumber = 100;        // Maximum number based on difficulty
let maxAttempts = 7;        // Attempts allowed based on difficulty
let numberToGuess = Math.floor(Math.random() * maxNumber) + 1;
let attemptsLeft = maxAttempts;

// =====================
// DOM Elements
// =====================
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const guessInput = document.getElementById('guessInput');
const difficultySelect = document.getElementById('difficulty');

// =====================
// Update Game on Difficulty Change
// =====================
difficultySelect.addEventListener('change', function() {
    maxNumber = parseInt(this.value); // 50, 100, 200
    maxAttempts = parseInt(this.selectedOptions[0].dataset.attempts);
    numberToGuess = Math.floor(Math.random() * maxNumber) + 1;
    attemptsLeft = maxAttempts;

    attemptsDisplay.textContent = `Attempts left: ${attemptsLeft}`;
    message.textContent = `Range updated! Guess a number between 1 and ${maxNumber}.`;
    guessInput.value = '';
    guessInput.disabled = false; // enable input if disabled
});

// =====================
// Function to Check User Guess
// =====================
function checkGuess() {
    let guess = parseInt(guessInput.value);

    // Input validation
    if (isNaN(guess) || guess < 1 || guess > maxNumber) {
        message.textContent = `Please enter a number between 1 and ${maxNumber}.`;
        return;
    }

    attemptsLeft--;
    attemptsDisplay.textContent = `Attempts left: ${attemptsLeft}`;

    // Guess feedback
    if (guess < numberToGuess) {
        message.textContent = "Too low! Try again.";
    } else if (guess > numberToGuess) {
        message.textContent = "Too high! Try again.";
    } else {
        message.textContent = `Correct! You guessed it. 🎉 Created by ${creator}`;
        attemptsDisplay.textContent = `Attempts used: ${maxAttempts - attemptsLeft}`;
        guessInput.disabled = true; // stop input after win
        return;
    }

    // Game over
    if (attemptsLeft === 0) {
        message.textContent = `Game over! The number was ${numberToGuess}.`;
        guessInput.disabled = true; // stop input after loss
    }
}

// =====================
// Optional: Restart Game Function
// =====================
function restartGame() {
    numberToGuess = Math.floor(Math.random() * maxNumber) + 1;
    attemptsLeft = maxAttempts;
    guessInput.value = '';
    guessInput.disabled = false;
    message.textContent = `Game restarted! Guess a number between 1 and ${maxNumber}.`;
    attemptsDisplay.textContent = `Attempts left: ${attemptsLeft}`;
}
