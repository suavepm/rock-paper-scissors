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

console.log(getComputerChoice());