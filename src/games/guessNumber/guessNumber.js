const min = 1, max = 100;
let userGuess = 0, number = 0, button = document.getElementById("button"), screen = document.getElementById("screen");
number = Math.floor(Math.random() * 100 + 1);


button.onclick = function() {
    userGuess = Number(document.getElementById("user").value);

    if ( isNaN(userGuess) || userGuess < 1 || userGuess > 100 ) {
        screen.textContent = "You must enter a Number in between 1 and 100";
    }else if (userGuess < number) {
        screen.textContent = "The Number is higher.";
    }else if (userGuess > number) {
        screen.textContent = "The Number is lower.";
    }else{
        screen.textContent = "Correct! The number is " + number;
    }

    console.log(number);
    console.log(userGuess);
}