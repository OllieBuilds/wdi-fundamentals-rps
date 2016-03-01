////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit       */
/*   I totally editted... but only a little */
/////////////////////////////////////////////
'use strict';

function getInput() {
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var playerMove = move || getInput();
    return playerMove;
}

function getComputerMove(move) {
    var computerMove = move || randomPlay();
    return computerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if(playerMove == computerMove){
        winner = "tie";
    }
    else if((playerMove == "rock" && computerMove == "scissors")
        ||(playerMove == "scissors" && computerMove == "paper")
        ||(playerMove == "paper" && computerMove == "rock")
        ){
        winner = "player";
    }
    else{
        winner = "computer";
        }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while(playerWins < 5 && computerWins < 5){
        var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner == "player"){
            alert("Way to go player!");
            playerWins += 1;
        }
        else if (winner == "computer"){
            alert("Computer wins... You'll get him next time!");
            computerWins += 1;
        }
        else if (winner =="tie"){
            alert("Uhh... this is awkward... REDO!");
        }
    }

    if (playerWins === 5){
        console.log("You kicked that stupid computer's butt!");
    }
    else if (computerWins === 5){
        console.log("That stupid comuter kicked your butt!");
    }
    return [playerWins, computerWins];
}

playToFive();