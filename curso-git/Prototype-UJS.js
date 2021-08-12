//Funcion constructor de objetos de tipo Persona
let persona1 = {
    nombre: "Juan",
    apellido:"Perez",
    nombreCompleto: function(titulo,tel){
        // return this.nombre + " " + this.apellido;
        return titulo + " : " + this.nombre + "  " + this.apellido + " : " +  tel ;
}
}

let persona2 = {
    nombre: "Carlos",
    apellido:"Lara"
}

console.log(persona1.nombreCompleto());
let array1 = ["ing","2122212112"]
console.log(persona1.nombreCompleto.apply(persona2,array1));
console.log(persona1.nombreCompleto.call(persona2));



function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = '44332211';

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
padre.tel = '11223344';
console.log( padre.tel );

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
madre.tel = '66889900';
console.log( madre.tel );

