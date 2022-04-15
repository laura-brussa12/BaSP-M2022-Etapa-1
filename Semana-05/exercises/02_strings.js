console.log ('--EXERCISE 2: STRINGS');

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
console.log ('-Exercise 2.a');

var e2a = 'This is the exercise 2 item a';
console.log ( 'result:' + e2a.toUpperCase ()); 

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log ('-Exercise 2.b');

var e2b = 'Hello, this is the exercise 2 item b'; 
var e2bb = e2b.substring(5,0);
console.log ('result:' + e2bb);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log ('-Exercise 2.c');

var e2c = 'Exercise 2 last item'; 
var e2cc = e2c.substring(20,17); 
console.log( 'result:' + e2cc);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
console.log ('-Exercise 2.d');

var e2d = 'supercalifragilisticoexpialidoso'; 
var e2dd = ((e2d.substring(1,0)).toUpperCase()) + ((e2d.substring (1,32)).toLowerCase());
console.log ('result:' + e2dd);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
console.log('-Exercise 2.e'); 

var e2e = 'Exercise two'; 
var e2ee = e2e.indexOf(" ");
console.log ('result:' + e2ee); 

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
console.log('-Exercise 2.f');

var e2f = 'problematica semanal';
var e2ff = ((e2f.substring(1,0)).toUpperCase()) + ((e2f.substring(1,e2f.indexOf(' ')).toLowerCase())) + ' ' 
+ ((e2f.substring(e2f.indexOf(' ')+1,e2f.indexOf(' ')+2)).toUpperCase()) 
+ ((e2f.substring(e2f.indexOf(' ')+2, e2f.length)).toLowerCase());

console.log ('result:' + e2ff); 
