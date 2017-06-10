'use strict';

var imiona = ['Monika', 'Krystian', 'Łukasz'];

console.log(imiona);

imiona[3] = 'Tania';
imiona[2] = 'Ela';

console.log(imiona);

imiona.push('Geralt');

console.log(imiona);

imiona.pop();

console.log(imiona);

imiona.shift();

console.log(imiona);

imiona.unshift('Zenek');

console.log(imiona);

console.log(imiona.length);

for (var i = 0; i < imiona.length ; i++) {
    console.log( imiona[i] );
}

imiona.forEach(function (element, i) {
    console.log( 'Element nr ' + i + ' = ' + element);
});

console.log(imiona.join());

console.log(imiona.sort());

console.log(imiona.reverse());

var imionaMeskie = ['Robert', 'Zenek'];
var imionaDamskie = ['Ania', 'Asia'];

console.log(imionaMeskie.concat(imionaDamskie));

console.log(imiona.indexOf("Zenek"));

console.log(Array.isArray(imionaDamskie));

console.log(imiona.splice(2, 3, "Julek", "Krzyś"));
