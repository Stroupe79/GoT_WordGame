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

 var answerWord = words[Math.floor(Math.random() * words.length)];

 console.log(answerWord);

var letter = prompt("Word chosen. Please choose a letter");


