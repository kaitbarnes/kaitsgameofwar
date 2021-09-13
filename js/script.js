/// PART ONE: CREATE A DECK OF CARDS.
// a deck of cards has 52 cards including 13 values (#1-#10, king, queen, jack) and four suits (spades, diamonds, clubs, and hearts)

// 1.1 create three arrays for suits, values, and the deck itself

const suits = ['hearts', 'spades', 'diamonds', 'clubs']; 

const values = ['ace', 'jack', 'queen', 'king','2', '3', '4', '5', '6', '7', '8', '9', '10'];

let deck = [];

// 1.2 create a function that returns the deck

function getDeck(){
    const deck = new Array(); 
    for (let s = 0; s < suits.length; s++){
    for(let v = 0; v < values.length; v++){
        let card = {Value: values[v], Suit: suits[s]};
        deck.push(card); 
    }
}
    return deck; 
}; 
 

// PART TWO: Adding functionality and rendering the cards

// 2.1 - create a function to shuffle the deck. This function uses math.random and goes up to 1,000 turns. It shuffles the cards to the playerDraw and computerDraw card slots on the page. 

function shuffle(deck){
    for(let i = 0; i < 1000; i++){
        let playerDraw = Math.floor((Math.random() * deck.length)); 
        let computerDraw = Math.floor((Math.random() * deck.length)); 
        let temp = deck[playerDraw];
        deck[playerDraw] = deck[computerDraw];
        deck[computerDraw] = temp; 
    }
};

// 2.1 - create a function to render the deck. This actually makes the cards appear on the page. 

