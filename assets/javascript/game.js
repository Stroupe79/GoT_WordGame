//Game intro

// variables

var words = [
    "SNOW",
    "LEADER",
    "STARK",
    "KING",
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
win();


//visual elements

document.getElementById("tries").textContent = tries;

document.onkeyup = function (loop) {

    var userInput = loop.key.toUpperCase();
    var delAlpha = userInput;
    alpha(delAlpha);
    console.log(alphabet);


    // if input key doesn't match anything in the blankArray run this - lives inside loop function

    if (word.indexOf(userInput) === -1) {
        tries--;
        if (tries === 0) {
            fadeOutEffect();
            fadeInEffect();
        }


        // what to do if userInput = one of the letters in the "word" variable

    } else if (word.includes(userInput)) {
        for (var i = 0; i < word.length; i++)
            if (word[i] === userInput) {
                blankArray.splice([i], 1, userInput);
                noComma();
                win();
            }
    };

    console.log(userInput);
    document.getElementById("tries").textContent = tries;
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
    x.textContent = comArray.join(" ");
    console.log(comArray);
};

function noCommaAlpha() {
    var x = document.getElementById("alphabet");
    x.textContent = alphabet.join(" ");
    console.log(alphabet);
};

//function to check for victory condition

function win() {
    if (blankArray.indexOf(" - ") === -1) {
        fadeOutEffect();
    }
}

// function fade text on win and loss - code from https://stackoverflow.com/questions/29017379/how-to-make-fadeout-effect-with-pure-javascript


function fadeOutEffect() {
    var fadeTarget = document.getElementById("fadeText");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 100);

}

function fadeInEffect() {
    var fadeInTarget = document.getElementById("lossText");
    var fadeInEffect = setInterval(function () {
        if (!fadeInTarget.style.opacity) {
            fadeInTarget.style.opacity = 0;
        }
        if (fadeInTarget.style.opacity < 1) {
            fadeInTarget.style.opacity += 1;
        } else {
            clearInterval(fadeInEffect);
        }
    }, 100);

}