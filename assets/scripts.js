// create variables to store data for Object arary index position to call values, length of total time, and a varaible for the countdown clock
var quizQandA = [{
        quizQuestions: "Arrays in JavaScript can be used to store __________________.",
        quizOptions: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        quizAnswer: "4. all of the above"
    },
    {
        quizQuestions: "String Values must be enclosed within ____ when being assigned to variables.",
        quizOptions: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        quizAnswer: "3. quotes"
    },
    {
        quizQuestions: "The condition in an if/else statement is enclosed with ____.",
        quizOptions: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        quizAnswer: "4. all of the above"
    },
    {
        quizQuestions: "Commonly used data types DO NOT include:",
        quizOptions: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        quizAnswer: "4. all of the above"
    },
    {
        quizQuestions: "A very useful tool for users during development and debugging for printing content to the debugger is:",
        quizOptions: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console log"],
        quizAnswer: "4. all of the above"
    },
]


var quizQandQIndex = 0;
var quizTime = quizQandA.length * 15;
var countdownId;

// grab variables from the DOM for manipulation

var countdownClockEl = document.getElementById("time");
var startMenuEl = document.getElementById("startMenu");
var startQuizEl = document.getElementById("startQuiz");
var quizQuestionsEl = document.getElementById("quizQuestions");
var optionsEl = document.getElementById("options");

// create a function to start the quiz. 

function start() {

    // This function will need to start the countdown clock

    countdownId = setInterval(remainingTime, 1000);
    countdownClockEl.textContent = quizTime;

    // this function will need to hide the starting screen elements
    var startMenuEl = document.getElementById("startMenu");
    startMenuEl.setAttribute("class", "hidden");

    // this function will need to show the first question

    quizQuestionsEl.removeAttribute("class");

    // We need to call a function to loop through the quiz questions

    quizQuestions();

}

function quizQuestions() {
    var quizQuestion = quizQandA[quizQandQIndex];
    var quizQuestionEl = document.getElementById("quiz-question")
    quizQuestionEl.textContent = quizQuestion.quizQuestions
    optionsEl.innerHTML = "";

    quizQuestion.quizOptions.forEach(function(quizOptions, quizQandQIndex) {
        var quizOptionsBtn = document.createElement("button");
        quizOptionsBtn.setAttribute("class", "quizOptions")
        quizOptionsBtn.setAttribute("value", quizOptions);

        quizOptionsBtn.textContent = quizQandQIndex + 1 + ". " + quizOptions;

        quizOptionsBtn.onclick = questionClick;

        // display choices to HTML 

        quizQuestionEl.appendChild(quizOptionsBtn);
    });
}

function remainingTime() {
    quizTime--;
    countdownClockEl.textContent = quizTime;
}

startQuizEl.onclick = start;