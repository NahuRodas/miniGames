let cards = [];
let dealer_cards, player_cards;
let swit = ["Hearts", "Spades", "Clover", "Diamond"], values = ["A","1","2","3","4","5","6","7","8","9","10","J","Q","K"];

for (let index = 0; index <= 56; index++) {
    cards[index] = index;
}


dealer_cards = []

cards.forEach(card => {
    switch (card) {
        case 0:
            console.log("Heart A");
            break;
        case 1:
            console.log("Heart 1");
            break;
        case 2:
            console.log("Heart 2");
            break;
        case 3:
            console.log("Heart 3");
            break;
        case 4:
            console.log("Heart 4");
            break;
        case 5:
            console.log("Heart 5");
            break;
        case 6:
            console.log("Heart 6");
            break;
        case 7:
            console.log("Heart 7");
            break;
        case 8:
            console.log("Heart 8");
            break;
        case 9:
            console.log("Heart 9");
            break;
        case 10:
            console.log("Heart 10");
            break;
        case 11:
            console.log("Heart J");
            break;
        case 12:
            console.log("Heart Q");
            break;
        case 13:
            console.log("Heart K");
            break;
        case 14:
            console.log("Diamond A");
            break;
        case 15:
            console.log("Diamond 1");
            break;
        case 16:
            console.log("Diamond 2");
            break;
        case 17:
            console.log("Diamond 3");
            break;
        case 18:
            console.log("Diamond 4");
            break;
        case 19:
            console.log("Diamond 5");
            break;
        case 20:
            console.log("Diamond 6");
            break;
        case 21:
            console.log("Diamond 7");
            break;
        case 22:
            console.log("Diamond 8");
            break;
        case 23:
            console.log("Diamond 9");
            break;
        case 24:
            console.log("Diamond 10");
            break;
        case 25:
            console.log("Diamond J");
            break;
        case 26:
            console.log("Diamond Q");
            break;
        case 27:
            console.log("Diamond K");
            break;
        case 28:
            console.log("Spades A");
            break;
        case 29:
            console.log("Spades 1");
            break;
        case 30:
            console.log("Spades 2");
            break;
        case 31:
            console.log("Spades 3");
            break;
        case 32:
            console.log("Spades 4");
            break;
        case 33:
            console.log("Spades 5");
            break;
        case 34:
            console.log("Spades 6");
            break;
        case 35:
            console.log("Spades 7");
            break;
        case 36:
            console.log("Spades 8");
            break;
        case 37:
            console.log("Spades 9");
            break;
        case 38:
            console.log("Spades 10");
            break;
        case 39:
            console.log("Spades J");
            break;
        case 40:
            console.log("Spades Q");
            break;
        case 41:
            console.log("Spades K");
            break;
        case 42:
            console.log("Clover A");
            break;
        case 43:
            console.log("Clover 1");
            break;
        case 44:
            console.log("Clover 2");
            break;
        case 45:
            console.log("Clover 3");
            break;
        case 46:
            console.log("Clover 4");
            break;
        case 47:
            console.log("Clover 5");
            break;
        case 48:
            console.log("Clover 6");
            break;
        case 49:
            console.log("Clover 7");
            break;
        case 50:
            console.log("Clover 8");
            break;
        case 51:
            console.log("Clover 9");
            break;
        case 52:
            console.log("Clover 10");
            break;
        case 53:
            console.log("Clover J");
            break;
        case 54:
            console.log("Clover Q");
            break;
        case 55:
            console.log("Clover K");
            break;
    
        default:
            break;
    } 
});

