
/*  UserName */
let userName;

userName = prompt('Whats your name? ');

function sayHi(userName) {
    alert('Hi! ' + userName + ', \n Hows it going going?');
    alert('May The Odds Be In Your Favor!')
}

console.log(sayHi(userName));

/* Menu */
let userAnswer;

userAnswer = function menu() {
    prompt(userName + 'Choose one option from the following: \n 1) Paper \n 2) Rock \n 3)Scissors ');
}
userAnswer();
/*   Round    */
// let computerAnswer;


// computerAnswer = "3";

// /* Answer */
// switch (userAnswer, computerAnswer) {
//     case (((userAnswer == "1") && (computerAnswer == "1")) || ((userAnswer == "2") && (computerAnswer == "2")) || ((userAnswer == "3") && (computerAnswer == "3"))):
//         return "DRAW";
//         break;
//     case (((userAnswer == "1") && (computerAnswer == "2")) || ((userAnswer == "2") && (computerAnswer == "3")) || ((userAnswer == "3") && (computerAnswer == "1"))):
//         return userName + "Wins!!";
//         break;
//     case (((userAnswer == "1") && (computerAnswer == "3")) || ((userAnswer == "2") && (computerAnswer == "1")) || ((userAnswer == "3") && (computerAnswer == "2"))):
//         return "Computer Wins!!"
// }




