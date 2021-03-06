// Zadanie: wykorzystanie zmiennej 

let computerMove = `kamień`;
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

let playerMove = `papier`;
printMessage ('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');

// Ćwiczenie dodatkowe: losowanie liczby od 11 do 19

let randomNumber = Math.floor(Math.random() * 9 + 11);
printMessage('Wylosowana liczba to: ' + randomNumber);

// Zadanie: Odczytywanie ruchów komputera

function getMoveName(argMoveId){
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
    printMessage('Mój ruch to: ' + computerMove);
    */

    console.log('Wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
}

// Zadanie: Odczytywanie ruchów gracza

function getMoveName(argMoveId){
    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(randomNumber);
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
    printMessage('Twój ruch to: ' + playerMove);
    */
}

// Zadanie: Wynik gry

function displayResult(argPlayerMove, argComputerMove) {
    console.log(playerMove + computerMove);
    /*
    if(playerMove == 'papier' && computerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if (playerMove == 'kamień' && computerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } else if (playerMove == 'nożyce' && computerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if (playerMove == computerMove){
        printMessage('Remis!!');
    } else {
        printMessage('Przegrywasz');
    }
    printMessage('Ja zagrałem: ' + computerMove + ' a Ty: ' + playerMove);
    */
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Ty wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage('Ty wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Ty wygrywasz!');
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Remis');
    } else {
      printMessage('Przegrywasz');
    }
    printMessage('Ja zagrałem ' + argComputerMove + ' a Ty ' + argPlayerMove);
  }