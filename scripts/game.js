
let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;

let winStates = [
    [0, 1, 2],//elemento 0
    [3, 4, 5],//elemento 1
    [6, 7, 8],//elemento 2
    [0, 3, 6],//elemento 3
    [1, 4, 7],//elemento 4
    [2, 5, 8],//elemento 5
    [0, 4, 8],//elemento 6
    [2, 4, 6],//elemento 7
];

function handleMove(position) {

    if (gameOver) {
        return;
    }

    if (board[position] == "") {
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if (gameOver == false) {
            playerTime = (playerTime == 0) ? 1 : 0;

        }
    } else {
        console.log('O QUADRADO já tem SYMBOL');
    }

    return gameOver;
}

function isWin() {
    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
            return true;
        }
    }
    return false;
}


