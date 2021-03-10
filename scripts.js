//.......................................................................................
//      GAME
//.......................................................................................


//Create a deck

function deckBuilder () {  
    const suits = ['♥︎', '♦︎', '♠︎', '♣︎'];
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


//Randomly pick a card from the deck

function pickCard(cards) {
    //Index starts at zero, so "51" draws one of the 52 cards
    const random = Math.floor(Math.random() * 51);  
    //The card picked will hold all the {cards.properties} unchanged
    let cardValue = cards[random].value;
    let cardSuit = cards[random].suit;
    let cardWeight = cards[random].weight; 
    return [{cardValue, cardSuit, cardWeight}, cardValue + " " + cardSuit];
}


const cards = deckBuilder();

//Check the pickCard function
//console.log(pickCard(cards));




//.......................................................................................
//      EVENT LISTENERS
//.......................................................................................

//Link to HMTL

const dealHand = document.getElementById('drawCardButton');
const playerHandDisplay = document.getElementById('p_hand');
const computerHandDisplay =  document.getElementById('c_hand');
const whoWon = document.getElementById('whoWon');
const playAgain = document.getElementById('playAgainButton');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const winner = document.querySelector('.winnerDisplay')
   

//Function called when "Take One" button is clicked

dealHand.addEventListener ('click', () => {
    //Reset any glow effects from previous hand
    reset();
    //Draw random cards to player and computer:
    //playerDraw and computerDraw will assign the array from pickCard() that holds
    //both one object and one string.
    //I assigned the object [index 0] to playerHand and computerHand
    //and the string [index 1] in the innerText.html
    const playerDraw = pickCard(cards);
    const playerHand = playerDraw[0];
    const computerDraw = pickCard(cards);
    const computerHand = computerDraw[0];

    //Get the "weight" of the cards in a variable
    const playerWeight = playerHand.cardWeight;
    const computerWeight = computerHand.cardWeight;
    
    //Change color to red if hearts or diamonds for both player and computer cards
    
    if (playerHand.cardSuit == '♥︎' || playerHand.cardSuit == '♦︎') {
        p_hand.style.color = 'red';
    } else {
        p_hand.style.color = 'black';
    }; 

    if (computerHand.cardSuit == '♥︎' || computerHand.cardSuit == '♦︎') {
        c_hand.style.color = 'red';
    } else {
        c_hand.style.color = 'black';
    }; 

    //Display the cards in html
    playerHandDisplay.innerText = playerDraw[1];
    computerHandDisplay.innerText = computerDraw[1];

    //Display the winner
    if (playerWeight >= computerWeight) {
        whoWon.innerText = 'You win!'; 
    } else {
        whoWon.innerText = 'Computer wins';  
    };
    
    if (whoWon.innerText == 'You win!'){
        winner.classList.toggle('you-win');
        player.classList.toggle('you-win');
        computer.classList.remove('you-win');
    } 
    if (whoWon.innerText == 'Computer wins') {
        computer.classList.toggle('you-win');
        winner.classList.remove('you-win');
        player.classList.remove('you-win');
    } 
    
});

function reset () {
    computer.classList.remove('you-win');
    winner.classList.remove('you-win');
    player.classList.remove('you-win');
}

