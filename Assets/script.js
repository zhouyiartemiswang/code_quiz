// List of questions and answers from w3school.com
const listQuestions = [
    "Inside which HTML element do we put the JavaScript?",
    "Where is the correct place to insert a JavaScript?",
    'What is the correct syntax for referring to an external script called "xxx.js"?',
    "The external JavaScript file must contain the <script> tag.",
    'How do you write "Hello World" in an alert box?',
    "How do you create a function in JavaScript?",
    'How do you call a function named "myFunction"',
    "How to write an IF statement in JavaScript?",
    "How do a WHILE loop start?", "How can you add a comment in a JavaScript?"
];

const listAnswers = [
    ["<script>", "<js>", "<scripting>", "<javascript>"],
    ["Both the <head> section and the <body> section are correct", "The <head> section", "The <body> section"],
    ['<script href="xxx.js">', '<script src="xxx.js">', '<script name="xxx.js">'],
    ["False", "True"],
    ['msgBox("Hello World");', 'msg("Hello World");', 'alertBox("Hello World");', 'alert("Hello World");'],
    ["function myFunction()", "function = myFunction()", "function:myFunction()"],
    ["myFunction()", "call function myFunction()", "call myFunction()"],
    ["if (i == 5)", "if i = 5 then", "if i = 5", "if i == 5 then"],
    ["while (i <= 10)", "while (i <= 10; i++)", "while i = 1 to 10"],
    ["<!-- This is a comment -->", "'This is a comment", "// This is a comment"]
];

const listCorrectAnswers = [1, 1, 2, 1, 4, 1, 1, 1, 1, 3];
// const listCorrectAnswers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; // Test answer array

// TODO: remove global variable currentIndex
// TODO: add setTimeout to result so correct and wrong and stay on page for a little bit
var currentIndex = 0;
var score = 0;

// Hide start page, show questions
function startPage() {
    document.querySelector("#start-page").style.display = "none";
    document.querySelector("#question-page").style.display = "block";
    document.querySelector("#final-score-page").style.display = "none";
    
    displayQuestion();
}

// Display question and answers on screen
function displayQuestion(event) {
    // event.preventDefault();

    var numAnswers = listAnswers[currentIndex].length; // Number of answer options for a specific question
    var answerContainer = document.querySelector("#answer-container"); // Select all answers

    // Display question extracted from listQuestions array
    document.querySelector("#question").textContent = listQuestions[currentIndex];

    // If number of answer options are less than 4, then the remaining answers will not be displayed
    if (numAnswers < 4) {
        for (var j = numAnswers; j < 4; j++) {
            answerContainer.children[j].style.display = "none";
        }
    }

    // For each answer, make sure style.display is turned on and display it
    for (var i = 0; i < numAnswers; i++) {
        answerContainer.children[i].style.display = "block";
        answerContainer.children[i].children[0].textContent = i + 1 + ". " + listAnswers[currentIndex][i];
    }

}

// Check if user clicks the correct answer
function checkAnswer(event) {
    // event.preventDefault();

    // Make sure user only clicks buttons
    if (event.target.matches("button")) {

        var userAnswer = event.target.textContent.split("."); // Separate string of user's answer, userAnswer[0] = answer number, userAnswer[1] = answer text
        var result = document.querySelector("#result");
        result.textContent = "";

        // If user clicks the correct answer, print out "Correct!" and scores 1 point, otherwise, print out "Wrong!"
        if (userAnswer[0] == listCorrectAnswers[currentIndex]) {
            result.textContent = "Correct!";
            score++;
        } 
        else {
            result.textContent = "Wrong!";
        }
        
        // As long as there are unanswered questions, the next question will always show up
        currentIndex++;
        if (currentIndex < 10) {
            displayQuestion();
        } 
        // Once all the questions are answered, the final score page will be displayed
        else {
            finalScore(score);
        }
    }
}

function finalScore(score) {
    document.querySelector("#question-page").style.display = "none";
    document.querySelector("#final-score-page").style.display = "block";
    document.querySelector("#final-score").textContent = score;

}

function timer() {
    var timeLeft = 5;
}

document.querySelector("#start-page").addEventListener("click", startPage);
document.querySelector("#answer-container").addEventListener("click", checkAnswer);