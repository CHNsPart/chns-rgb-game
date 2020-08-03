var numSquares = 6;
var colors = generateRandom(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = randColor();
var colorDisplay = document.querySelector("#colorD");
var msgDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandom(numSquares);
    pickedColor = randColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
           squares[i].style.background = colors[i]; 
        }else{
            squares[i].style.display="none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandom(numSquares);
    pickedColor = randColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        squares[i].style.background = colors[i]; 
        squares[i].style.display="block";
    }
});

reset.addEventListener("click", function(){
   colors = generateRandom(numSquares);
   reset.textContent = "New Colors";
   pickedColor = randColor();
   colorDisplay.textContent = pickedColor;
   msgDisplay.textContent = "";
   for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
   }
   h1.style.backgroundColor="steelblue";
});

colorDisplay.textContent = pickedColor;
for(var i=0; i<squares.length; i++){
    //add colors to square
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    
        if(clickedColor === pickedColor){
            msgDisplay.textContent = "Correct";
            reset.textContent = "Play Again";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }else{
            this.style.backgroundColor="#232323";
            msgDisplay.textContent = "Try Again";
        }

    });
}

function changeColor(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function randColor(){
var random = Math.floor(Math.random()*colors.length);
return colors[random];
}
function generateRandom(num){
    var arr = [];
    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
} 