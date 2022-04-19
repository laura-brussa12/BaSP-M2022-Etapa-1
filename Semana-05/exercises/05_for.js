console.log('--EXERCISE 5: FOR');

// a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
console.log('-Exercise 5.a');

var e5a = ['Chocolate', 'Pascua', 'Dulce', 'Conejo', 'Oreo'];
for(var i = 0; i <= 4; i++) {
    alert('Exercise 5 a: ' + e5a[i])
}

// b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
console.log('-Exercise 5.b');

var e5b = ['chocolate', 'pascua', 'dulce', 'conejo', 'oreo']
for(var i = 0; i <= 4; i++) {
    var wordWithMayus = e5b[i].substring(1,0).toUpperCase() + e5b[i].substring(1,e5b[i].length).toLowerCase();
    alert('Exercise 5 b: ' + wordWithMayus)
}

// c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
console.log('-Exercise 5.c');

var sentence = ' '
var e5c = ['Chocolate', 'Pascua', 'Dulce', 'Conejo', 'Oreo'];

for(var i = 0;  i <= 4; i++) {
    console.log(sentence + e5c[i])
}
alert(e5c);

// d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
console.log('-Exercise 5.d');

var e5d = [];
for (var i = 0;  i <= 9; i++) {
    e5d.push(i);
}
console.log(e5d);