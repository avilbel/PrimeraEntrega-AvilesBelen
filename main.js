
let userAnswer;
const computerChoice = generateComputerChoice();
let result1;
let whoWon;
let playerPoint = 0;
let computerPoint = 0;

// let overallWinner;


function sayHi() {
    userName = prompt("What would you like to be called?");
    if (userName !== "") {
        alert(' Hi  ' + userName + ' !!!  \n  May the ODDs be in Your Favor!!')
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
            playerPoint++;
            return alert(" " + userName + "!!! \n won this round");

            break;

        case 'computer':
            computerPoint++;
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
    return prompt(' ' + userName + '  \n       Please Choose one of the following options: \n 1) Paper \n 2) Rock \n 3)Scissors \n ');
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
    alert("Get ready to get your BUTT kicked to the curve!");
    round();

    let i = 0;
    do {
        round();
        i++;
    } while (i !== 2);
    overallWinner(playerPoint, computerPoint);
    quit();

}

function quit() {
    let sigue = prompt("Want to keep playing? Y/N");
    if (sigue != "Y") {
        alert("  Hakuna Matata  \n \n      " + userName + " !!!!!! \n \n     Thanks for playing!!!")
    } else {
        return runGame();
    }
}

function overallWinner(playerPoint, computerPoint) {
    if (playerPoint < computerPoint) {
        return alert("Computer Won OVerall! \n  " + computerPoint + " won out of 3 turns!\n  OOHHH YYYEEEAAAHHH \n COMPUTER RULESS!!");
    } else {
        if (playerPoint > computerPoint) {
            return alert(" " + userName + " Won OVerall! \n " + playerPoint + " won out of 3 turns!\n \n     You got Lucky!!! \n You should try again!");
        } else {
            if (playerPoint === computerPoint) {
                return alert("DRAW \n Better Luck next time!");
            }
        }
    }
}



runGame();