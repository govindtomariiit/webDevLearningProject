var numSquares = 6;
var colors = generateRandomColor(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = randomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var heading = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selectedBtn");
    hardBtn.classList.remove("selectedBtn");
    numSquares = 3;
    colors = generateRandomColor(numSquares);
    pickedColor = randomColor();
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selectedBtn");
    easyBtn.classList.remove("selectedBtn");
    numSquares = 6;
    colors = generateRandomColor(numSquares);
    pickedColor = randomColor();
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})

resetBtn.addEventListener("click", function() {
    colors = generateRandomColor(numSquares);
    pickedColor = randomColor();

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    resetBtn.textContent = "New Game";
    heading.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
})

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            colorChange(pickedColor);
            heading.style.backgroundColor = pickedColor;
            resetBtn.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "rgba(0, 0, 0, 0)";
            messageDisplay.textContent = "Try Again!";
        }
    })
}

function colorChange(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColor(num) {
    var array = [];
    for (var i = 0; i < num; i++) {
        array.push(colorString());
    }
    return array;

}

function colorString() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}