
let top_left = document.getElementById("top-left"),
    top_mid = document.getElementById("top-mid"),
    top_right = document.getElementById("top-right"),
    mid_left = document.getElementById("mid-left"),
    center = document.getElementById("center"),
    mid_right = document.getElementById("mid-right"),
    bot_left = document.getElementById("bot-left"),
    bot_mid = document.getElementById("bot-mid"),
    bot_right = document.getElementById("bot-right"),
    reset_button = document.getElementById("reset"),
    player_turn = document.getElementById("turn"),
    selection = Array.from(document.getElementsByClassName("selection")),
    counter = 0,
    turn = 0; // 0: player1 - 1: player2 (or AI) 

top_left.onclick = function(){
    move(top_left);
}
top_mid.onclick = function(){
    move(top_mid);
}
top_right.onclick = function(){
    move(top_right);
}
mid_left.onclick = function(){
    move(mid_left);
}
center.onclick = function(){
    move(center);
}
mid_right.onclick = function(){
    move(mid_right);
}
bot_left.onclick = function(){
    move(bot_left);
}
bot_mid.onclick = function(){
    move(bot_mid);
}
bot_right.onclick = function(){
    move(bot_right);
}

function move(boton) {
    if (boton.textContent == "" && turn == 0) {
        boton.textContent = "X";
        turn = 1;
        counter ++;
        player_turn.textContent = "Player turn: 2";
        console.log("Player 1 move on " + boton.id);
    }else if (boton.textContent == "" && turn == 1) {
        boton.textContent = "O";
        turn = 0;
        counter ++;
        player_turn.textContent = "Player turn: 1";
        console.log("Player 2 move on " + boton.id);
    }

    winCondition();
}

reset_button.onclick = function(){
    selection.forEach(element => {
        element.textContent = "";
    });
    selection.forEach(element => {
        element.disabled = false;
        element.className = "selection";
    });
    turn = 0;
    player_turn.textContent = "Player turn: 1";
    console.log("Game restarted.");
}

function winCondition() {
    if (top_left.textContent == "X" && top_mid.textContent == "X" && top_right.textContent == "X") {
        player_turn.textContent = "Player 1 WIN";
        endGame();
    } else if (top_left.textContent == "O" && top_mid.textContent == "O" && top_right.textContent == "O") {
        player_turn.textContent = "Player 2 WIN";
        endGame();
    }else if (mid_left.textContent == "X" && center.textContent == "X" && mid_right.textContent == "X") {
        player_turn.textContent = "Player 1 WIN";
        endGame();
    }else if (mid_left.textContent == "O" && center.textContent == "O" && mid_right.textContent == "O") {
        player_turn.textContent = "Player 2 WIN";
        endGame();
    }else if (bot_left.textContent == "X" && bot_mid.textContent == "X" && bot_right.textContent == "X") {
        player_turn.textContent = "Player 1 WIN";
        endGame();
    }else if (bot_left.textContent == "O" && bot_mid.textContent == "O" && bot_right.textContent == "O") {
        player_turn.textContent = "Player 2 WIN";
        endGame();
    }else if (top_left.textContent == "X" && mid_left.textContent == "X" && bot_left.textContent == "X") {
        player_turn.textContent = "Player 1 WIN";
        endGame();
    }else if (top_left.textContent == "O" && mid_left.textContent == "O" && bot_left.textContent == "O") {
        player_turn.textContent = "Player 2 WIN";
        endGame();
    }else if (top_mid.textContent == "X" && center.textContent == "X" && bot_mid.textContent == "X") {
        player_turn.textContent = "Player 1 WIN";
        endGame();
    }else if (top_mid.textContent == "O" && center.textContent == "O" && bot_mid.textContent == "O") {
        player_turn.textContent = "Player 2 WIN";
        endGame();
    }else if (top_right.textContent == "X" && mid_right.textContent == "X" && bot_right.textContent == "X") {
        player_turn.textContent = "Player 1 WIN";
        endGame();
    }else if (top_right.textContent == "O" && mid_right.textContent == "O" && bot_right.textContent == "O") {
        player_turn.textContent = "Player 2 WIN";
        endGame();
    }else if (top_left.textContent == "X" && center.textContent == "X" && bot_right.textContent == "X") {
        player_turn.textContent = "Player 1 WIN";
        endGame();
    }else if (top_left.textContent == "O" && center.textContent == "O" && bot_right.textContent == "O") {
        player_turn.textContent = "Player 2 WIN";
        endGame();
    }else if (top_right.textContent == "X" && center.textContent == "X" && bot_left.textContent == "X") {
        player_turn.textContent = "Player 1 WIN";
        endGame();
    }else if (top_right.textContent == "O" && center.textContent == "O" && bot_left.textContent == "O") {
        player_turn.textContent = "Player 2 WIN";
        endGame();
    }
}

function endGame() {
    selection.forEach(element => {
        element.setAttribute("disabled", "");
        element.className = "end-game";
    });
}