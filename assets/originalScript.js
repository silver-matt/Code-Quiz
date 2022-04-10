var score = 0;
var questionIndex = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var choicesdiv = document.querySelector("#choices");
var wrapper = document.querySelector("#wrapper");

var secondsLeft = 76;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

var questions = [{
    title: "question 1", 
    choices: ["A answer 1", "B answer 2", "C answer 3", "D answer 4"],
    // Put exactly the answer to the choices
    answers: "A answer 1"
}, 
{
    title: "question 2", 
    choices: ["A answer 1", "B answer 2", "C answer 3", "D answer 4"],
    // Put exactly the answer to the choices
    answers: "A answer 1"
}
{
    title: "question 3", 
    choices: ["A answer 1", "B answer 2", "C answer 3", "D answer 4"],
    // Put exactly the answer to the choices
    answers: "A answer 1"
}
{
    title: "question 4", 
    choices: ["A answer 1", "B answer 2", "C answer 3", "D answer 4"],
    // Put exactly the answer to the choices
    answers: "A answer 1"
}
{
    title: "question 5", 
    choices: ["A answer 1", "B answer 2", "C answer 3", "D answer 4"],
    // Put exactly the answer to the choices
    answers: "A answer 1"
}
{
    title: "question 6", 
    choices: ["A answer 1", "B answer 2", "C answer 3", "D answer 4"],
    // Put exactly the answer to the choices
    answers: "A answer 1"
}
{
    title: "question 7", 
    choices: ["A answer 1", "B answer 2", "C answer 3", "D answer 4"],
    // Put exactly the answer to the choices
    answers: "A answer 1"
}
{
    title: "question 8", 
    choices: ["A answer 1", "B answer 2", "C answer 3", "D answer 4"],
    // Put exactly the answer to the choices
    answers: "A answer 1"
}
]