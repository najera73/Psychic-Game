//array of computer choices (is there an easier way to do this?)
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//on window open, randomizes computer guess from computerChoices array
window.onload = function() {
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess[0]);
}

//Variables for tracking players wins, losses, & guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];
var playerGuess = [];


//begining of game coding
document.onkeyup = function(event) {
	var playerGuess = event.key;
	lettersGuessed.push(playerGuess);
	console.log(playerGuess);
	//displays playerGuess - Wow I did a thing!
	document.getElementById("display-text").innerHTML = playerGuess
}
//win/lose situation doesn't work properly
if ((playerGuess === computerGuess) && (guessesLeft > 0)) {
  	wins++;
	guessesLeft = 9;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
	//I don't know what I'm doing but thought this would display the guessesLeft number
	document.querySelector('#guesses-remaining').innerHTML = guessesLeft;
}

else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) 
   guessesLeft = guessesLeft-1;

else 
	losses++;
	guessesLeft = 9;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	//console.log(computerGuess[0]);


//When the player wins, increase the Wins counter and start the game over again (without refreshing the page

//When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins