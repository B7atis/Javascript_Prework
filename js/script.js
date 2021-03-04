// Zadanie: wykorzystanie zmiennej 

let computerMove = `kamień`;
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

let playerMove = `papier`;
printMessage ('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');

// Ćwiczenie dodatkowe: losowanie liczby od 11 do 19

let randomNumber = Math.floor(Math.random() * 9 + 11);
printMessage('Wylosowana liczba to: ' + randomNumber);

// Zadanie: Odczytywanie ruchów komputera

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
    computerMove = 'kamień';
} else if (randomNumber == 2){
    computerMove = 'papier';
} else {
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

// Zadanie: Odczytywanie ruchów gracza

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
    playerMove = 'kamień';
} else if (playerInput == '2'){
    playerMove = 'papier';
} else if (playerInput == '3'){
    playerMove = 'nożyce';
}else {
    playerMove = 'Myślę, że chciałeś powiedzieć 1' + 'kamień';
}

printMessage('Twój ruch to: ' + playerMove);