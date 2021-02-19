//.......................................................................................
//      GAME
//.......................................................................................

const royals = {
    11: 'J',
    12: 'Q',
    13: 'K',
    14: 'A'
}
const suit = ['Hearts', 'Diamonds', 'Spades', 'Clovers'];
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function compareCards (playerDraw, computerDraw) {
    if (playerDraw[value] > computerDraw[value]) {
        return true;
    } else {
        return false;
    }
}


//.......................................................................................
//      EVENT LISTENERS
//.......................................................................................
const dealHand = document.getElementById('drawCardButton');
const playerHandDisplay = document.getElementById('p_hand');
const computerHandDisplay =  document.getElementById('c_hand');
const whoWon = document.getElementById('whoWon');
const playAgain = document.getElementById('playAgainButton');

dealHand.addEventListener ('click', () => {
    //Draw random cards to player and computer
    const playerDraw = value[Math.floor(Math.random() * value.length)] + ' ' + suit[Math.floor(Math.random() * suit.length)];
    const computerDraw = value[Math.floor(Math.random() * value.length)] + ' ' + suit[Math.floor(Math.random() * suit.length)];

    //Display the cards in html
    playerHandDisplay.innerText = playerDraw;
    computerHandDisplay.innerText = computerDraw;

    //Determine winner
    const playerWins = compareCards(playerDraw, computerDraw);
    const winner = playerWins ? 'human' : 'computer';

    //Display winner
    if (winner === 'human') {
        whoWon.innerText = 'You win!';
    } else {
        whoWon.innerText = 'Computer wins';
    }
})

playAgain.addEventListener ('click', () => {
    //Reset fields to blank
    playerHandDisplay.innerText = '';
    computerHandDisplay.innerText = '';
    whoWon.innerText = '';
})