/* Function */

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
    return 'papier';
  } else if(argMoveId == 3){
    return 'nożyce';
  }
}

/* Odczytywanie ruchów komputera */
  
let randomNumber = Math.floor(Math.random() * 3 + 1);
  
console.log('Wylosowana liczba to: ' + randomNumber);
  
let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
  computerMove = 'papier';
} else {
  computerMove = 'nożyce';
}
*/
  
printMessage('Mój ruch to: ' + computerMove);
  
/* Odczytywanie ruchów gracza */
  
  
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  
console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
  playerMove = 'papier';
} else if (playerInput == '3'){
  playerMove = 'nożyce';
} else {
  playerMove = 'Myślę, że chciałeś powiedzieć 1' + 'kamień';
}
*/

printMessage('Twój ruch to: ' + playerMove);
  

/* Wynik gry */
  
function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a ty ' + argPlayerMove);
if( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
  printMessage('Ty Wygrywasz');
} else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
  printMessage('Ty Wygrywasz');
} else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
  printMessage('Ty Wygrywasz');
} else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
  printMessage('Przegrywasz');
} else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
  printMessage('Przegrywasz');
} else if( argComputerMove == 'papier' && argPlayerMove == 'kamień') {
  printMessage('Przegrywasz');
} else if(argComputerMove == argPlayerMove) {
  printMessage('Remis');
} else {
  printMessage('Przegrywasz');
}
}
