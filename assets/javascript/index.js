// Pseudocode
// need a start button with a click event that starts a timer (75s)
// on click, start time and present first question
// when a question is answered via click event, display whether answer was correct or incorrect, then display next question
// if question answered incorrectly, subtract time from the timer (15s)
// game ends when all questions are answered (5?) or timer reaches 0
// when game ends, user can save initials (3) and their score
// save this object in local storage
//
// array of object questions
// var questionPool = [q1, q2, q3, ...];
// var multChoice = ["question", "right answer", "wrong answer", 
//                   "wrong answer", "wrong answer"]
// var trueFalse = ["question", "true", "false"]
// Math.random(index starting at 1)


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

// console.log(questionPool[0].question);

// this var will go into localstorage
// remember to JSON.stringify this object and parse on retrieval
var scoreBoard = {
    initials: "",
    score: "",
};

// console.log(questionPool[0].answer);

var body = document.body;
var startButtonDiv = document.createElement("div");
var startButton = document.createElement("button");
var timeEl = document.createElement("div");
var liQuestion = document.createElement("div");
var listEl = document.createElement("ol");
var choiceZeroDiv = document.createElement("div");
var liChoice0 = document.createElement("li");
var choiceOneDiv = document.createElement("div");
var liChoice1 = document.createElement("li");
var choiceTwoDiv = document.createElement("div");
var liChoice2 = document.createElement("li");
var choiceThreeDiv = document.createElement("div");
var liChoice3 = document.createElement("li");
var answerResult = document.createElement("div");

body.appendChild(startButtonDiv);
startButtonDiv.appendChild(startButton);
body.appendChild(timeEl);

startButton.textContent = "Start Quiz!"

startButtonDiv.setAttribute("style", "width: 100%; margin:auto; text-align:center;");
startButton.setAttribute("style", "color:blue; background-color:white; border: 2px solid blue; border-radius:25px; min-height:30px; min-width:90px;");
timeEl.setAttribute("style", "text-align:center; margin:15px;");
liQuestion.setAttribute("style", "text-align:center; max-width:100%;");
liChoice0.setAttribute("style", "background-color:black; color:white;");
liChoice2.setAttribute("style", "background-color:black; color:white;");
// answerResult.setAttribute("style", "color:white;text-align:center; margin-top:20px;");
// listEl.setAttribute("style", "background-color:#333333; padding:20px;");

// liTags = document.querySelectorAll("li");
// console.log(liTags);
// for (i = 0; i < liTags.length; i++) {
//     liTags[i].setAttribute("style", "color:white; background-color:blue;");
// }

// var startTimerEl = document.querySelector("#start-button");
// var mailEL = document.getElementById("timer-text");

startButton.addEventListener("click", function startQuiz() {
    startButtonDiv.setAttribute("style", "display:none;");
    setTime();

    displayQuestion();
    
    
    
});

function setTime() { 
    var secondsLeft = 75;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining!";

        startButtonDiv.setAttribute("style", "display:none;");




        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "Time is up - GAME OVER!";
            liQuestion.setAttribute("style", "display:none;");
            answerResult.setAttribute("style", "display:none;");

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
    liChoice0.textContent = choiceArray[0];
    liChoice1.textContent = choiceArray[1];
    liChoice2.textContent = choiceArray[2];
    liChoice3.textContent = choiceArray[3];

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
        
    //     choiceZeroDiv.addEventListener("click", function answerQuestion(event) {
    //     event.preventDefault();
    //     var answerChoice = liChoice0.textContent;
    //     console.log(answerChoice);
    //     if (answerChoice == questionPool[questionIndex].answer) {
    //         answerResult.textContent = "Correct!";
    //         answerResult.setAttribute("style", "background-color:green; border-radius:25px;");
    //     } else {
    //         // answerResult.textContent = "Wrong!";
    //         answerResult.setAttribute("style", "color:white; background-color:red; border-radius:25px;");
    //         answerResult.textContent = "Wrong!";
    //     }
    //     displayQuestion();
    // });
    //     choiceOneDiv.addEventListener("click", function answerQuestion(event) {
    //         event.preventDefault();
    //         var answerChoice = liChoice1.textContent;
    //         console.log(answerChoice);
    //         if (answerChoice == questionPool[questionIndex].answer) {
    //             answerResult.textContent = "Correct!";
    //         } else {
    //             answerResult.textContent = "Wrong!";
    //         }
    //         displayQuestion();
    //     });
    //     choiceTwoDiv.addEventListener("click", function answerQuestion(event) {
    //             event.preventDefault();
    //             var answerChoice = liChoice2.textContent;
    //             console.log(answerChoice);
    //             if (answerChoice == questionPool[questionIndex].answer) {
    //                 answerResult.textContent = "Correct!";
    //             } else {
    //                 answerResult.textContent = "Wrong!";
    //             }
    //             displayQuestion();    
    //         });
    //     choiceThreeDiv.addEventListener("click", function answerQuestion(event) {
    //              event.preventDefault();
    //             var answerChoice = liChoice3.textContent;
    //             console.log(answerChoice);
    //             typeof answerChoice;
    //             if (answerChoice == questionPool[questionIndex].answer) {
    //                 answerResult.textContent = "Correct!";
    //             } else {
    //                 answerResult.textContent = "Wrong!";
    //             }
    //             displayQuestion();
    //             });
};

function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
    return arr;
  }