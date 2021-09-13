// deck of cards
// 52 cards 
// 4 types - spaces, diamonds, clubs, hearts
// 13 ranks

// three arrays for suits, values, and a deck to hold cards // 


const suits = ['hearts', 'spades', 'diamonds', 'clubs']; 

const values = ['ace', 'jack', 'queen', 'king','2', '3', '4', '5', '6', '7', '8', '9', '10'];

let deck = [];

// function with a for loop to create a deck of cards // 

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

console.log(getDeck()); 


// function to shuffle cards
function shuffle(deck){
    for(let i = 0; i < 1000; i++){
        const playerDraw = Math.floor((Math.random() * deck.length)); 
        const computerDraw = Math.floor((Math.random() * deck.length)); 
        const temp = deck[playerDraw];
        deck[playerDraw] = deck[computerDraw];
        deck[computerDraw] = temp; 
    }
}

// function to make cards appear on page 