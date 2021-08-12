let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z );

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log( "Resultado de la mult:" + z);

z = a * b;
console.log( "Resultado de la mult:" + z);

z = a / b;
console.log( "Resultado de la division:" + z);

z = a % b;//residuo de la division
console.log( "Resultado de operacion modulo (residuo):" + z);

z = a ** b;
console.log( "Resultado de operador exponente:" + z);

z = a ** b;
console.log( "Resultado de operador exponente:" + z);
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);



let printNumTwo1;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo1 = function() {
      return i;
    };
  }
}
console.log(printNumTwo1());
console.log(i);

