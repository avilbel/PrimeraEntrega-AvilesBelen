let userName;
let userAnswer;
let computerAnswer;
let result1;


// userName = prompt('Whats your name? ');

function sayHi(userName) {
    alert('Hi! ' + userName + ', \n Hows it going going?');
    alert('May The Odds Be In Your Favor!')
}

// console.log(sayHi(userName));


// function menu() {
//     return prompt(userName + ', choose one option from the following: \n 1) Paper \n 2) Rock \n 3)Scissors ');
// }

// userAnswer = menu();
// // userAnswer();
// console.log(userAnswer);

// let round1A;

// round1A = result(userAnswer, "2");

const PAPER = 1;
const ROCK = 2;
const SCISSORS = 3;

function validateChoice(choice) {
    return (choice == PAPER || choice == ROCK || choice == SCISSORS);
}

function result(userAnswer, computerAnswer) {
    if (userAnswer == computerAnswer) {
        return "draw";
    }

    if (((userAnswer == PAPER) && (computerAnswer == ROCK)) || ((userAnswer == ROCK) && (computerAnswer == SCISSORS)) || ((userAnswer == SCISSORS) && (computerAnswer == PAPER))) {
        return 'player'
    }

    if (((userAnswer == PAPER) && (computerAnswer == SCISSORS)) || ((userAnswer == ROCK) && (computerAnswer == PAPER)) || ((userAnswer == SCISSORS) && (computerAnswer == ROCK))) {
        return 'computer';
    }
}

function runGame() {
    const userName = prompt('Whats your name? ');
    sayHi(userName);

    let i = 3;
    do {
        round();
        i--;
    } while (i != 0)
}

function announceWinner(winner, userName) {
    switch (winner) {
        case 'player':
            alert(userName + " won this round");
            break

        case 'computer':
            alert("Computer Wins!!");
            break;

        case 'draw':
            alert("Oops, there was a draw!")
            break;
    }
}

function generateRandomNumberBetweenRange(min, max) {
    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor(rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

function generateComputerChoice() {
    return generateRandomNumberBetweenRange(1, 3)
}

function getUserChoice() {
    return prompt(userName + ', choose one option from the following: \n 1) Paper \n 2) Rock \n 3)Scissors ')
}


function round() {
    let isValidChoice = false;
    do {
        const userChoice = getUserChoice();
        isValidChoice = validateChoice(userChoice);
        if (!isValidChoice) {
            alert(userChoice + "is not a valid option, please choose it again.")
        }
    } while (isValidChoice === false);

    const computerChoice = generateComputerChoice();
    const whoWon = result(userChoice, computerChoice);

    announceWinner(whoWon)
}




runGame()