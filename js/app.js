console.log('sanity check')// wait for the DOM to finish loading
$(document).ready(function() {
  console.log('document ready');
  // all code to manipulate the DOM
  // goes inside this function

  let indexX = 0; //starting index position for 1st player
  let indexY = 0; //starting index position for 2nd player
  let winner = 0; //temp value to control winner popup
  let winsX = 0;  //starting value for 1st player win counter
  let winsY = 0; //starting value for 2nd player win counter

  function checkForWinner(){
    if (winner !== 1){
        if (indexX === 29){
          winner = 1;
          winsX ++; //victory counter
          setTimeout(function(){ alert(`Player 1 WINS!!!!!!`); }, 500);
        }else if (indexY === 29){
          winner = 1;
          winsY ++; //victory counter
          setTimeout(function(){ alert(`Player 2 WINS!!!!!!`); }, 500);
        }
      }
      //score tracker
      $('h4').text(`Top Player ${winsX} : ${winsY} Bottom Player`)
    }

  $(document).on('keydown', function(event){
    ///1st. player push A
    if (event.keyCode === 65){
      console.log('letter A got pushed');
      $('#player1 .box').eq(indexX).addClass('X');
      checkForWinner()
      indexX ++;
    }
    ///2nd player push L
    if (event.keyCode === 76){
      console.log('letter A got pushed');
      $('#player2 .box').eq(indexY).addClass('Y');
      checkForWinner()
      indexY ++;
    }
  })

  //game reset button
  $('button').on('click', function(event){
    $('.box').removeClass('X');
    $('.box').removeClass('Y');
    indexX = 0;
    indexY = 0;
    winner = 0;
  })

});
