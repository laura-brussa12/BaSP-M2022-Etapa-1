console.log ('--EXCERCISE 1: VARIABLES AND OPERATORS');

// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos número en una 3er variable.  

console.log ('-Exercise 1.a:');

var x = 5;
var n = 6;
var y = (x + n);

console.log ('result:' + y);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log ('-Exercise 1.b');

var firstString = 'Exercise one';
var secondString = 'second item';
var thirdString = (firstString + ' '+ secondString)

console.log ('result:' + thirdString);

// c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).

console.log ('-Exercise 1.c');
var s = 'Exercise one';
var c = 'third item'; 
var r = s.length + c.length;

console.log ('result: ' + r);