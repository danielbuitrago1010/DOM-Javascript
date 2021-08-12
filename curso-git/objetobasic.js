let x = 10;
console.log(x.length);

//Funcion constructor de objetos de tipo persona
function Persona(nombre,apellido,email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
        return this.nombre + "," + this.apellido;
    }
}



let padre = new Persona("Juan","Perez","hola@gmail.com");
console.log(padre.nombreCompleto());

let madre = new Persona("Juana","Perez","hola1@gmail.com");
console.log(madre);

padre.nombre = "Daniel";
console.log(padre);
console.log(madre);


let persona = {

    nombre: "juan",
    apellido: "perez",
    edad: 12,
    email: "daniel@hotmail.com",
    idioma:"es",
    get lang(){//METODO GET
return this.idioma.toUpperCase();
    },
    set lang(lang){//METODO SET
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function () {
    return this.apellido + " " + this.nombre;
    }
}


console.log(persona.lang);
persona.lang = "EN";

console.log(persona.lang);
console.log(persona.idioma);


persona.tel = "23112";
console.log(persona.nombre + " , " + persona.apellido);
for (imprimir in persona) {
    console.log(persona[imprimir]);
}

let personaArray = Object.values(persona);
console.log(personaArray);

console.log(persona);
delete persona.tel;
console.log(persona);
console.log(persona.nombreCompleto());
console.log(persona.nombre);
console.log(persona["nombre"]);//otra forma de acceder a objetos
for (propiedad in persona) {
    console.log(propiedad); 
}
let persona2 = new Object();
persona2.nombre = "carlos";
persona2.direccion = "kr 2 # 45";
persona2.telefono = "22211312";
console.log(persona2.telefono);

let myObject = new Object();
let myObject2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero1 = new Number(1);
let miNumero2 = 1;

let miBolean1 = new Boolean(false);
let myBolean2 = true;

let miArray = new Array();
let miArray2 = [];

let mifuncion = new Function();
let mifuncion2 = function () {
    
}




