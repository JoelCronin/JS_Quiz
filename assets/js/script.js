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
var finalScore2 = document.getElementById('finalScore2')
var allAnswerBoxes = document.querySelectorAll('p')
var container = document.getElementById("quizContainer")
var scoreDisplay = document.getElementById("finalBox")
var initialsEl = document.getElementById("initialsBox")
var submitButton = document.getElementById("submit")
var scoreDisplay = document.getElementById("scoreDisplay")
var playAgainButton = document.getElementById("playAgain")
var liEl0 = document.getElementById("li0")
var liEl1 = document.getElementById("li1")
var liEl2 = document.getElementById("li2")
var liEl3 = document.getElementById("li3")
var liEl4 = document.getElementById("li4")

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
 
// liEl0.textContent = localStorage.getItem("initialsValue") + " scored: " + localStorage.getItem("scoreTally")
// liEl0.textContent = JSON.parse(localStorage.getItem("scoreArray"))


//Standard Variables
var isWin = false;
var winTally = 0;
var lossTally = 0;
var scoreTally = 0;
var timeLeft = 20;
var questionIndex = 0;
var highScoreIndex = 0;
var totalScore = 0;
var initialsValue = 0;
var scoreObject = {};
var scoreArray = [];


// scoreArray = JSON.parse(localStorage.getItem("scoreArray"));

//THe code above can only run once there is something in local storage, before that wont work and drops everything out


// liEl0.textContent = scoreArray[0].name + " scored: " + scoreArray[0].score;
// liEl1.textContent = scoreArray[1].name + " scored: " + scoreArray[1].score;
// liEl2.textContent = scoreArray[2].name + " scored: " + scoreArray[2].score;
// liEl3.textContent = scoreArray[3].name + " scored: " + scoreArray[3].score;

// // liEl0.textContent = Object.keys(scoreArray[0]) + " scored: " + scoreArray[0].property;

// function displayHS (){

//     if(parseScore=== null){
//         liEl0.textContent = ''
// } else {
//     liEl0.textContent = liEl0.textContent = scoreArray[0].name + " scored: " + scoreArray[0].score;
// }
// }
// {
// liEl0.textContent = scoreArray[0].name + " scored: " + scoreArray[0].score
// } else if (scoreArray.length === 2) {
//     liEl1.textContent = scoreArray[1].name + " scored: " + scoreArray[1].score
// } else if (scoreArray.length === 3) {
//     liEl2.textContent = scoreArray[2].name + " scored: " + scoreArray[2].score
// }else if (scoreArray.length === 4) {
//     liEl3.textContent = scoreArray[3].name + " scored: " + scoreArray[3].score
// } else {
//     liEl4.textContent = "Scoreboard Full"
// }
// }
// liEl0.textContent = scoreArray.name[0] + " scored: " + scoreArray.score[0]

//Will start quiz when button is presed
startButton.addEventListener("click", startQuiz);

function startQuiz(){
    // isWin = false
    countDown();
    generateQuestion();
    startButton.setAttribute("style", "display: none");
    timerEl.setAttribute("style", "display: block");
    highScoreEl.setAttribute("style", "display: block");
    setScore();
    container.addEventListener("click", evaluateAnswer)
};

function countDown() {
    
    var timeInterval = setInterval( function(){
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft + "⌛";
            timeLeft--;
        } else {
            timerEl.setAttribute("style", "display: none");
            clearInterval(timeInterval);
            localStorage.setItem("totalScore", totalScore);
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

function evaluateAnswer (event) {
    var element = event.target;

if (element.matches(".answer") && element.textContent === questions[questionIndex].rightAnswer) {
 commentBox.textContent = "LAST ANSWER: CORRECT!";
 scoreTally++;
 setScore();
 questionIndex++;
 questionCycle();
} else if (element.matches(".answer") && element.textContent !== questions[questionIndex].rightAnswer ) {
    commentBox.textContent = "LAST ANSWER WRONG!";
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
    } else {
        container.removeEventListener("click", evaluateAnswer)
        // var totalScore = timeLeft + scoreTally
        // localStorage.setItem("totalScore", totalScore);
        showScore();
    }
}

function showScore() {
    container.setAttribute("style", "display: none");
    timerEl.setAttribute("style", "display: none");
    finalScore.textContent = "QUIZ IS OVER!!!! Your final Score was " + scoreTally + "! If you want to register your Score please put your initials below.";
    highScoreEl.setAttribute("style", "display: none");
    initialsEl.setAttribute("style", "display: block");
   }

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    scoreArray = JSON.parse(localStorage.getItem("scoreArray")|| "[]")
    var initialsValue = document.getElementById("initials").value;
    scoreObject = {name: initialsValue, score: scoreTally}
    scoreArray.push(scoreObject);

    if(initialsValue === "") {
        scoreDisplay.textContent = "Initials cannot be blank!"
    } else {
        localStorage.setItem("initialsValue", initialsValue);
        localStorage.setItem("scoreTally", scoreTally);
        localStorage.setItem("scoreArray", JSON.stringify (scoreArray));
        scoreArray = JSON.parse(localStorage.getItem("scoreArray"));
        // localStorage.setItem("scoreTally", JSON.stringify (scoreTally));
        scoreArray.push(scoreObject);
        renderHighScore();
    }
})

function renderHighScore (){
    var initialsValue = localStorage.getItem("initialsValue")
    var scoreTally = localStorage.getItem("scoreTally")
    // scoreObject = {name: initialsValue.value, score: scoreTally.value}
    // scoreArray.push(scoreObject);
    // localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
    var parseScore = JSON.parse(localStorage.getItem("scoreArray"));
    if (parseScore !== null) {
        liEl0.textContent = parseScore[0].name + parseScore[0].score;
        liEl1.textContent = parseScore[1].name + parseScore[1].score;    
    }
}

function playAgain () {
    startButton.setAttribute("style", "display: block");
    initialsEl.setAttribute("style", "display: hidden");
    // // scoreTally = 0;
    highScoreIndex++;
    scoreArray = JSON.parse(localStorage.getItem("scoreArray"));
    // scoreArray = localStorage.getItem("scoretally")
    // liEl0.textContent = localStorage.getItem("initialsValue") + " scored: " + localStorage.getItem("scoreTally")
}

playAgainButton.addEventListener("click", playAgain)

sortHighScores = (a,b) => {
    return a.score - b.score;
}

keepToFive = () => {
    if(scoreArray.length === 6){
        scoreArray.pop();
    }
}

console.log(scoreObject)
console.log(scoreArray)
// displayHS();
// console.log(highScoreIndex)
renderHighScore()
