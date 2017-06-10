'use strict';

//warunek if


var wzrostMateusza = 190;
var wzrostOlgi = 170;

if (wzrostMateusza > wzrostOlgi) {
    console.log("Olga jest niższa");
}


//warunek if-else


if (wzrostOlgi < wzrostMateusza) {
    console.log("Olga jest niższa");
} else {
    console.log("Olga jest wyższa");
}


//warunek else-if 

if (wzrostOlgi < wzrostMateusza) {
    console.log("Olga jest niższa");
} else if (wzrostOlgi == wzrostMateusza) {
    console.log("Olga jest równa");
} else {
    console.log("Olga jest wyższa");
}

//warunek switch

var kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony');
        break;
    case 'zielony':
        console.log('Kolor zielony');
        break;
    case 'niebieski':
        console.log('Kolor niebieski');
        break;
    default:
        console.log('Inny kolor');
}
