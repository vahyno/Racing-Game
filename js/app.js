console.log('sanity check')// wait for the DOM to finish loading
$(document).ready(function() {
  console.log('document ready');
  // all code to manipulate the DOM
  // goes inside this function
  let indexX=0;
  let indexY=0;
  let winner = 0;

  function checkForWinner(){
    if (winner !== 1){
        if (indexX === 11){
          winner = 1;
          setTimeout(function(){ alert(`Player 1 WINS!!!!!!`); }, 100);
        }else if (indexY === 11){
          winner = 1;
          setTimeout(function(){ alert(`Player 2 WINS!!!!!!`); }, 100);
        }
      }
  }

  $(document).on('keydown', function(event){

    ///player 1 push A
    if (event.keyCode === 65){
      console.log('letter A got pushed');
      $('#player1 .box').eq(indexX).addClass('X');
      checkForWinner()
      indexX ++;
    }

    /// player 2 push L
    if (event.keyCode === 76){
      console.log('letter A got pushed');
      $('#player2 .box').eq(indexY).addClass('Y');
      checkForWinner()
      indexY ++;
    }

  })

  //game reset
  $('button').on('click', function(event){
    $('.box').removeClass('X');
    $('.box').removeClass('Y');
    indexX = 0;
    indexY = 0;
    winner = 0;
  })

});
