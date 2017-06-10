'use strict';
//operatory przypisania

var licz = 0;
licz += 3;

console.log(licz);


//operatory porównania


var liczba1 = "13", liczba2 = 13;

if (liczba1 == liczba2) {
    console.log('równe');
}


//operatory logiczne

var liczba3 = "13", liczba4 = 5;

if (liczba3 > 3 && liczba4 < 10) {
    console.log("tak");
}

//operator warunkowy


(2>5) ? console.log('tak') : console.log('nie');

//to to samo,co

if (2>5) {
    console.log('tak')
} else { console.log('nie');
       }