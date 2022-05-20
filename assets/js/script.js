var timerEl = document.getElementById('timer');
var boxEl = document.getElementById("box");
var highScoreEl = document.getElementById('highscores');

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
countDown();