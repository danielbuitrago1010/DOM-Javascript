class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;

    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        return this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        return this._apellido = apellido;
    }
nombreCompleto(){
    return this._nombre + " " + this._apellido;
}
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre,apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        return this._departamento = departamento;
    }
    //SOBREESCRITURA
    nombreCompleto(){
        return super.nombreCompleto() + " " + this._departamento;
    }
}



let persona1 = new Persona("Juan", "Perez");
console.log(persona1);

let empleado1 = new Empleado("Maria","Barbosa","Sistemas");
console.log(empleado1);
console.log(empleado1.nombreCompleto());

let persona2 = new Persona("Daniel", "Buitrago");
console.log(persona2);