let a = 3,
    b = 2,
    c = 1;
d = 4;
let z = a * b + c;
console.log(z);

z = c + (a * b) / d;
console.log(z);

z = ((c + a) * b) / c;
console.log(z);

let miNumero = "17";
console.log(typeof miNumero);
let edad = Number(miNumero); //convertir String a numero


console.log(edad);

// let resultado = (edad >= 18) ? "Puede votar " : "No puede votar" ;
// console.log(resultado);

if (isNaN(edad)) {
    console.log("No es un numero");
} else {

    if (edad >= 18) {
        console.log("Puede votar");
    } else {
        console.log("Muy joven para votar");

    }
}

let t = 5;
let s = 10;

let m = ++t + s--;

console.log(m);

let r = 4 + 5 * 6 / 3;
console.log(r);

r = (4+5) * 6 / 3;
console.log(r);