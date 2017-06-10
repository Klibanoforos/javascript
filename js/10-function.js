'use strict';

//funkcja


function multiply(parametr1, parametr2, parametr3) {
    var result;
    
    result = parametr1 * parametr2 * parametr3;
    
    return result;
}

var wynik = multiply(3, 9, 10);

console.log('Wynik: ' + wynik);



//funkcja anonimowa


var funkcja = function () {
    return "wynik :)";
};

console.log( funkcja );
console.log( funkcja() );