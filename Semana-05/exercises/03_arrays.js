console.log('--EXERCISE 3: ARRAYS');

// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
console.log ('-Exercise 3.a');

var e3a = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
        "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log (e3a[4]);
console.log (e3a[10]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log ('-Exercise 3.b');

var e3b = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log (e3b.sort()); 

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log ('-Exercise 3.c');

var e3c = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log (e3c.unshift('Start') + e3c.push('Finish'));
console.log (e3c);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('-Exercise 3.d'); 

var e3d = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log (e3d.shift() + e3d.pop());

// e. Invertir el orden del array (utilizar reverse).
console.log('-Exercise 3.e'); 

var e3e = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log (e3e.reverse()); 

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log ('Exercise 3.f'); 

var e3f = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log (e3f.join('-'));

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log('Exercise 3.g'); 

var e3g = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log (e3g.slice(4,10));

