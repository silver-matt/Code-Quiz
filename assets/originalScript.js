var score = 0;
var questionIndex = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#timer");
var choicesDiv = document.querySelector("#choices");
var wrapper = document.querySelector("#wrapper");

var pauseTime = 0;
var timeRemaining = document.getElementById("timeLeft");
var secondsLeft = 76;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");
var questionsContainer = document.querySelector("#content");

var questions = [
  {
    title: "In 1768, Captain James Cook set out to explore which ocean?",
    choices: [
      "A. Pacific Ocean",
      "B. Atlantic Ocean",
      "C. Indian Ocean",
      "D. Arctic Ocean",
    ],
    // Put exactly the answer to the choices
    answers: "A. Pacific Ocean",
  },
  {
    title: "What is actually electricity?",
    choices: [
      "A. A flow of water",
      "B. A flow of air",
      "C. A flow of electrons",
      "D. A flow of atoms",
    ],
    // Put exactly the answer to the choices
    answers: "C. A flow of electrons",
  },
  {
    title: "What is the approximate speed of sound?",
    choices: ["A. 120 km/h", "B. 1,200 km/h", "C. 400 km/h", "C. 700 km/h"],
    // Put exactly the answer to the choices
    answers: "B. 1,200 km/h",
  },
  {
    title: "What is the main component of the sun?",
    choices: ["A. Liquid lava", "B. Gas", "C. Molten iron", "D. Rock"],
    // Put exactly the answer to the choices
    answers: "B. Gas",
  },
  {
    title: "How many time zones are there in total in the world?",
    choices: ["A. 8", "B. 16", "C. 24", "D. 32"],
    // Put exactly the answer to the choices
    answers: "C. 24",
  },
  {
    title: "Cu is the chemical symbol for which element?",
    choices: ["A. Oxygen", "B. Copper", "C. Zinc", "D. Helium"],
    // Put exactly the answer to the choices
    answers: "B. Copper",
  },
  {
    title: "How many sides does a dodecagon have?",
    choices: ["A. 10", "B. 12", "C. 15", "D. 20"],
    // Put exactly the answer to the choices
    answers: "B. 12",
  },
  {
    title: "Which planet is the hottest?",
    choices: ["A. Venus", "B. Saturn", "C. Mercury", "D. Mars"],
    // Put exactly the answer to the choices
    answers: "A. Venus",
  },
];

timer.addEventListener("click", function() {
  if (holdInterval === 0) {
    holdInterval = setInterval(function() {
      secondsLeft--;
      timeRemaining.textContent = "time: " + secondsLeft;
      if (secondsLeft <= 0) {
        clearInterval(pauseTime);
        finished();
        timeRemaining.textContent = "Time's Up!";
      }
    }, 1000);
    display(questions);
  }
});

function display(questionIndex) {
  questionsContainer.innerHTML = "";
  ulCreate.innerHTML = "";
  for (var i = 0; i < questions.length; i++) {
    let userQuestions = questions[questionIndex].title;
    var userAnswers = questions[questionIndex].choices;
    questionsContainer.textContent = userQuestions;
  }
  userAnswers.forEach(function(nextQuestion) {
    let listItem = document.createElement("li");
    listItem.textContent = nextQuestion;
    questionsContainer.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", compare);
  });
}

function compare(event) {
  let element = event.target;
  if (element.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.id = "createDiv";
    if (element.textContent == questions[questionIndex].answers) {
      score++;
      createDiv.textContent = "Correct! " + questions[questionIndex].answers;
    } else {
      secondsLeft = secondsLeft - penalty;
      createDiv.textContent = "Wrong " + questions[index].answers;
    }
  }
  questionIndex++;
  if (questionIndex >= questions.length) {
    finished();
  } else {
    display(questionIndex);
  }
  questionsContainer.appendChild(createDiv);
}

function finished() {
  questionsContainer.innerHTML = "";
  timeRemaining.innerHTML = "";
  const headerOne = document.createElement("h1");
  headerOne.id = "headerOne";
  headerOne.textContent = "All done!";
  questionsContainer.appendChild(headerOne);
  const pOne = document.createElement("p");
  pOne.id = "pOne";
  questionsContainer.appendChild(pOne);
  if (secondsLeft >= 0) {
    var timeLeft = secondsLeft;
    const pTwo = document.createElement("p");
    clearInterval(pauseTime);
    pOne.textContent = "Your final score is: " + timeLeft * 2;
    questionsContainer.appendChild(pTwo);
  }
  const infoPrompt = document.createElement("label");
  infoPrompt.id = "createLabel";
  infoPrompt.textContent = "Enter Your Initials: ";
  questionsContainer.appendChild(infoPrompt);
  const userInitials = document.createElement("input");
  userInitials.type = "text";
  userInitials.id = "initials";
  userInitials.textContent = "";
  questionsContainer.appendChild(userInitials);
  const saveInfo = document.createElement("button");
  saveInfo.type = "submit";
  saveInfo.id = "submit";
//   test displayed on button
  saveInfo.textContent = "Submit";
  questionsContainer.appendChild(saveInfo);
// Save to local storage
saveInfo.addEventListener("click", function(){
    var initials = userInitials.value;
    if (initials === ""){
        console.log("No Value Entered");
        const noInitials = document.createElement("h1");
        noInitials.id = "noInitials";
        noInitials.textContent = "Please enter initials";
        questionsContainer.appendChild(noInitials);
        } else {
            var finalScore = {
                initials: initials,
                 score: timeLeft * 2
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null){
                allScores = [];

            } else {
                allScores = JSON.parse(allScores);

            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            window.location.replace("scores.html");
        }
});

}

