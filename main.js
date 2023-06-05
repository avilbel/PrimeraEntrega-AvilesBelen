
/*  UserName */
let userName;

userName = prompt('Whats your name? ');

function sayHi(userName) {
    alert('Hi! ' + userName + ', \n Hows it going going?');
    alert('May The Odds Be In Your Favor!')
}

console.log(sayHi(userName));

/* Menu */
let menu;

function menu() {
    prompt(userName + 'Choose one option from the following: \n 1) Paper \n 2) Rock \n 3)Scissors ');
}

/*   Round    */
let userAnswer;

userAnswer = menu(userName)

/* Answer */


if (((userAnswer == "1") && (computerAnswer == "1")) || ((userAnswer == "2") && (computerAnswer == "2")) || ((userAnswer == "3") && (computerAnswer == "3"))) {
    alert(" DRAW  \n");
    break;
} else {
    if (((userAnswer == "1") && (computerAnswer == "2")) || ((userAnswer == "2") && (computerAnswer == "3")) || ((userAnswer == "3") && (computerAnswer == "1"))) {
        alert(userName + " Wins!!!");
        break;
    } else {
        if (((userAnswer == "1") && (computerAnswer == "3")) || ((userAnswer == "2") && (computerAnswer == "1")) || ((userAnswer == "3") && (computerAnswer == "2"))) {
            alert(" Computer Wins !!!! \n");
            break;
        }
    }
}

