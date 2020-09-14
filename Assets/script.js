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
var currentIndex = 0;

function displayQuestion() {
    document.querySelector("#start-page").style.display = "none";
    document.querySelector("#main").style.display = "block";

    document.querySelector("#question").textContent = listQuestions[currentIndex];

    for (var i = 0; i < listAnswers[currentIndex].length; i++) {
        var buttonContainer = document.querySelector("#answer-container").appendChild(document.createElement("li"));

        var answerButton = document.createElement("button");
        answerButton.appendChild(document.createTextNode(i + 1 + ". " + listAnswers[currentIndex][i]));
        buttonContainer.appendChild(answerButton);
    }

    document.querySelector("#main").addEventListener("click", checkAnswer);
}

function checkAnswer(event) {
    // var userAnswer = event.target.textContent.split(".");
    // var result = document.querySelector("#main");

    // if (userAnswer[0] === listCorrectAnswers[currentIndex]) {
    //     result = ""
    //     document.querySelector("#main").appendChild()
    // }
    // console.log(userAnswer);
}

function timer() {
    var timeLeft = 5;
}

document.querySelector("#start-page").addEventListener("click", displayQuestion);