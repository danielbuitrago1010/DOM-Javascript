miFuncion2();
miFuncion1();

function miFuncion1(){
    console.log('función 1');
}

function miFuncion2(){
    console.log('función 2');
}

//Función de tipo callback
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5,3, imp);
//SETTIMEOUT
function miFuncionCallback() {
    console.log("saludo asincrono 3");
}

// setTimeout(miFuncionCallback,3000);

// setTimeout(function () {console.log("saludo asincrono 2");},2000);

// setTimeout(() => console.log("saludo asincrono 1"),1000);

let reloj = () =>{
    let fecha = new Date();
console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}
// setInterval(reloj,1000);//1 seg
