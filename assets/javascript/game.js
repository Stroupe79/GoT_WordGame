//Game intro

// variables

var words = [
   "SNOW",
   "WATCHMAN",
   "LEADER",
   "STARK",
   "KING"
]

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var tries = 5;
var guessSlots;

//generates random answer word

var word = words[Math.floor(Math.random() * words.length)];

console.log(word);

//creates the spaces on the html and creates an answer array

var blankArray = [];
for (var i = 0; i < word.length; i++) {
   blankArray.push(" - ");
   var comArray = blankArray;

}

noComma();
noCommaAlpha();


//visual elements
document.getElementById("hangman").src = "./assets/images/crown.png";
document.getElementById("tries").innerHTML = tries;
// document.getElementById("blankSlots").innerHTML = blankArray; 
// document.getElementById("alphabet").innerHTML = alphabet;
// document.getElementById("hangman").src = "./assets/images/hangman1.jpg";
// User input section and main game loop


document.onkeyup = function (loop) {

   var userInput = loop.key.toUpperCase();
   var delAlpha = userInput;
   alpha(delAlpha);
   console.log(alphabet);





   // if input key doesn't match anything in the blankArray run this - lives inside loop function

   if (word.indexOf(userInput) === -1) {
      tries--;
      hangmanImg(tries);
      if (tries === 0) {
         alert("Game Over!");     
      }


   // what to do if userInput = one of the letters in the "word" variable

   } else if (word.includes(userInput)) {
      for (var i = 0; i < word.length; i++)
         if (word[i] === userInput) {
            blankArray.splice([i], 1, userInput);
            noComma();
         }

      //  document.getElementById("blankSlots").innerHTML = blankArray;



   };

   console.log(userInput);
   document.getElementById("tries").innerHTML = tries;
};



// end of main game loop function

// function to remove used letters on html

function alpha(delAlpha) {
   console.log(delAlpha);
   for (var i = 0; i < alphabet.length; i++)
      if (alphabet[i] === delAlpha) {
         alphabet.splice([i], 1, " ");
         noCommaAlpha();
      }
};

// functions to remove commas from arrays

function noComma() {
   var x = document.getElementById("blankslots2");
   x.innerHTML = comArray.join(" ");
   console.log(comArray);
};

function noCommaAlpha() {
   var x = document.getElementById("alphabet");
   x.innerHTML = alphabet.join(" ");
   console.log(alphabet);
};

// function to fade text on win - code from https://stackoverflow.com/questions/31657664/how-to-make-text-fade-out

// function fadeOut() { // start a delay
//    var fade = document.getElementById(); // get required element
//    fade.style.opacity = 1; // set opacity for the element to 1
//    var timerId = setInterval(function() { // start interval loop
//      var opacity = fade.style.opacity; // get current opacity
//      if (opacity == 0) { // check if its 0 yet
//        clearInterval(timerId); // if so, exit from interval loop
//      } else {
//        fade.style.opacity = opacity - 0.05; // else remove 0.05 from opacity
//      };


// function to change hangman img

// old hangman img loop
// function hangmanImg() {
//    if (tries === 5)
//       document.getElementById("hangman").src = "./assets/images/hangman1.jpg";
//    else if (tries === 4)
//       document.getElementById("hangman").src = "./assets/images/hangman2.jpg";
//    else if (tries === 3)
//       document.getElementById("hangman").src = "./assets/images/hangman3.jpg";
//    else if (tries === 2)
//       document.getElementById("hangman").src = "./assets/images/hangman4.jpg";
//    else if (tries === 1)
//       document.getElementById("hangman").src = "./assets/images/hangman5.jpg";
//    else if (tries === 0)
//       document.getElementById("hangman").src = "./assets/images/hangman6.jpg";
// }

//new hangman skull with crown icon
function hangmanImg() {
   if (tries === 5)
      document.getElementById("hangman").src = "./assets/images/crown.png";
   else if (tries === 4)
      document.getElementById("hangman").src = "./assets/images/crown.png";
   else if (tries === 3)
      document.getElementById("hangman").src = "./assets/images/crown.png";
   else if (tries === 2)
      document.getElementById("hangman").src = "./assets/images/crown.png";
   else if (tries === 1)
      document.getElementById("hangman").src = "./assets/images/crown.png";
   else if (tries === 0)
      document.getElementById("hangman").src = "./assets/images/crown.png";
}

