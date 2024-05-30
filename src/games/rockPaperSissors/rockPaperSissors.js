let user_choice, ai_choice, play_button, result, ai,
    rock_buton, paper_button, sissors_button, reset_button,
    rock_label, paper_label, sissors_label;

play_button = document.getElementById("play-button");
reset_button = document.getElementById("reset-button");
result = document.getElementById("result");
ai = document.getElementById("ai-choice");

rock_label = document.getElementById("rock-label");
paper_label = document.getElementById("paper-label");
sissors_label = document.getElementById("sissors-label");

ai_choice = Math.floor(Math.random() * 3 + 1)

// 1: Rock | 2: Paper | 3: Sissors

rock_button = document.getElementById("rock");
paper_button = document.getElementById("paper");
sissors_button = document.getElementById("sissors");

rock_button.onclick = function(){
    rock_label.className = "selected";
    paper_label.className = "choice-label";
    sissors_label.className = "choice-label";
}
paper_button.onclick = function(){
    paper_label.className = "selected";
    sissors_label.className = "choice-label";
    rock_label.className = "choice-label";
}
sissors_button.onclick = function(){
    sissors_label.className = "selected";
    paper_label.className = "choice-label";
    rock_label.className = "choice-label";
}

play_button.onclick = function(){
    if (rock_button.checked) {
        user_choice = 1;
        rock_label.className = "selected";
    }else if (paper_button.checked) {
        user_choice = 2;
    }else if (sissors_button.checked) {
        user_choice = 3;
    }
    if (ai_choice == 1) {
        ai.textContent ="AI choice: ROCK";
    }else if (ai_choice == 2) {
        ai.textContent ="AI choice: PAPER";
    }else if (ai_choice == 3) {
        ai.textContent ="AI choice: SISSORS";
    }

    winCondition(user_choice);
}

reset_button.onclick = function(){
    ai_choice = Math.floor(Math.random() * 3 + 1);
    ai.textContent ="AI choice:";
    result.textContent = "";
    rock_label.className = "choice-label";
    paper_label.className = "choice-label";
    sissors_label.className = "choice-label";
}

function winCondition(choice) {
    if (choice == 1 && ai_choice == 1) {
        result.textContent = "Its a DRAW"
    } else if (choice == 1 && ai_choice == 2) {
        result.textContent = "AI WIN"
    }else if (choice == 1 && ai_choice == 3) {
        result.textContent = "Player WIN"
    }else if (choice == 2 && ai_choice == 1) {
        result.textContent = "Player WIN"
    }else if (choice == 2 && ai_choice == 2) {
        result.textContent = "Its a DRAW"
    }else if (choice == 2 && ai_choice == 3) {
        result.textContent = "AI WIN"
    }else if (choice == 3 && ai_choice == 1) {
        result.textContent = "AI WIN"
    }else if (choice == 3 && ai_choice == 2) {
        result.textContent = "Player WIN"
    }else if (choice == 3 && ai_choice == 3) {
        result.textContent = "Its a DRAW"
    }  
}