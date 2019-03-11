

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
 var tries = 6; 
 var guessSlots;
 document.getElementById("hangman").src = "./assets/images/hangman1.jpg";
 var hangman5 = document.getElementById("hangman").src = "./assets/images/hangman2.jpg";
 var hangman4 = document.getElementById("hangman").src = "./assets/images/hangman3.jpg";
 var hangman3 = document.getElementById("hangman").src = "./assets/images/hangman4.jpg";
 var hangman2 = document.getElementById("hangman").src = "./assets/images/hangman5.jpg";
 var hangman1 = document.getElementById("hangman").src = "./assets/images/hangman6.jpg";

 //generates random answer word

 var word = words[Math.floor(Math.random() * words.length)];

 console.log(word);

 //creates the spaces on the html and creates an answer array

var blankArray = [];
for (var i = 0; i < word.length; i++) {
   blankArray.push(" _ ");
}

//visual elements

document.getElementById("tries").innerHTML = tries;
document.getElementById("blankSlots").innerHTML = blankArray; 
document.getElementById("alphabet").innerHTML = alphabet;
document.getElementById("hangman").src = "./assets/images/hangman1.jpg";
// User input section and main game loop


document.onkeyup = function(loop) {

var userInput = loop.key.toLowerCase();
var delAlpha = userInput;
alpha(delAlpha);
console.log(alphabet);
document.getElementById("alphabet").innerHTML = alphabet;





// if input key doesn't match anything in the blankArray run this - lives inside loop function

if (word.indexOf(userInput) === -1 ) {
   tries-- ;
   hangmanImg(tries);
   if (tries === 0) {
      alert("Game Over!");
   }
     
  

// what to do if userInput = one of the letters in the "word" variable

}else if (word.includes(userInput))  {
   for (var i = 0; i < word.length; i++)
    if (word[i] === userInput){
       blankArray.splice([i], 1, userInput);
       
    
      
       
    }
    
    document.getElementById("blankSlots").innerHTML = blankArray;
   

        
};

console.log(userInput);
document.getElementById("tries").innerHTML = tries;

};


// end of main game loop function

//function to remove used letters on html

function alpha (delAlpha) {
   console.log(delAlpha);
   for (var i = 0; i < alphabet.length; i++)
   if (alphabet[i] === delAlpha) {
   alphabet.splice([i], 1, " ");
   }
   };

function hangmanImg () {
   if (tries === 5)
   document.getElementById("hangman").src = "./assets/images/hangman1.jpg";
   else if (tries === 4)
   document.getElementById("hangman").src = "./assets/images/hangman2.jpg";
   else if (tries === 3)
   document.getElementById("hangman").src = "./assets/images/hangman3.jpg";
   else if (tries === 2)
   document.getElementById("hangman").src = "./assets/images/hangman4.jpg";
   else if (tries === 1)
   document.getElementById("hangman").src = "./assets/images/hangman5.jpg";
   else if (tries === 0)
   document.getElementById("hangman").src = "./assets/images/hangman6.jpg";
}










