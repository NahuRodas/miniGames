let banner = document.getElementById("banner");
let squares = Array.from(document.getElementsByClassName("hide-square"));
let rows = [0,1,2,3,4,5,6,7,8,9], columns = [0,1,2,3,4,5], matrix = [[]];
const trap = "📦", cheese = "🧀", close_trap = "*🧀";
let cheese_amount = 0, cheese_found = 0, reset_button;

const screen = document.createElement("h2");

reset_button = document.getElementById("reset-button");




function generateGame() {
    cheese_amount = 0, cheese_found = 0;
    screen.textContent = "Find all the cheese (🧀) but be careful there are traps (📦), if a cheese have a mark (*🧀) it means there's a trap close";
    banner.appendChild(screen);
    let index = 0;
    for (let i = 0; i < rows.length ; i++) { // [0-9] | 10 rows
        matrix[i] = [];
        for (let j = 0; j < columns.length; j++) { // [0-5] | 6 columns
            matrix[i][j] = squares[index];
            matrix[i][j].className = "hide-square";
            matrix[i][j].textContent =  cheese;
            cheese_amount ++;
            index++;
        }
    }

    for (let i = 0; i < 6; i++) {
        let random_row = Math.floor(Math.random() * 9);
        let random_columns = Math.floor(Math.random() * 5);
        matrix[random_row][random_columns].textContent = trap;
        cheese_amount --;
    }
    
    for (let i = 0; i < rows.length ; i++) { // [0-9] | 10 rows
        for (let j = 0; j < columns.length; j++) { // [0-5] | 6 columns
            console.log("In " + i + "-" +j + " theres: " + matrix[i][j].textContent);
        }
    }

    checkCloseTrap();
}

generateGame();

window.onclick = e => {
    if (e.target.className == "hide-square" && e.target.textContent === cheese || e.target.textContent === close_trap) {
        e.target.className = "show-square";
        cheese_found ++;
    }else if (e.target.className == "hide-square" && e.target.textContent === trap) {
        winningCondition(e);
        e.target.className = "show-square";
    }
} 

function winningCondition(e) {

    if (e.target.textContent === trap) {
        screen.textContent = "You lose";
        banner.appendChild(screen);
        squares.forEach(element => {
            element.className = "end-game";
        });
    }
    if (cheese_found == cheese_amount) {
        screen.textContent = "You win";
        banner.appendChild(screen);
        squares.forEach(element => {
            element.className = "end-game";
        });
    }
}

function checkCloseTrap() {

    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < columns.length; j++) {
            if (matrix[i][j].textContent === cheese) {
                // ----- CORNERS ------
                if (i === 0 && j === 0) {
                    if (matrix[i+1][j].textContent === trap // [1-0]
                        || matrix[i][j+1].textContent === trap// [0-1]
                        || matrix[i+1][j+1].textContent === trap) // [1-1]
                    {
                        matrix[i][j].textContent = close_trap
                    }
                }else if (i === 9 && j === 0) {
                    if (matrix[i-1][j].textContent === trap // [0-8]
                        || matrix[i-1][j+1].textContent === trap // [1-8]
                        || matrix[i][j+1].textContent === trap) //[1-9]
                    {
                        matrix[i][j].textContent = close_trap
                    }
                }else if (i === 0 && j === 5) {
                    if (matrix[i][j-1].textContent === trap 
                        || matrix[i+1][j-1].textContent === trap 
                        || matrix[i+1][j].textContent === trap) 
                    {
                        matrix[i][j].textContent = close_trap
                    }
                }else if (i === 9 && j === 5) {
                    if (matrix[i-1][j-1].textContent === trap 
                        || matrix[i-1][j].textContent === trap 
                        || matrix[i][j-1].textContent === trap) 
                    {
                        matrix[i][j].textContent = close_trap
                    }
                //--------LATERALS----------
                }else if (j === 0 && i !== 9 && i !== 0) {
                    if (matrix[i-1][j].textContent === trap
                        || matrix[i-1][j+1].textContent === trap
                        || matrix[i][j+1].textContent === trap
                        || matrix[i+1][j].textContent === trap
                        || matrix[i+1][j+1].textContent === trap)
                    {
                        matrix[i][j].textContent = close_trap
                    }
                }else if (j === 5 && i !== 9 && i !== 0) {
                    if(matrix[i-1][j-1].textContent=== trap
                        || matrix[i-1][j].textContent=== trap
                        || matrix[i][j-1].textContent=== trap
                        || matrix[i+1][j-1].textContent=== trap
                        || matrix[i+1][j].textContent=== trap
                    ) {
                        matrix[i][j].textContent = close_trap
                    }
                }else if (i === 0 && j !== 5 && j !== 0) {
                    if(matrix[i][j-1].textContent=== trap
                        || matrix[i][j+1].textContent=== trap
                        || matrix[i+1][j-1].textContent=== trap
                        || matrix[i+1][j].textContent=== trap
                        || matrix[i+1][j+1].textContent=== trap
                    ) {matrix[i][j].textContent = close_trap}
                }else if (i === 9 && j !== 5 && j !== 0) {
                    if(matrix[i-1][j-1].textContent=== trap
                        || matrix[i-1][j].textContent=== trap
                        || matrix[i-1][j+1].textContent=== trap
                        || matrix[i][j-1].textContent=== trap
                        || matrix[i][j+1].textContent=== trap)
                    {
                        matrix[i][j].textContent = close_trap
                    }
                    //--------MIDDLE----------
                }else{
                    if(matrix[i-1][j-1].textContent=== trap
                        || matrix[i-1][j].textContent=== trap
                        || matrix[i-1][j+1].textContent=== trap
                        || matrix[i][j-1].textContent=== trap
                        || matrix[i][j+1].textContent=== trap
                        || matrix[i+1][j-1].textContent=== trap
                        || matrix[i+1][j].textContent=== trap
                        || matrix[i+1][j+1].textContent=== trap
                    ) {
                        matrix[i][j].textContent = close_trap
                    }
                } 
            }            
        }        
    }
}   


reset_button.onclick = function(){
    generateGame();
}

