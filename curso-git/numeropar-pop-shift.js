let a = 16;
if (a % 2 == 0) {
    console.log("Es un numero par");
} else {
    console.log("es un numero impar");
}

edad = 17, adulto = 18;
if (edad >= adulto) {
    console.log("Es un adulto");
} else {
    console.log("Es menor de edad");
}



var threeArr = [1, 4, 6];
var oneDown = threeArr.pop(); //eliminar ultimo elemento de la matriz
console.log(removedFromOurArray);
console.log(oneDown);
console.log(threeArr);
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift(); //eliminar primer elemento del la matriz
console.log(removedFromOurArray);
console.log(ourArray);

var ourArray1 = ["Stimpson", "J", "cat"];
ourArray1.pop();
ourArray1.unshift("Happy"); //ingresar al primer elemento de un arreglo
console.log(ourArray1);

var myList = [
    ["asddsa", 12],
    ["dasdsa", 13],
    ["dsadas", 21],
    ["dsadsa", 21],
    ["sadasdsad", 23]
];
console.log(myList);

function reusableFunction() {
    console.log("Hi World");
}
reusableFunction(); //llamar la funcion

function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);


let condicion = false;
if (3 > 2) {
    console.log("La condicion es verdadera");

} else {
    console.log("La condicion es falsa");
}

let numero = 5;

if (numero == 1) {
    console.log("Numero 1");
} else if (numero == 2) {
    console.log("Numero 2");
}
else if (numero == 3) {
    console.log("Numero 3");
}
else if (numero == 4) {
    console.log("Nuero 4");
}
else{
console.log("Numero desconocido");
}
var myGlobal = 10;

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
console.log(someVar);
function timesFive(num) {
    return num * 5;
  }
  var answer = timesFive(5);
  console.log(answer);
  answer = timesFive(6);
  console.log(answer);
  // Configuración

var processed = 2;

function processArg(num) {
  return (num + 3) / 5;
}

// Cambia solo el código debajo de esta línea

processed = processArg(7);
console.log(processed);


function nextInLine(arr, item) {
    // Cambia solo el código debajo de esta línea
  arr.unshift (item);
  var removedItem = arr.pop();
  return removedItem;
    // Cambia solo el código encima de esta línea
  
  
  }
  
  // Configuración
  var testArr = [1,2,3,4,5];
  
  // Muestra el código
  console.log("Before: " + JSON.stringify(testArr));
  
  console.log(nextInLine(testArr, 6));//se muestra el elemento agregado a la primera fila del arreglo
  console.log("After: " + JSON.stringify(testArr));


