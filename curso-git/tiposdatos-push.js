//  EJEMPLOS DE 
// TIPOS DE DATOS 
// EN JAVASCRIPT
// Tipo de dato String
var nombre = "Carlos"
console.log(nombre);

// typeof: preguntar el tipo de variable
nombre = 10, 3;
console.log(typeof nombre);
// Tipo de dato numerico
var numero = "1000"
console.log(numero);

// Tipo de dato object
var objeto = {
    nombre: "juan",
    apellido: "perez",
    telefono: "telefono"
}
console.log(objeto);

//Tipo de dato boolean
var bandera = true;
console.log(typeof bandera);

//tipo de dato function
function mifuncion() {}
console.log(typeof mifuncion);

//tipo de dato symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//tipo clase es una funcion

class Persona{
    constructor(nombre , apellido){
        this.nombre=nombre;
        this.apellido=apellido;   
    }
}
console.log(typeof Persona);
//tipo undefined
var a;
console.log(a);

a = undefined;

//null
var a=null;
console.log(a);

//array
var autos =['bmw','Audio','volvo'];
console.log(autos);
console.log(typeof autos);

var a = '';
console.log(a);

var autos = ["bwm","audi","ferrari"]

console.log(autos);

var arr1 = [1,2,3];
var arr2 = ["Stimpson", "J", "cat"];
arr1.push(4);//agregar un elemento a la matriz
arr2.push(["happy", "joy"],[["dasd","fsad"]]);

console.log(arr1);
console.log(arr2);

var data = arr2[4][0][0][2];
console.log(data);

for ( let contador2 = 0; contador2 <= 10; contador2++) {
    if (contador2 % 2 == 0) {
        // continue;//ir a la siguiente iteracion
        console.log(contador2);
    }
    else{
    console.log(contador2);
    }
}

