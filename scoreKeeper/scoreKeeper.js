var btnp1 = document.querySelector("#btnP1");
var btnp2 = document.querySelector("#btnP2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var maxScore = document.querySelector("#winScore");
var inputMaxScore = document.querySelector("#maxScoreInput");
var reset = document.querySelector("#reset");
var isGameOver = false;
var p1Score = 0;
var p2Score = 0;
var winScore = 5;


btnp1.addEventListener("click", function() {
    p1Score++;
    if (!isGameOver) {
        p1Display.textContent = p1Score;
        if (p1Score === winScore) {
            p1Display.classList.add("gameOver");
            isGameOver = true;
        }
    }
})


btnp2.addEventListener("click", function() {
    p2Score++;
    if (!isGameOver) {
        p2Display.textContent = p2Score;
        if (p2Score === winScore) {
            p2Display.classList.add("gameOver");
            isGameOver = true;
        }
    }
})

inputMaxScore.addEventListener("change", function() {
    maxScore.textContent = inputMaxScore.value;
    winScore = Number(inputMaxScore.value);
})

reset.addEventListener("click", function() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("gameOver");
    p2Display.classList.remove("gameOver");
    isGameOver = false;

})