let resultado = sumarTodo(1,2,3,4,5,6);
console.log(resultado);
function sumarTodo() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];//suma = suma + arguments[i]
        
        
    }
    return suma;
}

//paso por valor en funciones
let x = 10;
 function cambiarValor(a) {
     a=20;
 }
 cambiarValor(x);

 console.log(x);


 const persona = {
     nombre : "juan" ,
     apellido : "perez" 
 } 
 
 function cambiarValorFuncion(p1) {
     p1.nombre = "carlos";   
 }

 cambiarValorFuncion(persona);

 console.log(persona);




