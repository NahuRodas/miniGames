const min = 1, max = 100;
let     userGuess = 0, number = 0, 
        guessButton = document.getElementById("guess"), 
        screen = document.getElementById("screen"),
        newButton = document.getElementById("new"),
        userInput = document.getElementById("user"),
        curentGuess = document.getElementById("currentGuess"),
        counter = 0;

number = Math.floor(Math.random() * max + 1);

function submit() {
    userGuess = Number(userInput.value);
    curentGuess.textContent = userGuess;

    if ( isNaN(userGuess) || userGuess < min || userGuess > max ) {
        screen.textContent = "You must enter a Number in between 1 and 100.";
        curentGuess.textContent = "Bruh";
    }else if (userGuess < number) {
        screen.textContent = "The Number is higher.";
        counter ++;
    }else if (userGuess > number) {
        screen.textContent = "The Number is lower.";
        counter ++;
    }else{
        screen.textContent = "Correct! The number is " + number + "! (Amount of guesses " + counter + ")";

    }

    userInput.value = "";
}

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
       submit();
    }
  });

guessButton.onclick = function() {
    submit();
}

newButton.onclick = function(){
    number = Math.floor(Math.random() * max + 1);
    curentGuess.textContent = "";
    screen.textContent = "Enter any number (1 to 100) to start!";
}