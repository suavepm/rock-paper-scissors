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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt('Rock, Paper, or Scissors?');
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    let resultMsg;

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        resultMsg = 'You lose! Paper beats Rock.';
        computerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        resultMsg = 'You win! Rock beats Scissors.';
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        resultMsg = 'You lose! Paper beats Scissors.';
        computerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        resultMsg = 'You win! Paper beats Rock.';
        playerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        resultMsg = 'You lose! Rock beats Scissors.';
        computerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        resultMsg = 'You win! Scissors beats Paper.';
        playerScore++;
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

    let finalResult;

    if (playerScore > computerScore) {
        finalResult = "win";
    } else if (playerScore < computerScore) {
        finalResult = "lose";
    } else {
        finalResult = "draw";
    }
    
    if (replay === 'no') {

        alert(`The final score is ${playerScore} | ${computerScore}. You ${finalResult}!`);
        alert('Thanks for playing!');
        computerScore = 0;
        playerScore = 0;
        
    } else {
        alert('Invalid response!');
    }

} 

game();



