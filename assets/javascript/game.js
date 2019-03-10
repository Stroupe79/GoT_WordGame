//  var usrName = prompt("What is your name?");
//  alert("Welcome " + usrName + " to Game of Thrones hangman!");


// variables

 var words = [
    "crown",
    "hodor",
    "dragon",
    "white walker",
    "stark",
    "fire"
 ]
 
 var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 //generates random answer word

 var word = words[Math.floor(Math.random() * words.length)];

 console.log(word);

 //creates the spaces on the html and creates an answer array

var blankArray = [];
for (var i = 0; i < word.length; i++) {
   blankArray.push(" _ ");
}
document.getElementById("blankSlots").innerHTML = blankArray; 

// User input section

var userInput = prompt("Word chosen. Please choose a letter");

document.onkeyup = function() {

letter = userInput.toLowerCase();
if (letter === word[1]) {
   alert("Hello");
}
};

console.log(blankArray);
console.log(alphabet);
console.log(userInput);
