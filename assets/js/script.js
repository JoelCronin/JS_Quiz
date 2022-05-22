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
var finalScore = document.getElementById('finalScore')
var allAnswerBoxes = document.querySelectorAll('p')
var container = document.getElementById("quizContainer")
var scoreDisplay = document.getElementById("finalBox")
var initials = document.getElementById("initials")

// Question and answer objects
var questions = [
    { 
    question: 'What can a string consist of?',
    answers: ["letters, numbers, and/or symbols","a piece of twine", "Just letters"],
    rightAnswer: "letters, numbers, and/or symbols"
    },
    {
    question: 'What does NaN stand for',
    answers: ["Nice and Neat", "Not a Number", "Not a New", ],
    rightAnswer: "Not a Number"
    },
    {
    question: 'Which of these would be considered a Boolean Value?',
    answers: ["45", "Function", "True"],
    rightAnswer: "True"
    },
    {
    question: 'What is a for loop used for?',
    answers: ["To count up to 100 and back down again", "To cycle between functions", "Check for a condition and then repeatedly execute a block of code whilst conditions are met"],
    rightAnswer: "Check for a condition and then repeatedly execute a block of code whilst conditions are met"
}];
 
var correctAnswers = ["True", "Check for a condition and then repeatedly execute a block of code whilst conditions are met", "Not a Number", "letters, numbers, and/or symbols" ]

//Standard Variables
var isWin = false;
var winTally = 0;
var lossTally = 0;
var scoreTally = 0;
var timeLeft = 20;
var questionIndex = 0;

//Will start quiz when button is presed
startButton.addEventListener("click", startQuiz);

function startQuiz(){
    // isWin = false
    countDown();
    generateQuestion();
    startButton.removeEventListener("click", startQuiz)
};

function countDown() {
    
    var timeInterval = setInterval( function(){
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft + "⌛";
            timeLeft--;
        } else {
            timerEl.setAttribute("style", "display: none");
            clearInterval(timeInterval);
            showScore();
        }
    }, 1000)
}

function generateQuestion () {
    questionBox.textContent = questions[questionIndex].question;
    answerBox1.textContent = questions[questionIndex].answers[0];
    answerBox2.textContent = questions[questionIndex].answers[1];
    answerBox3.textContent = questions[questionIndex].answers[2];
};

container.addEventListener("click", evaluateAnswer)


function evaluateAnswer (event) {
    var element = event.target;

if (element.matches(".answer") && element.textContent === questions[questionIndex].rightAnswer) {
 console.log("correct");
 scoreTally++;
 setScore();
 questionIndex++;
 questionCycle();
} else {
    console.log("wrong");
    scoreTally--
    setScore();
    questionIndex++;
    timeLeft -=15;
    questionCycle();
}
}

function setScore() {
    highScoreEl.textContent = " Current Score: " + scoreTally
 }


function questionCycle () {
    if (questionIndex < questions.length){
        generateQuestion ();
        console.log(questionIndex)
    } else {
        console.log("Failure");
        
        container.removeEventListener("click", evaluateAnswer)
        showScore();
    }
}

function showScore() {
 container.setAttribute("style", "display: none");
 finalScore.textContent = "QUIZ IS OVER!!!! Your final Score was " + scoreTally;
 highScoreEl.setAttribute("style", "display: none");

}

console.log(questions.length)
console.log(questionIndex)



// function evaluateAnswers() {
//     if (allAnswerBoxes.textContent === questions[0].rightAnswer){
//         console.log("Correct")
//     } else {
//         console.log ("Wrong")
//     }
// }

// function questionCycle () {
//     if (questionIndex < questions.length){
//         generateQuestion ();
//     } else {
//         finalScore.textContent = scoreTally
//     }
// }
