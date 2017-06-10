'use strict';



var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);

//stringi


var wyplataStr = "5000\n";
var premiaStr = "2500";
var calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + " \"dodajemy\" " + premiaStr;

console.log(calkowitaWyplataStr);

//metody dla zmienncyh


var imieStudenta = " Michał ";
console.log(imieStudenta.indexOf('c'));
console.log(imieStudenta);
console.log(imieStudenta.trim());

//typ danych logiczny (boolean)


var czyJestSmog;
czyJestSmog = true;

if (czyJestSmog) {
    console.log("Jest SMOG");
} else {
                console.log("Nie ma SMOGa ;)");
}

//typ danych specjalny

null/undefinied