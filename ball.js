import { changePlayer, playerS } from './player.js';
import { gameBoard, win, FDirecX, FDirecY, rowsNum } from './game.js';

export const directionOfBall = [[0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0],] // כל עמודה לבד
export let ballElement = document.createElement('game-board');
let directionX = 0;
let directionY = 0;
let isDrop = false;


export function createBall(gameBoard, x, y){

    ballElement = document.createElement('div');
    ballElement.style.gridRowStart = y;
    ballElement.style.gridColumnStart = x;
    ballElement.classList.add(playerS);
    gameBoard.appendChild(ballElement);
}
//----------------------------------------------------------------

export function moveTheBall(moveNum){

    switch(moveNum){
        case 1: //ArrowLeft
            if(directionX > 0){ 
                directionX--; 
                ballElement.remove();
                createBall(gameBoard, directionX + FDirecX, directionY + FDirecY);
            }
        break;

        case 2: //ArrowRight
            if(directionX < rowsNum) { 
                directionX++; 
                ballElement.remove();
                createBall(gameBoard, directionX + FDirecX, directionY + FDirecY);
            }
        break;
    }
}
//----------------------------------------------------------------

export function dropTheBall(){
    
    while(directionOfBall[directionX][directionY] == 0 && directionY < rowsNum){

        directionY++; 
        ballElement.remove();
        createBall(gameBoard, directionX + FDirecX, directionY + FDirecY);
        isDrop = true;
    }

    if(isDrop == true){
        
        isDrop = false;
        if(playerS == 'player1') { directionOfBall[directionX][directionY-1] = 1; }
        if(playerS == 'player2') { directionOfBall[directionX][directionY-1] = 2; }
        win(directionX, directionY-1);
        directionX = 0;
        directionY = 0;
        changePlayer();
        createBall(gameBoard, FDirecX, FDirecY);
    } 
}







