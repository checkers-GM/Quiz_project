// create variables to store data for Object arary index position to call values, length of total time, and a varaible for the countdown clock

var quizQandQIndex = 0;
var quizTime = quizQandA.length * 15;
var countdownId;

// grab variables from the DOM for manipulation

var countdownClockEl = document.getElementById("time");
var startMenuEl = document.getElementById("startMenu");
var startQuizEl = document.getElementById("startQuiz");
var quizQuestionsEl = document.getElementById("quizQuestions");
var optionsEl = document.getElementById("options");

// create a function to start the quiz. This function needs to hide elements on the page,