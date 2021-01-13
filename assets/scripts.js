var quizQandA = [{
        quote: "Arrays in JavaScript can be used to store __________________.",
        quizOptions: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        quizAnswer: "4. all of the above"
    },
    {
        quote: "String Values must be enclosed within ____ when being assigned to variables.",
        quizOptions: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        quizAnswer: "3. quotes"
    },
    {
        quote: "The condition in an if/else statement is enclosed with ____.",
        quizOptions: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        quizAnswer: "3. paranthesis"
    },
    {
        quote: "Commonly used data types DO NOT include:",
        quizOptions: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        quizAnswer: "3. alerts"
    },
    {
        quote: "A very useful tool for users during development and debugging for printing content to the debugger is:",
        quizOptions: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console log"],
        quizAnswer: "4. console.log"
    },
]



var quizQandAIndex = 0;
var quizTime = quizQandA.length * 15;
var countdownId;
var score = 0;

// grab variables from the DOM for manipulation

var countdownClockEl = document.getElementById("time");
var startMenuEl = document.getElementById("startMenu");
var startQuizEl = document.getElementById("startQuiz");
var quizQuestionsEl = document.getElementById("quizQuestions");
var optionsEl = document.getElementById("options");

// create a function to start the quiz. 

function startQuiz() {
    // This function will need to start the countdown clock
    countdownId = setInterval(remainingTime, 1000);
    countdownClockEl.textContent = quizTime;

    // this function will need to hide the starting screen elements
    startMenuEl.setAttribute("class", "hidden");

    // this function will need to show the first question
    quizQuestionsEl.removeAttribute("class");

    // We need to call a function to loop through the quiz questions

    getQuestions();

}

function getQuestions() {
    var presentQuestion = quizQandA[quizQandAIndex];
    var quoteEl = document.getElementById("quiz-question")
    quoteEl.textContent = presentQuestion.quote
    optionsEl.innerHTML = "";

    presentQuestion.quizOptions.forEach(function(choice, i) {
        var optionNode = document.createElement("button");
        optionNode.setAttribute("class", "quizOptions");
        optionNode.setAttribute("value", choice);
        optionNode.textContent = i + 1 + ". " + choice;
        optionNode.addEventListener('click', selectAnswer)
        optionsEl.appendChild(optionNode);
    })

    // to build this function use 4.3.7 of the course. 

    function selectAnswer(event) {
        var selectButton = event.target
        if (selectButton.textContent === presentQuestion.quizAnswer) {
            score++
            quizQandAIndex++
            console.log(quizQandAIndex);
            console.log(presentQuestion)
        } else {
            score == score;
        }
    };
}

function remainingTime() {
    quizTime--;
    countdownClockEl.textContent = quizTime;
}

startQuizEl.onclick = startQuiz;