const $boxes = document.getElementsByClassName('gamebox');
const $playerTurn = document.getElementById('playerturn');
let initSign = 'X'

function changeTurnName() {
    $playerTurn.innerHTML= $playerTurn.innerHTML === $player1.value ? $player2.value : $player1.value;
    
}
function playerTurn(element) {
   // console.log(element.innerText);
    if (element.innerText==='') {
        element.innerText = initSign;
    if (getWinner($boxes)) {
        selectWinner();
        $startBtn.innerHTML='Restart Game';
        
    }
    else{
        initSign = initSign==='X' ? 'O':'X';
        changeTurnName();
        element.classList.add('disabled');
    }
        
    
    }

    
}

function getWinner($gameBoxes) {
    if (($gameBoxes[0].innerText==='X' ||$gameBoxes[0].innerText==='O') && $gameBoxes[0].innerText===$gameBoxes[1].innerText && $gameBoxes[1].innerText===$gameBoxes[2].innerText  ) {
       // console.log('win from 1' +$gameBoxes[3].innerText)
        
        return true
        
    }
    else if ( ($gameBoxes[3].innerText==='X' ||$gameBoxes[3].innerText==='O') && $gameBoxes[3].innerText===$gameBoxes[4].innerText && $gameBoxes[4].innerText===$gameBoxes[5].innerText ){
       // console.log('win from 2');
        return true


    }
    else if ( ($gameBoxes[6].innerText==='X' ||$gameBoxes[6].innerText=== 'O') && $gameBoxes[6].innerText===$gameBoxes[7].innerText && $gameBoxes[7].innerText===$gameBoxes[8].innerText ){
       // console.log('win from 3');
        return true


    }
    else if ( ($gameBoxes[0].innerText==='X' ||$gameBoxes[0].innerText==='O') && $gameBoxes[0].innerText===$gameBoxes[3].innerText && $gameBoxes[3].innerText===$gameBoxes[6].innerText ){
       // console.log('win from 4');
        return true


    }
    else if (($gameBoxes[1].innerText==='X' ||$gameBoxes[1].innerText==='O') && $gameBoxes[1].innerText===$gameBoxes[4].innerText && $gameBoxes[4].innerText===$gameBoxes[7].innerText ){
       // console.log('win from 5');
        return true

    }
    else if (($gameBoxes[2].innerText==='X' ||$gameBoxes[2].innerText==='O') &&$gameBoxes[2].innerText===$gameBoxes[5].innerText && $gameBoxes[5].innerText===$gameBoxes[8].innerText){
       // console.log('win from 6');
        return true


    }
    else if (($gameBoxes[0].innerText==='X' ||$gameBoxes[0].innerText==='O') &&$gameBoxes[0].innerText===$gameBoxes[4].innerText && $gameBoxes[4].innerText===$gameBoxes[8].innerText){
       // console.log('win from 7');
        return true


    }
   


    
}
function selectWinner($boxes) {

    $turnInfo.innerHTML=$playerTurn.innerHTML + ' win the game !';
    $playerTurn.innerHTML ==='';

 
    
    
}


for (const $box of $boxes) {
    
    $box.addEventListener('click',()=>{
        
        playerTurn($box);
        
        
        
    })


    
}

