// Pseudocode
// need a start button with a click event that starts a timer (75s)
// on click, start time and present first question
// when a question is answered via click event, display whether answer was correct or incorrect, then display next question
// if question answered incorrectly, subtract time from the timer (15s)
// game ends when all questions are answered (5?) or timer reaches 0
// when game ends, user can save initials (3) and their score
// save this object in local storage
//
var secondsLeft = 75;

var questionPool = [
    q1 = {
        question: "How many licks does it take to get to the center of a Tootsie Pop?",
        answer: "3",
        choices: ["4", "2", "5", "3"],
    },

    q2 = {
        question: "What color is the sky?",
        answer: "blue",
        choices: ["red", "yellow", "green", "blue"],
    },

    q3 = {
        question: "What makes the dog run?",
        answer: "the dog",
        choices: ["it do", "the squirts", "a cat", "the dog"],
    }];

var scoreBoard = {
    initials: "",
    score: "",
};

localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));

var body = document.body;
var startButtonDiv = document.createElement("div");
var startButton = document.createElement("button");
var timeEl = document.createElement("div");
var liQuestion = document.createElement("div");
var listEl = document.createElement("ol");
var choiceZeroDiv = document.createElement("div");
var liChoice0 = document.createElement("button");
var choiceOneDiv = document.createElement("div");
var liChoice1 = document.createElement("button");
var choiceTwoDiv = document.createElement("div");
var liChoice2 = document.createElement("button");
var choiceThreeDiv = document.createElement("div");
var liChoice3 = document.createElement("button");
var answerResult = document.createElement("div");
var scoreBoardDisplay = document.createElement("div");
var displayInitials = document.createElement("div");
var displayScore = document.createElement("div");

body.appendChild(startButtonDiv);
startButtonDiv.appendChild(startButton);
body.appendChild(timeEl);

startButton.textContent = "Start Quiz!"

startButtonDiv.setAttribute("style", "width: 100%; margin:auto; text-align:center;");
startButton.setAttribute("style", "color:blue; background-color:white; border: 2px solid blue; border-radius:25px; min-height:30px; min-width:90px;");
timeEl.setAttribute("style", "text-align:center; margin:15px;");
liQuestion.setAttribute("style", "align-items:center; text-align:center; max-width:100%; margin:0;");
liChoice0.setAttribute("style", "background-color:black; color:white; border-radius:3px; margin: 1px 0 1px 0;");
liChoice0.setAttribute("class", "answer-button");
liChoice0.setAttribute("id", "btn");
liChoice1.setAttribute("style", "background-color:black; color:white; border-radius:3px; margin: 1px 0 1px 0;");
liChoice1.setAttribute("class", "answer-button");
liChoice1.setAttribute("id", "btn");
liChoice2.setAttribute("style", "background-color:black; color:white; border-radius:3px; margin: 1px 0 1px 0;");
liChoice2.setAttribute("class", "answer-button");
liChoice2.setAttribute("id", "btn");
liChoice3.setAttribute("style", "background-color:black; color:white; border-radius:3px; margin: 1px 0 1px 0;");
liChoice3.setAttribute("class", "answer-button");
liChoice3.setAttribute("id", "btn");

startButton.addEventListener("click", function startQuiz() {
    startButtonDiv.setAttribute("style", "display:none;");
    setTime();
    displayQuestion();
});

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining!";
        startButtonDiv.setAttribute("style", "display:none;");




        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "Time is up - GAME OVER!";
            liQuestion.setAttribute("style", "display:none;");
            answerResult.setAttribute("style", "display:none;");
            scoreBoard.initials = prompt("Please enter your initials:");
            console.log(scoreBoard.initials);
            console.log(scoreBoard.score);
            localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));
            body.appendChild(scoreBoardDisplay);
            scoreBoardDisplay.appendChild(displayInitials);
            scoreBoardDisplay.appendChild(displayScore);
            displayInitials.textContent = scoreBoard.initials;
            displayScore.textContent = scoreBoard.score;
           
        }
    }, 1000);
}

function displayQuestion() {
    // console.log(questionPool.length);
    var questionIndex = Math.floor(Math.random() * questionPool.length);
    var choiceArray = questionPool[questionIndex].choices;
    // console.log(choiceArray);
    var shuffledChoices = shuffleArray(choiceArray);
    // console.log(shuffledChoices);
    liQuestion.textContent = questionPool[questionIndex].question;
    liChoice0.textContent = shuffledChoices[0];
    liChoice1.textContent = shuffledChoices[1];
    liChoice2.textContent = shuffledChoices[2];
    liChoice3.textContent = shuffledChoices[3];

    body.appendChild(liQuestion);
    liQuestion.appendChild(listEl);
    listEl.appendChild(choiceZeroDiv);
    choiceZeroDiv.appendChild(liChoice0);
    listEl.appendChild(choiceOneDiv);
    choiceOneDiv.appendChild(liChoice1);
    listEl.appendChild(choiceTwoDiv);
    choiceTwoDiv.appendChild(liChoice2);
    listEl.appendChild(choiceThreeDiv);
    choiceThreeDiv.appendChild(liChoice3);
    body.appendChild(answerResult);

    liChoice0.addEventListener("click", function answerQuestion(event) {
        event.preventDefault();
        var answerChoice = liChoice1.textContent;
        if (answerChoice == questionPool[questionIndex].answer) {
            answerResult.setAttribute("style", "align-content:center; width:50px; color:white; background-color:green; text-align:center; border-radius:25px;");
            answerResult.textContent = "Correct!";
            scoreBoard.score += 1;
        } else {
            answerResult.setAttribute("style", "align-content:center; width:50px; color:white; background-color:red; text-align:center; border-radius:25px;");
            answerResult.textContent = "Wrong!";
            secondsLeft -= 15;
        }
        displayQuestion();
    })

    liChoice1.addEventListener("click", function answerQuestion(event) {
        event.preventDefault();
        var answerChoice = liChoice1.textContent;
        console.log(answerChoice);
        if (answerChoice == questionPool[questionIndex].answer) {
            answerResult.setAttribute("style", "align-content:center; width:50px; color:white; background-color:green; text-align:center; border-radius:25px;");
            answerResult.textContent = "Correct!";
            scoreBoard.score += 1;
        } else {
            answerResult.setAttribute("style", "align-content:center; width:50px; color:white; background-color:red; text-align:center; border-radius:25px;");
            answerResult.textContent = "Wrong!";
            secondsLeft-=15;
        }
        displayQuestion();
    });
    liChoice2.addEventListener("click", function answerQuestion(event) {
        event.preventDefault();
        var answerChoice = liChoice2.textContent;
        console.log(answerChoice);
        if (answerChoice == questionPool[questionIndex].answer) {
            answerResult.setAttribute("style", "color:white; background-color:green; border-radius:25px;");
            answerResult.textContent = "Correct!";
            scoreBoard.score += 1;
        } else {
            answerResult.setAttribute("style", "color:white; background-color:red; border-radius:25px;");
            answerResult.textContent = "Wrong!";
            secondsLeft-=15;
        }
        displayQuestion();
    });
    liChoice3.addEventListener("click", function answerQuestion(event) {
        event.preventDefault();
        var answerChoice = liChoice3.textContent;
        console.log(answerChoice);
        console.log(questionPool[questionIndex].answer);
        if (answerChoice == questionPool[questionIndex].answer) {
            answerResult.setAttribute("style", "color:white; text-align:center; background-color:green; border-radius:25px;");
            answerResult.textContent = "Correct!";
            scoreBoard.score += 1;
        } else {
            answerResult.setAttribute("style", "color:white; background-color:red; border-radius:25px;");
            answerResult.textContent = "Wrong!";
            secondsLeft-= 15;
        }
        displayQuestion();
    });
}

function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
    return arr;
}