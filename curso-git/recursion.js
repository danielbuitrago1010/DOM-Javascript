function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }

 z= multiply([0],1);
 console.log(z);

 function sum(arr, n) {
    // Cambia solo el código debajo de esta línea
    if (n <= 0) {
        return 0;
      } else {
        return sum(arr, n - 1) + arr[n - 1];
      }
    // Cambia solo el código encima de esta línea
  }

  function factorial(n){
    if (n===0){
        return 1;
    } else {
        return n*factorial(n-1);
    }
}

f = factorial(3);
console.log(f);

// Configuración
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Cambia solo el código debajo de esta línea
for(let x= 0 ; x < contacts.length; x++){
if(contacts[x].firstName == name){
if(contacts[x].hasOwnProperty(prop)){
 return contacts[x][prop];
}
else{
  return "No such property"
}
}
}
return "No such property "
}

var x = lookUpProfile("Akira", "likes");
console.log(x);

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

var z = randomRange(5,10);
console.log(z);


function convertToInteger(str) {
  return parseInt(str);
  }
  
  var res = convertToInteger("56");
console.log(res);

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

var res = rangeOfNumbers(1,5);
console.log(res);

