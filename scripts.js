//.......................................................................................
//      GAME
//.......................................................................................


//Create a deck

function deckBuilder () {
    const suits = ['Hearts', 'Diamonds', 'Spades', 'Clovers'];
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const cards = [];
        for (let i = 0; i < suits.length; i++) {            //Iterate through suits
            for (let j = 0; j < values.length; j++) {       //Assigns a new value to each suit
                const value = values[j];
                const suit = suits[i];
                //Index starts at 0 and first card is a "2", adding 2 gets correct weight for scoring
                const weight = j + 2;                       
                cards.push({value, suit, weight});
            }
        }
    return cards;
}


//  Check the deck
//console.log(deckBuilder());


//Randomly pick a card from the deck
const card = {"value": null, "suit": null, "weight": null};

function pickCard(cards) {
    //Index starts at zero, so "51" draws one of the 52 cards
    const random = Math.floor(Math.random() * 51);  
    //The card picked will hold all the {cards.properties} unchanged
    card.value = cards[random].value;
    card.suit = cards[random].suit;
    card.weight = cards[random].weight;        
    return card;
}

const cards = deckBuilder();


//  Check the function
//  console.log(pickCard(cards));




//.......................................................................................
//      EVENT LISTENERS
//.......................................................................................

//Link to HMTL

const dealHand = document.getElementById('drawCardButton');
const playerHandDisplay = document.getElementById('p_hand');
const computerHandDisplay =  document.getElementById('c_hand');
const whoWon = document.getElementById('whoWon');
const playAgain = document.getElementById('playAgainButton');


//Function called when "Take One" button is clicked

dealHand.addEventListener ('click', () => {
    //Draw random cards to player and computer
    const playerDraw = pickCard(cards);
    const computerDraw = pickCard(cards);
    
    //Display the cards in html
    playerHandDisplay.innerText = card.value + card.suit;
    computerHandDisplay.innerText = card.value + " " + card.suit;

    playerValue = card.weight;
    computerValue = card.weight;

    // Determine winner----NOT WORKING!
    function compareCards (playerValue, computerValue) {
        if (playerValue >= computerValue) {
            return true;
        } else {
            return false;
        }
    };

    //Display winner
    if (compareCards === true) {
        whoWon.innerText = 'You win!';
    } else {
        whoWon.innerText = 'Computer wins';
    }
});


//Function called to reset all fields when "Play Again" button is clicked

playAgain.addEventListener ('click', () => {
    //Reset fields to blank
    playerHandDisplay.innerText = '';
    computerHandDisplay.innerText = '';
    whoWon.innerText = '';
})