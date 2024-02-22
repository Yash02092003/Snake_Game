let canvas = document.querySelector("canvas");
let ctx = canvas.getContext('2d');
let audio = new Audio("./directed-by-robert-b_voI2Z4T.mp3")
let start = document.querySelector("#start");
let reset = document.querySelector("#reset")
let id;

start.addEventListener('click' , function(){
let cellSize = 50;
let boardWidth = 1000;
let boardHeight = 600;
let snakeCells = [[0 , 0]];
let direction = "right";
let gameOver = false;
let foodCell = generateFood();
let score = 0;

document.addEventListener("keydown" , function(e){
    if(e.key === "ArrowUp") direction = "up";
    else if(e.key === "ArrowDown") direction = "down";
    else if(e.key === "ArrowLeft") direction = "left";
    else direction = "right";
})

function update(){
    let headX = snakeCells[snakeCells.length - 1][0]
    let headY = snakeCells[snakeCells.length - 1][1];
    
    let newHeadX;
    let newHeadY;
    if(direction === "up"){
        newHeadX = headX;
        newHeadY = headY - cellSize;
        if(newHeadY < 0 || khudeat(newHeadX , newHeadY)) gameOver = true
    }
    else if(direction === "down"){
        newHeadX = headX;
        newHeadY = headY + cellSize;
        if(newHeadY === boardHeight || khudeat(newHeadX , newHeadY)) gameOver = true;
    }
    else if(direction === "left"){
        newHeadX = headX - cellSize;
        newHeadY = headY;
        if(newHeadX < 0 || khudeat(newHeadX , newHeadY)) gameOver = true;
    }
    else{
        newHeadX = headX + cellSize;
        newHeadY = headY;
        if(newHeadX === boardWidth || khudeat(newHeadX , newHeadY)) gameOver = true;
    }
    
    // let newHeadX = headX + cellSize;
    // let newHeadY = headY;
    // if(newHeadX < boardWidth && newHeadY < boardHeight){
        // snakeCells.push([newHeadX , newHeadY])
        // snakeCells.shift();
        // }
        // else{
            //     gameOver = true
            // }
    snakeCells.push([newHeadX , newHeadY])
    if(newHeadX === foodCell[0] && newHeadY === foodCell[1]){
        foodCell = generateFood();
        score += 1;
        if(score > 10) speed = 300;
        else if(score > 20) speed = 200;
        else if(score > 50) speed = 100;
        else speed = 50;
    }
    else snakeCells.shift();
    }

    function draw(){
        if(gameOver === true){
            clearInterval(id);
            ctx.font = "50px cursive";
            ctx.fillStyle = "red";
            ctx.fillText("GAME OVER !!" , 350 , 300);
            audio.play();
            return;
        }
        ctx.clearRect(0 , 0 , 1000 , 600);
        for(let cell of snakeCells){
        ctx.fillStyle = "red";
        ctx.fillRect(cell[0] , cell[1] , cellSize , cellSize)
        ctx.strokeStyle = "white";
        ctx.strokeRect(cell[0] , cell[1] , cellSize , cellSize)
        // Draw Food
        ctx.fillStyle  = "white";
        ctx.fillRect(foodCell[0] , foodCell[1] , cellSize , cellSize)
        // Draw Score;
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "green";
        ctx.fillText(`Score: ${score}`, 20, 40);
    }
}


function generateFood(){
    return [
        Math.round((Math.random() * (boardWidth - cellSize)) / cellSize) * cellSize ,
        Math.round((Math.random() * (boardHeight - cellSize)) / cellSize) * cellSize
    ]
}

function khudeat(newHeadX , newHeadY){
    for(let item of snakeCells){
        if(item[0] === newHeadX && item[1] === newHeadY) return true
    }
    return false;
}
let speed = 400
id = setInterval(function(){
    draw();
    update();   
} , speed)
});
reset.addEventListener('click' , function(){
    clearInterval(id);
let cellSize = 50;
let boardWidth = 1000;
let boardHeight = 600;
let snakeCells = [[0 , 0]];
let direction = "right";
let gameOver = false;
let foodCell = generateFood();
let score = 0;

document.addEventListener("keydown" , function(e){
    if(e.key === "ArrowUp") direction = "up";
    else if(e.key === "ArrowDown") direction = "down";
    else if(e.key === "ArrowLeft") direction = "left";
    else direction = "right";
})

function update(){
    let headX = snakeCells[snakeCells.length - 1][0]
    let headY = snakeCells[snakeCells.length - 1][1];
    
    let newHeadX;
    let newHeadY;
    if(direction === "up"){
        newHeadX = headX;
        newHeadY = headY - cellSize;
        if(newHeadY < 0 || khudeat(newHeadX , newHeadY)) gameOver = true
    }
    else if(direction === "down"){
        newHeadX = headX;
        newHeadY = headY + cellSize;
        if(newHeadY === boardHeight || khudeat(newHeadX , newHeadY)) gameOver = true;
    }
    else if(direction === "left"){
        newHeadX = headX - cellSize;
        newHeadY = headY;
        if(newHeadX < 0 || khudeat(newHeadX , newHeadY)) gameOver = true;
    }
    else{
        newHeadX = headX + cellSize;
        newHeadY = headY;
        if(newHeadX === boardWidth || khudeat(newHeadX , newHeadY)) gameOver = true;
    }
    
    // let newHeadX = headX + cellSize;
    // let newHeadY = headY;
    // if(newHeadX < boardWidth && newHeadY < boardHeight){
        // snakeCells.push([newHeadX , newHeadY])
        // snakeCells.shift();
        // }
        // else{
            //     gameOver = true
            // }
    snakeCells.push([newHeadX , newHeadY])
    if(newHeadX === foodCell[0] && newHeadY === foodCell[1]){
        foodCell = generateFood();
        score += 1;
        if(score > 10) speed = 300;
        else if(score > 20) speed = 200;
        else if(score > 50) speed = 100;
        else speed = 50;
    }
    else snakeCells.shift();
    }

    function draw(){
        if(gameOver === true){
            clearInterval(id);
            ctx.font = "50px cursive";
            ctx.fillStyle = "red";
            ctx.fillText("GAME OVER !!" , 350 , 300);
            audio.play();
            return;
        }
        ctx.clearRect(0 , 0 , 1000 , 600);
        for(let cell of snakeCells){
        ctx.fillStyle = "red";
        ctx.fillRect(cell[0] , cell[1] , cellSize , cellSize)
        ctx.strokeStyle = "white";
        ctx.strokeRect(cell[0] , cell[1] , cellSize , cellSize)
        // Draw Food
        ctx.fillStyle  = "white";
        ctx.fillRect(foodCell[0] , foodCell[1] , cellSize , cellSize)
        // Draw Score;
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "green";
        ctx.fillText(`Score: ${score}`, 20, 40);
    }
}


function generateFood(){
    return [
        Math.round((Math.random() * (boardWidth - cellSize)) / cellSize) * cellSize ,
        Math.round((Math.random() * (boardHeight - cellSize)) / cellSize) * cellSize
    ]
}

function khudeat(newHeadX , newHeadY){
    for(let item of snakeCells){
        if(item[0] === newHeadX && item[1] === newHeadY) return true
    }
    return false;
}
let speed = 400
id = setInterval(function(){
    draw();
    update();   
} , speed)
})
