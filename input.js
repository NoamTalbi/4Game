import { moveTheBall, dropTheBall } from './ball.js';

window.addEventListener('keydown', e => {
    switch(e.key){  
        case'ArrowDown':
            dropTheBall();
        break; 
    
        case'ArrowLeft':
            moveTheBall(1);
        break;
    
        case'ArrowRight':
            moveTheBall(2);
        break;
        }
    })