'use strict';

let points = 0;
/*alert ('Hello, Welcome to our quizz guessing game')
alert('answers the following questions with yes or no')
let q1 = prompt('have Ajax team ever won the champion leauge?');

switch (q1.toLowerCase()) {
    case 'yes':
        case 'y':
        //console.log(true)
        alert('Good');
        points++;
        break;

    case 'no':
        case 'n':
        //console.log(false)
        alert('oops');
        break;


}

let q2 = prompt('Germany team won the world cup 3 times');

switch (q2.toLowerCase()) {
    case 'yes':
        case 'y':
        //console.log(true)
        alert('oops');
        break;

    case 'no':
        case 'n':
        //console.log(false)
        alert('good');
        points++;
        break;



}
let q3 = prompt('Kaka won the golden ball two times');

switch (q3.toLowerCase()) {
    case 'yes':
        case 'y':
        //console.log(true)
        alert('oops');
        break;

    case 'no':
        case 'n':
        //console.log(false)
        alert('good');
        points++;
        break;


}
let q4 = prompt('Roger Federer have 20 Grand slam')
switch (q4.toLowerCase()) {
    case 'yes':
        case 'y':
        //console.log(true)
        alert('Good');
        points++;
        break;

    case 'no':
        case 'n':
        //console.log(false)
        alert('oops');
        break;


}
let q5 = prompt('PSG won the Champions leauge last year');

switch (q5.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log(true)
        alert('oops')
        break;

    case 'no':
    case 'n':
        //console.log(false)
        alert('good')
        points++;
        break;


}*/
let picknum = prompt('how many times did AC Milan won the champions leauge?');

for (let x = 0; x < 4; x++) {


    if (picknum == 7) {
        alert('Great !')
        points++;
        break;

    }
    else if (picknum < 7) {

        alert('lower, try again !')
    }
    else if (picknum > 7) {

        alert('higher, try again !')

    }


}

if (x === 4) {
    alert('you failed, the right answer is 7 times')
}



let favteam = ['Liverpool', 'Bayern', 'Milan', 'Madrid'];
guess = prompt('try to guess my favorite team')

for (let i = 0; i <6; i++) {


    if (guess === Milan) {
        alert('you are a magician!')
        points++;
        break;
    }


}

alert('my favorite team is the one and only Milan');
alert('your total points is ${points}');














