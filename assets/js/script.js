// Variable targeting HTML Elements
var timerEl = document.getElementById('timer');
var boxEl = document.getElementById("box");
var highScoreEl = document.getElementById('highscores');
var startButton =document.getElementById('startButton')

// Question and answer objects
var question1 = {
    question: 'What can a string consist of?',
    wrongAnswers: ["letters, numbers, and/or symbols", "a piece of twine", "Just letters"],
    rightAnswer: "letters, numbers, and/or symbols"
};

var question2 = {
    question: 'What does NaN stand for',
    wrongAnswers: ["Nice and Neat", "Not a New", "Nimble apple Note"],
    rightAnswer: "Not a Number"
};

//Standard Variables
var isWin = false;
var winTally = 0;
var lossTally = 0;
var scoreTally = 0;

function countDown() {
    var timeLeft = 60;

    var timeInterval = setInterval( function(){
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + "⌛";
            timeLeft--;
        } else {
            timerEl.textcontent = '0';
            clearInterval(timeInterval);
            showScore();
        }
    }, 1000)
}

function startQuiz(){
    isWin = false
    countDown()
    //Add function to produce first question box
}

startButton.addEventListener("click", startQuiz);
