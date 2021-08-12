//OPERADOR AND
let a =10;
let valMin = 0, valMax =10;
if (a >= valMin && a<= valMax) {
    console.log("Dentro del rango");

}
else{
    console.log("fuera del rango");
}
//OPERADOR OR
let vacaciones = false , diaDescanso = false;
if (vacaciones || diaDescanso){
console.log("El padre puede asistir al evento");
}
else{
    console.log("el padre esta ocupado");
}
let vacaciones1 = true , diaDescanso2 = false;
let resultado = (vacaciones1 || diaDescanso2 ) ? "El padre puede asistir al evento" : "el padre esta ocupado";
console.log(resultado);

let numero = 12;
let numeropar = (numero % 2 == 0) ? "Numero Par" : "Numero Impar";
console.log(numeropar);



