{

  /* Function */
  
  function playGame(playerImput){
    clearMessages();
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
  
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  
  console.log('Wylosowana liczba to: ' + randomNumber);
  
  const computerMove = getMoveName(randomNumber);
  
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
  
  /*
  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  */
  
  const playerMove = getMoveName(playerImput);
  
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
  }}
  
  displayResult(computerMove, playerMove);
}

const playRock = document.getElementById('play-rock');
playRock.addEventListener('click', function () {
  playGame(1);
});

const playPaper = document.getElementById('play-paper');
playPaper.addEventListener('click', function () {
  playGame(2);
});

const playScissors = document.getElementById('play-scissors');
playScissors.addEventListener('click', function () {
  playGame(3);
});
}
