
let userName;
let userAnswer;
let computerAnswer;
let result1;

userName = prompt('Whats your name? ');

function sayHi(userName) {
    alert('Hi! ' + userName + ', \n Hows it going going?');
    alert('May The Odds Be In Your Favor!')
}

console.log(sayHi(userName));


function menu() {
    prompt(userName + 'Choose one option from the following: \n 1) Paper \n 2) Rock \n 3)Scissors ');
}

userAnswer = menu();
// userAnswer();
console.log(userAnswer);
// computerAnswer = "1";

console.log(result(userAnswer, "1"));

function result() {
    if (((userAnswer == "1") && (computerAnswer == "1")) || ((userAnswer == "2") && (computerAnswer == "2")) || ((userAnswer == "3") && (computerAnswer == "3"))) {
        return "DRAW";
    } else {
        if (((userAnswer == "1") && (computerAnswer == "2")) || ((userAnswer == "2") && (computerAnswer == "3")) || ((userAnswer == "3") && (computerAnswer == "1"))) {
            return userName + "Wins!!";
        } else {
            if (((userAnswer == "1") && (computerAnswer == "3")) || ((userAnswer == "2") && (computerAnswer == "1")) || ((userAnswer == "3") && (computerAnswer == "2"))) {
                return "Computer Wins!!";
            }
        }
    }
}

computerAnswer = "1";

console.log(result(userAnswer, "1"));


