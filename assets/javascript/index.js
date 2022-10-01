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

console.log(questionPool[0].question);

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
var liChoice0 = document.createElement("li");
var liChoice1 = document.createElement("li");
var liChoice2 = document.createElement("li");
var liChoice3 = document.createElement("li");
var answerResult = document.createElement("div");

startButton.textContent = "Start Quiz!"


body.appendChild(startButtonDiv);
startButtonDiv.appendChild(startButton);
body.appendChild(timeEl);



startButtonDiv.setAttribute("style", "width: 100%; margin:auto; text-align:center;");
startButton.setAttribute("style", "color:blue; background-color:white; border: 2px solid blue; border-radius:25px; min-height:30px; min-width:90px;");
timeEl.setAttribute("style", "text-align:center; margin:15px;");
liQuestion.setAttribute("style", "text-align:center;");
// listEl.setAttribute("style", "background-color:#333333; padding:20px;");

liTags = document.querySelectorAll("li");
console.log(liTags);
for (i=0; i < liTags.length; i++) {
liTags[i].setAttribute("style", "color:white; background-color:blue;");
}

console.log(listEl);
console.log(liChoice0.textContent);
console.log(liChoice1.textContent);
console.log(liChoice2.textContent);
console.log(liChoice3.textContent);


var startTimerEl = document.querySelector("#start-button");
// var mailEL = document.getElementById("timer-text");


function setTime() {
    var secondsLeft = 75;
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds remaining!";

      startButtonDiv.setAttribute("style", "display:none;");
    
      

      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        // Calls function to create and append image
        // sendMessage();
      }

  
    }, 1000);

}

// Timer
startButton.addEventListener("click", function startQuiz() {
    startButtonDiv.setAttribute("style", "display:none;");
    displayQuestion();
    setTime(); });
//     {
//     // Sets interval in variable
//     // var startState = element.getAttribute("data-state");
//     var secondsLeft = 75;
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       timeEl.textContent = secondsLeft + " seconds remaining!";

//       startButtonDiv.setAttribute("style", "display:none;");
    
      

//       if(secondsLeft === 0) {
//         clearInterval(timerInterval);
//         // Calls function to create and append image
//         // sendMessage();
//       }

  
//     }, 1000);
// }});

function displayQuestion() {
    console.log(questionPool.length);
    var questionIndex = Math.floor(Math.random() * questionPool.length);
    console.log(questionIndex);
    liQuestion.textContent = questionPool[questionIndex].question;
    console.log(liQuestion);
    liChoice0.textContent = questionPool[questionIndex].choices[0];
    liChoice1.textContent = questionPool[questionIndex].choices[1];
    liChoice2.textContent = questionPool[questionIndex].choices[2];
    liChoice3.textContent = questionPool[questionIndex].choices[3];

    body.appendChild(liQuestion);
    liQuestion.appendChild(listEl);
    listEl.appendChild(liChoice0);
    listEl.appendChild(liChoice1);
    listEl.appendChild(liChoice2);
    listEl.appendChild(liChoice3);

    listEl.addEventListener("click", function answerQuestion(event) {
        body.appendChild(answerResult);
        if (event.currentTarget = questionPool[questionIndex].answer) {
            answerResult.textContent = "Correct!";
        } else {
            answerResult.textContent = "Wrong!";
        }
        displayQuestion();
    })

    
}

function generateQuestion() {
    var qAnswer = q1.answer;
    liQuestion.textContent = q1.question;
    for (i = 0; i < q1.choices.length; i++) {
    liChoice[i].textContent = q1.choices[i];
    }
    console.log(liChoice[i]);
    return liChoice[i];
}
// generateQuestion();
// this var will go into localstorage
// remember to JSON.stringify this object and parse on retrieval

