//your JS code here. If required.
const submitBtn = document.getElementById('submit');
const player1Input = document.getElementById('player-1');
const player2Input = document.getElementById('player-2');
const playerInput = document.getElementById('playerInput');
const gameView = document.getElementById('gameView');
const message = document.getElementById('message');
const cells = document.querySelectorAll('.cell');

let currentPlayer = 'X';
let player1 = '';
let player2 = '';
let board = Array(9).fill('');

submitBtn.addEventListener('click', () => {
  player1 = player1Input.value;
  player2 = player2Input.value;
  if (player1 && player2) {
    playerInput.style.display = 'none';
    gameView.style.display = 'block';
    message.innerText = `${player1}, you're up`;
  }
});

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const id = parseInt(cell.id) - 1;
    if (cell.innerText === '' && !checkWinner()) {
      cell.innerText = currentPlayer;
      board[id] = currentPlayer;
      if (checkWinner()) {
        message.innerText = `${currentPlayer === 'X' ? player1 : player2}, congratulations you won!`;
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.innerText = `${currentPlayer === 'X' ? player1 : player2}, you're up`;
      }
    }
  });
});

function checkWinner() {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  return wins.some(([a, b, c]) => board[a] && board[a] === board[b] && board[b] === board[c]);
}


