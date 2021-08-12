let numero = 1;
let numeroTexto = "Valor desconocido";
switch (numero) {
    case 1:
        numeroTexto = "Numero 1";
        break;
    case 2:
        numeroTexto = "Numero 2";
        break;
    case 3:
        numeroTexto = "Numero 3";
        break;
    case 4:
        numeroTexto = "Numero 4";
        break;
    default:
        numeroTexto = "Valor  no encontrado";
}

console.log(numeroTexto);

let mes = 11;
let estacion = "desconocida";

switch (mes) {
    case 1:case 2:case 12:
        estacion = "Invierno";
        break;
    case 3:case 4:case 5:
    estacion = "Primavera";
    break;
    case 6:case 7:case 8:
        estacion = "Verano";
    break;
    case 9:case 10:case 11:
        estacion = "Otoño";
    break;

    default:
        estacion = "Valor Incorrecto";
}
console.log(estacion);
//Normal
console.log('JavaScript, normalmente llamado JS, es un\n' +             'lenguaje de programacion que se ajusta al\n' + 
'estandar ECMAScript. JavaScript es un lenguaje multiproposito\n' + 
'y multiparadigma' ); 


//Atajo
console.log(`JavaScript, normalmente llamado JS, es un lenguaje de programacion que se ajusta al estandar ECMAScript. JavaScript es un lenguaje multiproposito y multiparadigma`); 


