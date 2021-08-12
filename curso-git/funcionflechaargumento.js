//Declaración Función de tipo Expresión
let sumar = function (a , b) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2]

};

resultado = sumar(2,2,4);
console.log(resultado);


const sumarFuncionTipoFlecha = (a, b) => a + b; //funcion tipo flecha
resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);
const sumarFuncion = (c, d) => c + d;
r = sumarFuncion(1, 2);
console.log(r);


//numero impar

var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

console.log(myArray);

var myArray = [];

for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

console.log(myArray);

var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
var arr = [
    [1,2], [3,4], [5,6]
  ];
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }

  function multiplyAll(arr) {
    var product = 1;
    // Cambia solo el código debajo de esta línea
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
    // Cambia solo el código encima de esta línea
    return product;
  }
  
  var z = multiplyAll([[1,2],[3,4],[5,6,7]]);
  console.log(z);
  
