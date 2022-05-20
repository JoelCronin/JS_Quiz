// Variable targeting HTML Elements
var timerEl = document.getElementById('timer');
var boxEl = document.getElementById("box");
var highScoreEl = document.getElementById('highScores');
var startButton = document.getElementById('startButton');
var questionBox = document.getElementById('questionBox');
var answerBox1 = document.getElementById('answerBox1');
var answerBox2 = document.getElementById('answerBox2');
var answerBox3 = document.getElementById('answerBox3');
var commentBox = document.getElementById('commentBox');
var currentScore = document.getElementById('currentScore');

// Question and answer objects
var question1 = {
    question: 'What can a string consist of?',
    wrongAnswers: ["a piece of twine", "Just letters"],
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

//Will start quiz when button is presed
startButton.addEventListener("click", startQuiz);

function startQuiz(){
    isWin = false
    countDown();
    firstQuestion();
}

function countDown() {
    var timeLeft = 10;
    var timeInterval = setInterval( function(){
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft + "⌛";
            timeLeft--;
        } else {
            timerEl.textContent = '0' + "⌛";
            clearInterval(timeInterval);
            showScore();
        }
    }, 1000)
}

function firstQuestion(){
    questionBox.textContent = question1.question;
    answerBox1.textContent = question1.wrongAnswers[1];
    answerBox2.textContent = question1.rightAnswer;
    answerBox3.textContent = question1.wrongAnswers[0];

    answerBox2.addEventListener("click", correctAnswer)
   }
   
 function correctAnswer(){
 commentBox.textContent = "Correct";
 scoreTally ++;
 setScore();
 }

 function setScore() {
    highScoreEl.textContent = "Score: " + scoreTally
 }



function init() {
    getWins();
    getLosses();
}




init()