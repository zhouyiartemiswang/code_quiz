// List of questions and answers from w3school.com
const listQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: {
            A: "<script>",
            B: "<js>",
            C: "<scripting>",
            D: "<javascript>"
        },
        correctAnswer: "A"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answer: {
            A: "Both the <head> section and the <body> section are correct",
            B: "The <head> section",
            C: "The <body> section"
        },
        correctAnswer: "A"
    }, 
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answer: {
            A: '<script href="xxx.js">',
            B: '<script src="xxx.js">',
            C: '<script name="xxx.js">'
        },
        correctAnswer: "B"
    }, 
    {
        question: "The external JavaScript file must contain the <script> tag.",
        answer: {
            A: "False",
            B: "True",
        },
        correctAnswer: "A"
    }, 
    {
        question: 'How do you write "Hello World" in an alert box?',
        answer: {
            A: 'msgBox("Hello World");',
            B: 'msg("Hello World");',
            C: 'alertBox("Hello World");',
            D: 'alert("Hello World");'
        },
        correctAnswer: "D"
    },
    {
        question: "How do you create a function in JavaScript?",
        answer: {
            A: "function myFunction()",
            B: "function = myFunction()",
            C: "function:myFunction()"
        },
        correctAnswer: "A"
    },
    {
        question: 'How do you call a function named "myFunction"',
        answer: {
            A: "myFunction()",
            B: "call function myFunction()",
            C: "call myFunction()"
        },
        correctAnswer: "A"
    }, 
    {
        question: "How to write an IF statement in JavaScript?",
        answer: {
            A: "if (i == 5)",
            B: "if i = 5 then",
            C: "if i = 5",
            D: "if i == 5 then"
        },
        correctAnswer: "A"
    },
    {
        question: "How do a WHILE loop start?",
        answer: {
            A: "while (i <= 10)",
            B: "while (i <= 10; i++)",
            C: "while i = 1 to 10"
        },
        correctAnswer: "A"
    }, 
    {
        question: "How can you add a comment in a JavaScript?",
        answer: {
            A: "<!-- This is a comment -->",
            B: "'This is a comment",
            C: "// This is a comment"
        },
        correctAnswer: "C"
    }
];

function startQuiz() {
    console.log("start");
}

document.querySelector("#start-page").addEventListener("click", startQuiz);