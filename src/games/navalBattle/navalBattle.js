let user_selection, ai_selection,ai_option_1,ai_option_2,ai_option_3,ai_option_4,ai_option_5,
    ready_button, reset_button, running = true, aux = 0, player_choices = [], ai_choices = [];
let ai_options = Array.from(document.getElementsByClassName("ai-field"));
let player_options = Array.from(document.getElementsByClassName("player-field"));
let amount_p_ships = 0;
let screen = document.getElementById("screen");
let breaker = 0;
let end_game = true;
let sin_ship_ai = 0, sin_ship_p = 0;
    
ready_button = document.getElementById("ready-button");
reset_button = document.getElementById("reset-button");
ai_options.forEach(element => {
    ai_choices[aux] = element.id;
    aux++;
});
aux = 0;
player_options.forEach(element => {
    player_choices[aux] = element;
    aux++;
});

    // PLAYER SHIPS POSITIONING
game();
function game() {
    console.log("Player ships positioning.")
    window.onclick = e => {
    
        if (e.target.className == "square player-field" && e.target.textContent == "") {
            e.target.textContent = "⛴";
            amount_p_ships ++;
            console.log("Ship on " + e.target.id);
        }else if (e.target.className == "square player-field" && e.target.textContent == "⛴") {
            e.target.textContent = "";
            amount_p_ships --;
            console.log("Ship out of " + e.target.id);
        }
    } 
}


function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

    // AI boats placement
function generateAiChoice() {
    ai_choices = shuffle(ai_choices);

    for (let index = 0; index < 5; index++) {
        ai_options.forEach(element => {
            element.className ="square hidden ai-field"
            if (element.id == ai_choices[index]) {
                element.textContent = "⛴";
                console.log("⛴ en " + ai_choices[index]);
            }
        }); 
    }
}

function aiTurn() {
    let ai_shot = Math.floor(Math.random() * (player_choices.length)); 
    console.log("AI hit on " + player_choices[ai_shot].id);

    while(player_choices[ai_shot].className == "square player-field hit" || player_choices[ai_shot].className == "square player-field water") {
        ai_shot = Math.floor(Math.random() * (player_choices.length));
        if (breaker === 25) {
            break;
        }
    }

    if (player_choices[ai_shot].textContent == "⛴") {
        player_choices[ai_shot].className = "square player-field hit";
        sin_ship_p ++;
        breaker++;
    }else{
        player_choices[ai_shot].className = "square player-field water";
        player_choices[ai_shot].textContent = "X";
        breaker++;
    }
}

function playerTurn() {
    window.onclick = e => {
        if (e.target.textContent == "⛴" && e.target.className == "square hidden ai-field") {
            e.target.className = "hit";
            sin_ship_ai ++;
            if (sin_ship_ai == 5) {
                screen.textContent = "PLAYER WIN";
                stopGame();
            }
            aiTurn();
            player_options.forEach(element => {
                if (element.className === "hit") {
                    sin_ship_p++;
                    console.log("Player ships destroyed : " + sin_ship_p);
                }
            });
            if(sin_ship_p == 5){
                screen.textContent = "AI WIN";
                stopGame();
            }
        }else if (e.target.textContent == "" && e.target.className == "square hidden ai-field") {
            e.target.className = "water"
            e.target.textContent ="X"
            aiTurn();
            player_options.forEach(element => {
                if (element.className === "hit") {
                    sin_ship_p++;
                    console.log("Player ships destroyed : " + sin_ship_p);
                }
            });
            if(sin_ship_p == 5){
                screen.textContent = "AI WIN";
                stopGame();
            }
        }
    } 
}

function stopGame() {
    ai_options.forEach(element => {
        element.className = "not-ready end-game";
    });
    player_options.forEach(element => {
        element.className = "not-ready end-game";
    });
}


reset_button.onclick = function(){
    breaker = 0;
    sin_ship_ai = 0;
    sin_ship_p = 0;
    screen.textContent = "Place 5 ships on your side, then press Ready."
    ai_options.forEach(element => {
        element.className = "square hidden ai-field";
        element.textContent = "";
    });
    player_options.forEach(element => {
        element.className = "square player-field";
        element.textContent = "";
    });
    game();
}

ready_button.onclick = function(){
    
    

    if (amount_p_ships !== 5) {
        screen.textContent = "Please place 5 ships, no more no less."
    }else{
        generateAiChoice()
        screen.textContent = "Sink your opponents ships by clicking on a squere in their side!";
        playerTurn();
    }
}

