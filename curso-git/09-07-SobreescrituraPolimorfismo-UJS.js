class Persona{
    // static contadorObjetoPersona = 0;//atributos de nuestra clase
    static contadorPersona = 0;
    // email = "valor default email";//atributos de nuestro objetos
    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
        if (Persona.contadorPersona < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.contadorPersona;
        }
        else{
            console.log("Se han superado el maximo de objetos");
        }
        
        console.log("Se incrementa la variable contador" + " " + Persona.contadorPersona);
    
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona + " " + this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        //Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return this.nombreCompleto();
    }
    static saludar(){
        console.log("saludos desde metodo static");
    }
    static saludar2(persona){
console.log(persona.nombre);

    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }

}

let persona1 = new Persona('Juan', 'Perez' );
console.log( persona1.toString() );
console.log( persona1.nombreCompleto() );

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1 );
console.log( empleado1.nombreCompleto() );
console.log( empleado1.toString());
let persona2 = new Persona('Juan', 'Perez' );
console.log(persona2);
let persona3 = new Persona('Mariano', 'Perez' );
console.log(persona3);
let persona4 = new Persona('JJuancho', 'Perez' );
console.log(persona4);
let persona5 = new Persona('Armando', 'Perez' );
console.log(persona5.toString());

//el static se usa desde una clase y no desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(persona1.contadorObjetoPersona);
console.log(Persona.contadorObjetoPersona);
console.log(Empleado.contadorObjetoPersona);
console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
console.log(Empleado.email);

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);






