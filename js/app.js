console.log('sanity check')// wait for the DOM to finish loading
$(document).ready(function() {
  console.log('document ready');
  // all code to manipulate the DOM
  // goes inside this function


  function createBoard(){
    for (var i = 0; i < 30; i++) {
      $('#player1').append('<div class="box"></div>');
      $('#player2').append('<div class="box"></div>');
    }
  }

  function checkForWinner(){
    if (winner !== true){
        if (indexX === 29){
          winner = true;
          winsX ++; //victory counter
          setTimeout(function(){ alert(`Player 1 WINS!!!!!!`);}, 500);
        }else if (indexY === 29){
          winner = true;
          winsY ++; //victory counter
          setTimeout(function(){ alert(`Player 2 WINS!!!!!!`);}, 500);
        }
      }
      //score tracker
      $('h4').text(`Top Player ${winsX} : ${winsY} Bottom Player`)
    }

  createBoard();

  $(document).on('keydown', function(event){
    ///1st. push assigned letter
    if (event.keyCode === player1KeyCode){
      console.log(`letter ${playe1Letter} got pushed`);
      $('#player1 .box').eq(indexX).addClass('X');
      checkForWinner()
      chaosKeyAssignP1()
      $('#p1').text(playe1Letter);
      indexX ++;
    }
    ///2nd. player push assigned letter
    if (event.keyCode === player2KeyCode){
      console.log(`letter ${playe2Letter} got pushed`);
      $('#player2 .box').eq(indexY).addClass('Y');
      checkForWinner()
      chaosKeyAssignP2()
      $('#p2').text(playe2Letter);
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


let indexX = 0; //starting index position for 1st player
let indexY = 0; //starting index position for 2nd player
let winner = false; //temp value to control winner popup
let winsX = 0;  //starting value for 1st player win counter
let winsY = 0; //starting value for 2nd player win counter

let KeyIndexP1 = 0;
let KeyIndexP2 = 0;
let player1KeyCode = 65;
let player2KeyCode = 74;
let playe1Letter = "A";
let playe2Letter = "J";

function chaosKeyAssignP1(){
   KeyIndexP1 = Math.floor(Math.random()*3);
   let player1Keys = [{letter: "A", num: 65},{letter: "S", num: 83},{letter: "D", num: 68}];
   player1KeyCode = player1Keys[KeyIndexP1].num;
   playe1Letter = player1Keys[KeyIndexP1].letter;
}
function chaosKeyAssignP2(){
   KeyIndexP2 = Math.floor(Math.random()*3);
   let player2Keys = [{letter: "J", num: 74},{letter: "K", num: 75},{letter: "L", num: 76}];
   player2KeyCode = player2Keys[KeyIndexP2].num;
   playe2Letter = player2Keys[KeyIndexP2].letter;
}
