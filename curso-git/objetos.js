

var ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };
  var x = ourStorage.cabinet["top drawer"]["folder2"];

console.log(x);

  var y = ourStorage.desk.drawer;
  console.log(y);

  var ourPets = [
    {
      animalType: "cat",
      names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
      ]
    },
    {
      animalType: "dog",
      names: [
        "Spot",
        "Bowser",
        "Frankie"
      ]
    }
  ];
  let a = ourPets[0].names[2];
  console.log(a);
  let b =ourPets[1].names[0];
  console.log(b);


  var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Cambia solo el código debajo de esta línea


var secondTree = myPlants[1].list[1]; // Cambia esta línea
console.log(secondTree);

//Colección de discos
// Configuración
var collection = {//object
    2548: {//id
      albumTitle: 'Slippery When Wet',//prop
      artist: 'Bon Jovi',//prop
      tracks: ['Let It Rock', 'You Give Love a Bad Name']//prop
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Cambia solo el código debajo de esta línea
  function updateRecords(object, id, prop, value) {
    if(prop != "tracks" && value != ""){//Si prop no es tracks y value no es una cadena vacía, actualiza o establece la propiedad prop del album a value.
      object[id][prop] = value;
  
    }
    else if(prop == "tracks" && object[id].hasOwnProperty("tracks") == false){//Si prop es tracks pero el álbum no tiene una propiedad tracks, crea un arreglo vacío y agrégale value a él.
     object[id][prop] = [value];
    }
    else if(prop == "tracks" && value != ""){//i prop es tracks y value no es una cadena vacía, agrega value al final del arreglo de tracks existentes del álbum.
  object[id][prop].push(value);
    }
   else if(value == ""){//Si value es una cadena vacía, elimina esa propiedad prop del álbum.
     delete object[id][prop];
   }
    return object;
  }
  
  var x=updateRecords(collection, 5439, 'artist', 'ABBA');
  console.log(x);
  
  var myArray = [];
var i=5;

while(i >= 0){
  myArray.push(i);
i--;
}

console.log(myArray);

// Configuración
var myArray = [];
var i=0;
while(i < 6){
  myArray.unshift(i);
i++;
}
// Cambia solo el código debajo de esta línea
console.log(myArray);

var myArray = [];
for (var i = 0; i < 10; i += 1) {
  myArray.push(i);
}



