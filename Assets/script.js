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
    "How do a WHILE loop start?",
    "How can you add a comment in a JavaScript?"
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

const listCorrectAnswers = [1, 1, 2, 1, 4, 1, 1, 1, 1, 3]; // List of correct answers 

const maxTime = 101;
var currentIndex = 0;
var timerInterval;
var timeLeft = maxTime;

var correctSound = new Audio("Assets/correct_answer.mp3");
var wrongSound = new Audio("Assets/wrong_answer.mp3");

var startPage = document.querySelector("#start-page");
var finalScorePage = document.querySelector("#final-score-page");
var leaderboardPage = document.querySelector("#leaderboard-page");
var questionPage = document.querySelector("#question-page");

var timeCountDown = document.querySelector("#time");
var answerContainer = document.querySelector("#answer-container");
var header = document.querySelector("#header");
var scoreContainer = document.querySelector("#score-container");

// Display only question page and hide all other pages
// Start timer, show questions
function startFlow() {

    startPage.style.display = "none";
    finalScorePage.style.display = "none";
    leaderboardPage.style.display = "none";
    questionPage.style.display = "block";

    timer();
    displayQuestion();

}

// Timer count down from 100 seconds
function timer() {

    timerInterval = setInterval(function () {
        timeLeft--;
        timeCountDown.textContent = timeLeft;

        if (timeLeft === 0) {
            showFinalScore();
        }

    }, 1000);

}

// Display question and answers on screen
function displayQuestion() {

    var numAnswers = listAnswers[currentIndex].length; // Number of answer options for a specific question

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

    // Make sure user only clicks buttons
    if (event.target.matches("button")) {

        var userAnswer = event.target.textContent.split("."); // Separate string of user's answer, userAnswer[0] = answer number, userAnswer[1] = answer text
        var result = document.querySelector("#result");
        result.textContent = "";
        result.style.visibility = "visible";

        // If user clicks the correct answer, print out "Correct!" and play a ding sound
        if (userAnswer[0] == listCorrectAnswers[currentIndex]) {
            result.textContent = "Correct!";
            correctSound.play();
        }
        // If wrong, print out "Wrong!", play a buzz sound and subtract 10 seconds from timer
        else {
            result.textContent = "Wrong!";
            wrongSound.play();

            if (timeLeft >= 10) {
                timeLeft -= 10;
            } 
            // If time left is less than 10, then the score is automatically 0 and ends quiz
            else {
                timeLeft = 0;
                showFinalScore();
            }
        }

        // "Correct!" and "Wrong!" disappear after 1 second
        setTimeout(function() {
            result.style.visibility = "hidden";
        }, 1000);

        // As long as there are unanswered questions, the next question will always show up
        currentIndex++;
        if (currentIndex < 10) {
            displayQuestion();
        }
        // Once all the questions are answered, the final score page will be displayed
        else {
            showFinalScore();
        }
    }
    
}

// Reset timer
// Show final score page
function showFinalScore() {
    
    clearInterval(timerInterval);

    questionPage.style.display = "none";
    finalScorePage.style.display = "block";
    document.querySelector("#final-score").textContent = timeLeft;
    timeCountDown.textContent = timeLeft;

}

// Store user initials to local storage and call leaderboard() to display
function storeInitials(event) {

    event.preventDefault();

    var arrayInitials = [];
    var arrayScores = [];
    var userInitials = "";

    arrayInitials = JSON.parse(localStorage.getItem("userInitials")) || [];
    arrayScores = JSON.parse(localStorage.getItem("userScores")) || [];

    userInitials = document.querySelector("#initials").value.trim();

    if (userInitials) { // Prevent user from submitting form without entering initials
        arrayInitials.push(userInitials);
        arrayScores.push(timeLeft);
        
        localStorage.setItem("userInitials", JSON.stringify(arrayInitials));
        localStorage.setItem("userScores", JSON.stringify(arrayScores));
        
        leaderboard();
    }
    
}

// Print out leaderboard
function leaderboard() {
    
    header.style.display = "none";
    startPage.style.display = "none";
    questionPage.style.display = "none";
    finalScorePage.style.display = "none";
    leaderboardPage.style.display = "block";
    scoreContainer.style.display = "block";

    var initialsToSort = []; // Array stores user input/initials
    var scoresToSort = []; // Array stores user scores

    // Get initials and scores from local storage
    initialsToSort = JSON.parse(localStorage.getItem("userInitials")); 
    scoresToSort = JSON.parse(localStorage.getItem("userScores"));

    // Bubble-sort scores array and change the order of initial array accordingly
    for (var i = 0; i < scoresToSort.length; i++) {
        for (var j = i + 1; j < scoresToSort.length; j++) {
            if (scoresToSort[i] < scoresToSort[j]) {
                var temp = scoresToSort[i];
                scoresToSort[i] = scoresToSort[j];
                scoresToSort[j] = temp;
                
                var temp2 = initialsToSort[i];
                initialsToSort[i] = initialsToSort[j];
                initialsToSort[j] = temp2;
            }
        }
    }
    
    // Remove everything on leaderboard from previous submission
    while (scoreContainer.hasChildNodes()) {
        scoreContainer.removeChild(scoreContainer.firstChild);
    }

    // Display leaderboard in descending order
    for (var k = 0; k < scoresToSort.length; k++) {
        var listScore = document.createElement("li");
        listScore.textContent = k + 1 + ". " + initialsToSort[k] + " - " + scoresToSort[k];
        scoreContainer.appendChild(listScore);
    }

}

// Go back to start page
function goBack() {

    header.style.display = "block";
    startPage.style.display = "block";
    finalScorePage.style.display = "none";
    leaderboardPage.style.display = "none";
    questionPage.style.display = "none";
    timeCountDown.textContent= 0;

    timeLeft = maxTime;
    currentIndex = 0;
}

// Clear everything in local storage
function clearLeaderboard() {

    localStorage.clear();
    scoreContainer.style.display = "none";
}

document.querySelector("#start-btn").addEventListener("click", startFlow);
answerContainer.addEventListener("click", checkAnswer);
document.querySelector("#submit-btn").addEventListener("click", storeInitials);
document.querySelector("#go-back-btn").addEventListener("click", goBack);
document.querySelector("#clear-btn").addEventListener("click", clearLeaderboard);
document.querySelector("#view-leaderboard").addEventListener("click", leaderboard);