// const userName = prompt("What would you like to be called?");;
let userAnswer;
const computerChoice = generateComputerChoice();
let result1;
let whoWon;
function sayHi() {
    userName = prompt("What would you like to be called?");
    if (userName !== "") {
        alert('Hi' + userName + '!!!  \n  May the ODDs be in Your Favor!!')
        return userName;
    } else {
        alert("Please enter a valid name");
        sayHi();
    }
}


const PAPER = "1";
const ROCK = "2";
const SCISSORS = "3";



function validateChoice(choice) {
    return (choice == PAPER || choice == ROCK || choice == SCISSORS);
}

function result(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        return "draw";
    }

    if (((userChoice == PAPER) && (computerChoice == ROCK)) || ((userChoice == ROCK) && (computerChoice == SCISSORS)) || ((userChoice == SCISSORS) && (computerChoice == PAPER))) {
        return 'player';
    }

    if (((userChoice == PAPER) && (computerChoice == SCISSORS)) || ((userChoice == ROCK) && (computerChoice == PAPER)) || ((userChoice == SCISSORS) && (computerChoice == ROCK))) {
        return 'computer';
    }
}


function announceWinner(winner) {
    switch (winner) {
        case 'player':
            return alert(" " + userName + "!!! \n won this round");
            break;

        case 'computer':
            return alert("Computer won this round!!");
            break;

        case 'draw':
            return alert("    Draw!     ");
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
    return generateRandomNumberBetweenRange(1, 3);
}


function getUserChoice() {
    return prompt(' ' + userName + ': \n choose one option from the following: \n 1) Paper \n 2) Rock \n 3)Scissors \n ');
}


function round() {
    let isValidChoice = false;
    do {
        userChoice = getUserChoice();
        isValidChoice = validateChoice(userChoice);
        if (!isValidChoice) {
            alert("Im sorry, \n    but thats not a valid option. \n       Please choose again.");
            round();
        }
    } while (isValidChoice === false); {

        const computerChoice = generateComputerChoice();
        whoWon = result(userChoice, computerChoice);

        return announceWinner(whoWon);

    }
}

function runGame() {
    sayHi();
    alert("Get ready to get your but kicked!");
    round();

    let i = 0;
    do {
        round();
        i++;
    } while (i !== 1);
    quit();

}

function quit() {
    let sigue = prompt("Want to keep playing? Y/N");
    if (sigue != "Y") {
        alert("  Hakuna Matata  \n \n      " + userName + "!!!!!! \n \n     Thanks for playing!!!")
    } else {
        runGame();
    }
}

runGame();