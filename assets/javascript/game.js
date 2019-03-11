

//Game intro

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
 var tries = 5; 
 var guessSlots;

 //generates random answer word

 var word = words[Math.floor(Math.random() * words.length)];

 console.log(word);

 //creates the spaces on the html and creates an answer array

var blankArray = [];
for (var i = 0; i < word.length; i++) {
   blankArray.push(" _ ");
}

document.getElementById("blankSlots").innerHTML = blankArray; 

// User input section and main game loop


document.onkeyup = function(loop) {

var userInput = loop.key.toLowerCase();
   
// if input key doesn't match anything in the blankArray run this - lives inside loop function

if (word.indexOf(userInput) === -1 ) {
   alert("Incorrect!");
   tries-- ;
  

// what to do if userInput = one of the letters in the "word" variable

}else if (word.includes(userInput)) {
   for (var i = 0; i < word.length; i++)
    if (word[i] === userInput){
       blankArray.splice([i], 1, userInput);
    }
    document.getElementById("blankSlots").innerHTML = blankArray;

        
};

console.log(userInput);
document.getElementById("tries").innerHTML = tries;

};

// alphabet.pull(userInput);

// end of main game loop function


document.getElementById("alphabet").innerHTML = alphabet;



// console.log(word);
console.log(blankArray);
console.log(alphabet);

