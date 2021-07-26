document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(evento) {
    console.log(evento.target);
    let square = evento.target;
    let position = square.id;
    if(handleMove(position)) {
        setTimeout(() => {
            alert(`O vencedor é o jogador ${playerTime + 1}`);
        }, 10);
    };
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`
}
