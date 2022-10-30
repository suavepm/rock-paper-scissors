function getComputerChoice() {

    let randNum = Math.floor((Math.random() * 3));
    let handOutput;
    if (randNum === 0) {
        handOutput = 'Rock';
    } else if (randNum === 1) {
        handOutput = 'Paper';
    } else {
        handOutput = 'Scissors';
    }
    return handOutput;

}

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt('Rock, Paper, or Scissors?');
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    let resultMsg;

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        resultMsg = 'You lose! Paper beats Rock.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        resultMsg = 'You win! Rock beats Scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        resultMsg = 'You lose! Paper beats Scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        resultMsg = 'You win! Paper beats Rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        resultMsg = 'You lose! Rock beats Scissors.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        resultMsg = 'You win! Scissors beats Paper.';
    } else if (playerSelection === computerSelection) {
        resultMsg = 'Draw!';
    } else {
        resultMsg = 'Invalid selection!';
    }

    return alert(resultMsg);
}

function game() {

    playRound();
    let replay = prompt('Play again?');
    replay.toLowerCase();

    while (replay === 'yes') {
        playRound();
        replay = prompt('Play again?');
    } 
    
    if (replay === 'no') {
        alert('Thanks for playing!');
    } else {
        alert('Invalid response!');
    }

} 

game();



