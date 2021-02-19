//GAME
const suit = ['Hearts', 'Diamonds', 'Spades', 'Clovers'];
const J = 11;
const Q = 12;
const K = 13;
const A = 14;
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A];

function compareCards (playerDraw, computerDraw) {
    if (playerDraw > computerDraw) {
        return true;
    } else {
        return false;
    }
}


//EVENT LISTENERS
const dealHand = document.getElementById('draw');
const playerHandDisplay = document.getElementById('p_hand');
const computerHandDisplay =  document.getElementById('c_hand');
const whoWon = document.getElementById('whoWon');


dealHand.addEventListener ('click', () => {
    //Draw random cards to player and computer
    const playerDraw = `${value[Math.floor(Math.random() * value.length)]}  ${suit[Math.floor(Math.random() * suit.length)]}`;
    const computerDraw = `${value[Math.floor(Math.random() * value.length)]}  ${suit[Math.floor(Math.random() * suit.length)]}`; 
    
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
