export let playerS = 'player2';
//export let isDrop = 1; // 1-false, 2-true

export function changePlayer(){
    
    if(playerS == 'player1') { playerS = 'player2'; }
    else if(playerS == 'player2') { playerS = 'player1'; }
}
