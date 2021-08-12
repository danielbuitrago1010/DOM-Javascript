class Persona {

    static contadorPersonas = 0;




    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }
    get idPersona() {
        return this._idPersona
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    get edad() {
        return this._apellido;
    }
    set edad(edad) {
        this._edad = edad;
    }

    //Sobreescribiendo el metodo de la clase Padre (Object)
    toString() {
        //Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad;
    }

}

class Empleado extends Persona {
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo) {
        //llamar al constructor de la clase padre
        super(nombre, apellido,edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;


    }

    get idEmpleado() {
        return this._idEmpleado;
    }

    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    //Sobreescritura



    toString() {
        //Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return super.toString() + " " + this._idEmpleado + " " + this._sueldo;
    }
}

class Cliente extends Persona {
    static contadorClientes = 0;
    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        //llamar al constructor de la clase padre
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.contadorClientes;

    }

    get idCliente() {
        return this._idCliente;
    }
    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
        return this._fechaRegistro = fechaRegistro;
    }

    //Sobreescritura

    toString() {
        //Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return super.toString() +  " " + this._fechaRegistro + " " + this._idCliente;
    }

}
let persona1 = new Persona('Juan', 'Perez', 12);
console.log(persona1.toString());

let empleado1 = new Empleado("Alejandro","Martinez",12,12211212);
console.log(empleado1.toString());
let empleado2 = new Empleado("Alejandro","Martinez",12,12211212);
console.log(empleado2.toString());

let cliente1 = new Cliente("Daniel","Buitrago",12,new Date());
console.log(cliente1.toString());