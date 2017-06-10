'use strict';

//pętla FOR


for (var i = 0; i <= 4; i++) {
    console.log(i);
}


for (var i = 4; i > 0; i--) {
    console.log(i);
}


//pętla WHILE


var it = 0;
while (it < 5) {
    console.log(it);
    it++;
}

//pętla DO...WHILE

var iter = 20;
do {
    console.log(iter);
    iter++;
} while (iter < 10);


//break

var a = 0;
while (a < 5) {
    console.log(++a);

    if (a == 3) {
        break;
    }
}

//post- i preinkrementacja


for (var z = 1; z < 4;) {
    console.log(++z);
}
console.log('-----');
for (var z = 1; z < 4;) {
    console.log(z++);
}


//continue


for (var b = 0; b < 6; ++b) {

    if (b == 3) {
        continue;
    } else {
        console.log(b);
    }
    console.log("--");
}
