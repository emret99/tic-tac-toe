const $player1 =document.getElementById('player1');
const $player2 =document.getElementById('player2');
const $errMsg = document.getElementById('error-msg');
const $startBtn = document.getElementById('startgame');
const $turnInfo = document.getElementById('turn-info');
const $gameArea = document.getElementById('gamearea');


function clearGameArea() {
  for (const $box of $boxes) {
    $box.innerText = '';
    $box.classList.remove('disabled');

    
  }
}




$startBtn.addEventListener('click',()=>{
    if (!$player1.value || !$player2.value) {

      //  console.log('err ' + $player1.value + '   '+ $player2.value)
        $errMsg.style.display = 'block';

    }
    else{
       // console.log('no err '+ $player1 + '   '+ $player2)
      
        $startBtn.innerHTML='Start Game';
        clearGameArea();
        $playerTurn.innerHTML = $player1.value;
        $turnInfo.style.display = 'block';
        $errMsg.style.display = 'none';
        $gameArea.style.display = 'flex';
    }

})
