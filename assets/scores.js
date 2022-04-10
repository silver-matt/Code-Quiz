var highScoreButton = document.querySelector("#highScoreButton");
var clear = document.querySelector("#clear");
var retake = document.querySelector("#retake");

clear.addEventListener("click", function(){
 localStorage.clear();
 location.reload();
});

retake.addEventListener("click", function(){
    window.location.replace("index.html");
});

var allScores = localStorage.getItem("allScores");

if (allScores !== null){
    for (var i = 0; i < allScores.length; i++){
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScoreButton.appendChild(createLi)
    }
}
