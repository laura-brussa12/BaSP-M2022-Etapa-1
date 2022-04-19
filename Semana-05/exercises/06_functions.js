console.log('--EXERCISE 6: FUNCTIONS');

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
console.log('-Exercise 6.a');

var e6a1 = 50;
var e6a2 = 25;
function suma6a(n1, n2) {
    var num = n1 + n2;
    console.log('Result: ' + num);
}
suma6a(e6a1, e6a2);

// b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
console.log('-Exercise 6.b');

var e6b1 = 50;
var e6b2 = 25;
function suma6b(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        alert('Result: NaN');
    } else {
        var num = n1 + n2;
        console.log('Result: ' + num);
    }

}
suma6b(e6a1, e6a2);
suma6b('Hola', 5);
suma6b(4, 'jnfdv');

// c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log('-Exercise 6.c');

function validateInteger(n1) {
    console.log(Number.isInteger(n1))
}
validateInteger(5.7);
validateInteger(6);
validateInteger('kk');

// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
console.log('-Exercise 6.d');

var e6d1 = 50;
var e6d2 = 25;
function suma6d(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        alert('Result: NaN');
    } else if (!Number.isInteger(n1)) {
        console.log('Fail ' + Math.round(n1));
    } else if (!Number.isInteger(n2)) {
        console.log('Fail ' + Math.round(n2));
    } else {
        var num = n1 + n2;
        console.log('Result: ' + num);
    }

}
suma6d(e6d1, e6d2);
suma6d(7.4, 5);
suma6d(4, 0.3);

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
console.log('-Exercise 6.e');

var e6e1 = 50;
var e6e2 = 25;
function numInteger(n1, n2) {
    if (!Number.isInteger(n1)) {
        console.log('Fail ' + Math.round(n1));
        return false;
    } else if (!Number.isInteger(n2)) {
        console.log('Fail ' + Math.round(n2));
        return false;
    }
    return true;
}
function suma6e(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        console.log('Result: NaN');
    } else if(numInteger(n1, n2)) {
        var num = n1 + n2;
        console.log('Result: ' + num);
    }
}
suma6e(e6e1, e6e2);
suma6e(7.4, 5);
suma6e(4, 0.3);