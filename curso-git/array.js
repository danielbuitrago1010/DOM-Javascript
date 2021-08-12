let names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Cambia solo el código debajo de esta línea
    if (strokes == 1) {
        console.log("Hole-in-one!");
      } else if (strokes <= par - 2) {
        return "Eagle";
      } else if (strokes == par - 1) {
        return "Birdie";
      } else if (strokes == par) {
        return "Par";
      } else if (strokes == par + 1) {
        return "Bogey";
      } else if (strokes == par + 2) {
        return "Double Bogey";
      } else {
        return "Go Home!";
      }
    // Cambia solo el código encima de esta línea
}
golfScore(1, 4);

function caseInSwitch(val) {
        var answer = "";
        // Cambia solo el código debajo de esta línea
      
        switch (val) {
                case 1:
                  answer = "alpha";
                  console.log(answer);
                  break;
                case 2:
                  answer = "beta";
                  console.log(answer);
                  break;
                case 3:
                  answer = "gamma";
                  console.log(answer);
                  break;
                case 4:
                  answer = "delta";
                  console.log(answer);
                  break;
              }
      
      
        // Cambia solo el código encima de esta línea
        return answer;
      }
      
      caseInSwitch(2);
      
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line

// Change this line
firstLetterOfLastName = lastName;
console.log(firstLetterOfLastName);

for (lastName = 0; lastName < 4; lastName++) {
   
                console.log(firstLetterOfLastName);
               

            
        }
        
 