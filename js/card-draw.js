// deck of cards
// 52 cards 
// 4 types - spaces, diamonds, clubs, hearts
// 13 ranks 

// three arrays for suits, values, and a deck to hold cards // 

const suits = ['hearts', 'spades', 'diamonds', 'clubs']; 

const values = ['ace', 'jack', 'queen', 'king','2', '3', '4', '5', '6', '7', '8', '9'];

let deck = [];

// for loop to create a deck of cards // 

for (let s = 0; s < suits.length; s++){
    for(let v = 0; v < values.length; v++){
        let card = {Value: values[v], Suit: suits[s]};
        deck.push(card); 
    }
}

// for loop to shuffle the cards //

for (let a = deck.length - 1; a > 0; a--){
    let b = Math.floor(Math.random() * a);
    let temp = deck[a];
    deck[a] = deck[b];
    deck[b] = temp; 
}

// test deck//

console.log(deck);
