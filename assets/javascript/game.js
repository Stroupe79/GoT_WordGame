 var usrName = prompt("What is your name?");
 alert("Welcome " + usrName + " to Game of Thrones hangman!");

 var words = [
    "crown",
    "hodor",
    "dragon",
    "white walker",
    "stark",
    "fire"
 ]

 var word = words[Math.floor(Math.random() * words.length)];

 console.log(word);
var answer = [];
for (var i = 0; i < answer.length; i++) {
   answer[i] = "_";
}

var letter = prompt("Word chosen. Please choose a letter");


