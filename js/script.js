/// PART ONE: CREATE A DECK OF CARDS.
// a deck of cards has 52 cards including 13 values (#1-#10, king, queen, jack) and four suits (spades, diamonds, clubs, and hearts)

// 1.1 create three arrays for suits, values, and the deck itself

const suits = ['hearts', 'spades', 'diamonds', 'clubs']; 

const values = ['ace', 'jack', 'queen', 'king','2', '3', '4', '5', '6', '7', '8', '9', '10'];

// let deck = [];

// 1.2 create a function that returns the deck

function newDeck(){
    let deck = new Array(); 
    for (let suit = 0; suit < suits.length; suit++){
        for(let value = 0; value < values.length; value++){
        let card = {Suit: suits[suit], Value: values[value]};
        deck.push(card); 
    }
}
    return deck; 
}; 
 

// PART TWO: Adding functionality and rendering the cards

// 2.1 - create a function to shuffle the deck.  

function shuffle(deck){
    for(let i = 0; i < 1000; i++){
        let index1 = Math.floor((Math.random() * deck.length)); 
        let index2 = Math.floor((Math.random() * deck.length)); 
        let tempVariable = deck[index1];
        deck[index1] = deck[index2];
        deck[index2] = tempVariable; 
    }
};

// 2.1 - create a function to make cards appear on page

// create new deck//

let deck = newDeck();

//shuffle cards//

shuffle(deck); 
