/*----- constants -----*/

const suits = ['hearts', 'spades', 'diamonds', 'clubs']; 

console.log(suits);

const values = ['ace', 'jack', 'queen', 'king','2', '3', '4', '5', '6', '7', '8', '9', '10'];

console.log(values);

const cardImages = {
    back: {
        imagesURL: ['images/backs/blue.svg', 'images/backs/red.svg'],
    },
    two: {
        imagesURL: ['images/clubs/clubs-r02.svg', 'images/diamonds/diamonds-r02.svg', 'images/hearts/hearts-r02.svg', 'images/spades/spades-r02.svg'],
    },
    three: {
        imagesURL: ['images/clubs/clubs-r03.svg', 'images/diamonds/diamonds-r03.svg', 'images/hearts/hearts-r03.svg', 'images/spades/spades-r04.svg'],
    },
    four: {
        imagesURL: ['images/clubs/clubs-r04.svg', 'images/diamonds/diamonds-r04.svg', 'images/hearts/hearts-r04.svg', 'images/spades/spades-r04.svg'],
    },
    five: {
        imagesURL: ['images/clubs/clubs-r05.svg', 'images/diamonds/diamonds-r05.svg', 'images/hearts/hearts-r05.svg', 'images/spades/spades-r05.svg'],
    },
    six: {
        imagesURL: ['images/clubs/clubs-r06.svg', 'images/diamonds/diamonds-r06.svg', 'images/hearts/hearts-r06.svg', 'images/spades/spades-r06.svg'],
    },
    seven: {
        imagesURL: ['images/clubs/clubs-r07.svg', 'images/diamonds/diamonds-r07.svg', 'images/hearts/hearts-r07.svg', 'images/spades/spades-r07.svg'],
    },
    eight: {
        imagesURL: ['images/clubs/clubs-r08.svg', 'images/diamonds/diamonds-r08.svg', 'images/hearts/hearts-r08.svg', 'images/spades/spades-r08.svg'],
    },
    nine: {
        imagesURL: ['images/clubs/clubs-r09.svg', 'images/diamonds/diamonds-r09.svg', 'images/hearts/hearts-r09.svg', 'images/spades/spades-r09.svg'],
    },
    ten: {
        imagesURL: ['images/clubs/clubs-r10.svg', 'images/diamonds/diamonds-r10.svg', 'images/hearts/hearts-r10.svg', 'images/spades/spades-r10.svg'],
    },
    jack: {
        imagesURL: ['images/clubs/clubs-j.svg', 'images/diamonds/diamonds-j.svg', 'images/hearts/hearts-j.svg', 'images/spades/spades-j.svg'],
    },
    queen: {
        imagesURL: ['images/clubs/clubs-q.svg', 'images/diamonds/diamonds-q.svg', 'images/hearts/hearts-q.svg', 'images/spades/spades-q.svg'],
    },
    king: {
        imagesURL: ['images/clubs/clubs-k.svg', 'images/diamonds/diamonds-k.svg', 'images/hearts/hearts-k.svg', 'images/spades/spades-k.svg'],
    },
    ace: {
        imagesURL: ['images/clubs/clubs-a.svg', 'images/diamonds/diamonds-a.svg', 'images/hearts/hearts-a.svg', 'images/spades/spades-a.svg'],
    },
}

console.log(cardImages); 


/*----- app's state (variables) -----*/

let draw // deal cards when clicking button

let splitDeck // splits deck among computer and player, each gets 26 cards

let displayFaceCard // shows new face card every time a person draws

let displayScore // displays computer vs player score

let war // remains null until game reaches point where war is declared 

let winner // remains null until game is over

let reset // restart game

/*----- cached element references -----*/

/*----- event listeners -----*/


/*----- functions -----*/

// Function 1: Create a New Deck

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
 

//Function 2: Shuffle Deck

function shuffle(deck){
    for(let i = 0; i < 1000; i++){
        let index1 = Math.floor((Math.random() * deck.length)); 
        let index2 = Math.floor((Math.random() * deck.length)); 
        let tempVariable = deck[index1];
        deck[index1] = deck[index2];
        deck[index2] = tempVariable; 
    }
};

//Function: Draw a Card, Assign Value to Card

//Function: Split Deck Between Computer & PLayer

//Function: Player Turn

//Function: Computer Turn

//Function: Compare Cards

//Function: Play War

//Function: Declare a Winner

//Function: Update Score

//Function: Reset Game 