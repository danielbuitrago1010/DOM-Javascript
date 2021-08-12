//Hoisting
// miFuncion(1,2);
//Declaracion de la funcion
function miFuncion(a, b) {
    console.log("suma" + " : " + (a + b));

}

miFuncion(1, 2);
miFuncion(1, 2);
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function miFuncion1(a, b) {
    console.log(arguments.length);//propiedad para utilizar dentro de la funcion
    return a * b;
}

let resultado = miFuncion1(3, 2);
console.log(resultado);

let x = function (a,b) {return(a+b)}//funcion como expresion
resultado1= x(1,2);
console.log(resultado1);

(function (a,b) {// tipo self invoking
    console.log("Ejecutando" + ":" + (a+b));

})(4,3);



function golfScore(par, strokes) {
    // Cambia solo el código debajo de esta línea
    if (strokes == 1) {
        console.log(names[0]);
        return names[0];
    } else if (strokes <= par - 2) {
        console.log(names[1]);
        return names[1];
    } else if (strokes <= par - 1) {
        console.log(names[2]);
        return names[2];
    } else if (strokes == par) {
        console.log(names[3]);
        return names[3];
    } else if (strokes == par + 1) {
        console.log(names[4]);
        return names[4];
    } else if (strokes == par + 2) {
        console.log(names[5]);
        return names[5];
    } else if (strokes >= par + 3) {
        console.log(names[6]);
        return names[6];
    } else {
        return "Change Me";
    }
    // Cambia solo el código encima de esta línea
}

golfScore(4, 4);

// Configuración
function phoneticLookup(val) {
    var result = "";
    // Usa objetos para hacer búsquedas
    // Cambia solo el código debajo de esta línea
    var lookup = {
      "alpha":"Adams",
      "bravo":"Boston",
      "charlie":"Chicago",
      "delta":"Denver",
      "echo":"Easy",
      "foxtrot":"Frank",
  };
  result = lookup[val];
  
   
  
    // Cambia solo el código encima de esta línea
    return result;
  }
  
  var w = phoneticLookup("charlie");
  console.log(w);

