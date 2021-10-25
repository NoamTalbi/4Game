import { createBall, directionOfBall, ballElement } from "./ball.js";

export const FDirecX = 5;
export const FDirecY = 4;
export const rowsNum  = 6;
const equalBallNum = 4;
const numOfTests = 3;
let iswin = false;

export const gameBoard = document.getElementById('game-board');

drawTheBoard();
createBall(gameBoard, FDirecX, FDirecY);


function drawTheBoard(){ 

    for(let i = FDirecX; i < 11; i++){
        for(let y = FDirecX; y < 12; y++){
          
            const BoardElement = document.createElement('div');
            BoardElement.style.gridRowStart = i;
            BoardElement.style.gridColumnStart = y;
            BoardElement.classList.add('board');
            gameBoard.appendChild(BoardElement);
        }
    }
}
//----------------------------------------------------------------

function start()
{
    ballElement.remove();
    drawTheBoard();
    iswin = false;
    createBall(gameBoard, FDirecX, FDirecY);

    for(let i=0; i<directionOfBall.length; i++){
        for(let z=0; z<directionOfBall[0].length; z++){
            
            directionOfBall[i][z] = 0;
        }
    }
}
//----------------------------------------------------------------

export function win(x,y){
    console.log(checkRow(x,y));
    console.log(checkColumn(x,y));
    console.log(checkDiagonalRight(x,y));
    console.log(checkDiagonalLeft(x,y));

    if(checkColumn(x,y) || checkRow(x,y) || checkDiagonalRight(x,y) || checkDiagonalLeft(x,y)) { 
        
        setTimeout(function() {
            
            if(directionOfBall[x][y] == 2) {alert('Yellow won!!'); }
            else if(directionOfBall[x][y] == 1) {alert('Red won!!'); }
            start();
        }, 100)
    }
}
//----------------------------------------------------------------

function checkColumn(tmpX, tmpY){

    if(tmpY < (equalBallNum - 1)){

        for(let i = 0; i < numOfTests; i++){ 

            if(directionOfBall[tmpX][tmpY] != directionOfBall[tmpX][tmpY+1]) { break; }
            if(i == (numOfTests - 1)) { iswin = true; }
            tmpY++;
        }
    } 

    return iswin;
}
//----------------------------------------------------------------

function checkRow(x, y){

    let tmpX = x;
    let tmpY = y;

    while(tmpX < 6 && (tmpX - x) < (equalBallNum - 1)) { tmpX++; }

    while(tmpX > 2 && tmpX >= x){

        for(let i = 0; i < numOfTests; i++){
            
            if(directionOfBall[tmpX-i][tmpY] != directionOfBall[tmpX-1-i][tmpY]) { break; }
            if(i == 2) { iswin = true; }
        }
        
        tmpX--;
    }

    return iswin;
}
//----------------------------------------------------------------

function checkDiagonalRight(x, y){

    let tmpX = x;
    let tmpY = y;
    
    while(tmpX > 0 && tmpY > 0 && (x - tmpX) < (equalBallNum - 1) && (y - tmpY) < (equalBallNum - 1)){ 
        
        tmpX--;
        tmpY--;
    }

    while(tmpX < 4 && tmpY < 3){

        for(let i = 0; i < numOfTests; i++){
            
            console.log(directionOfBall[tmpX+i][tmpY+i] + ' cosvda ' +  directionOfBall[tmpX+1+i][tmpY+1+i]);
            if(directionOfBall[tmpX+i][tmpY+i] != directionOfBall[tmpX+1+i][tmpY+1+i]) { break; }
            if(i == 2) { iswin = true; }
        }
        
        tmpX++;
        tmpY++;
    }  

    return iswin;
}
//----------------------------------------------------------------

function checkDiagonalLeft(x, y){

    let tmpX = x;
    let tmpY = y;

    while(tmpX < (directionOfBall.length - 1) && tmpY > 0 && (tmpX - x) < (equalBallNum - 1) && (y - tmpY) < (equalBallNum - 1)){ 
        
        tmpX++;
        tmpY--;
    }

    while(tmpX > 2 && tmpY < 3){

        for(let i = 0; i < numOfTests; i++){ 
            
            if(directionOfBall[tmpX-i][tmpY+i] != directionOfBall[tmpX-1-i][tmpY+1+i]) { break; } 
            if(i == 2) { iswin = true; }
        }

        tmpX--;
        tmpY++;
    }

    return iswin;
}