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
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return alert('You lose! Paper beats Rock.');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return alert('You win! Rock beats Scissors.');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return alert('You lose! Paper beats Scissors.');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return alert('You win! Paper beats Rock.');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return alert('You lose! Rock beats Scissors.');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return alert('You win! Scissors beats Paper.');
    } else if (playerSelection === computerSelection) {
        return alert('Draw!');
    } else {
        return alert('Invalid selection!');
    }
}

playRound();