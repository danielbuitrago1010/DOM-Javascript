// let autos = new Array("BMW","Mercedes","Volvo");
const autos = ["BMW", "Mercedes", "Volvo"];
console.log(autos);


for (let i = 0; i < autos.length; i++) {
    console.log(i + ":" + autos[i]);
}

autos[1] = "Jaguar";
console.log(autos);

autos.push("Audi");
console.log(autos);
console.log(autos.length);
autos[autos.length] = "Cadillac";
console.log(autos);
autos[5] = "Ferrari"; //Agregar un arreglo

console.log(autos);
autos.shift(); //Elimina el primer dato del arreglo
console.log(typeof autos);

console.log(Array.isArray(autos)); //preguntar si es un array



console.log(autos);

autos.pop(); //Elimina el ultimo dato del arreglo

console.log(autos);



autos.pop();
console.log(autos);

function switchOfStuff(val) {
    var answer = "";
    // Cambia solo el código debajo de esta línea
    switch (val) {
        case "a":
            answer = "apple";

            break;
        case "b":
            answer = "bird";

            break;

        case "c":
            answer = "cat";

            break;
        default:
         answer = "Stuff";
         
            break;
    }


    // Cambia solo el código encima de esta línea
    return answer;
}

switchOfStuff(1);

var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ,
    {
    "artist" : "asdsda",
    "title": "dassda",
    "release_year" : 1233,
    "formats":["CD","ds"]
  
    }
    
  ];