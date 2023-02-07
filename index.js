const board = document.querySelector("#board");

let player = "X";

function nextPlayer() {
  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }
}

let cells = Array.from(board.getElementsByTagName("td"));

const combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function checkForWinner() {
  for (const combination of combinations) {
    if (
      cells[combination[0]].textContent === player &&
      cells[combination[1]].textContent === player &&
      cells[combination[2]].textContent === player
    ) {
      alert(`${player} is the winner`);
      return;
    }
  }
}
board.addEventListener("click", function (event) {
  if (event.target.tagName === "TD" && !event.target.textContent) {
    event.target.textContent = player;
    checkForWinner();
    nextPlayer();
  }
});

const newGame = document.getElementById("newGameBtn");

newGame.addEventListener("click", function () {
  const cells = Array.from(board.getElementsByTagName("td"));
  for (const cell of cells) {
    cell.textContent = [];
    player = "X";
  }
  playerOneName.textContent = `Player One: `;

  playerTwoName.textContent = `Player Two: `;
});
const playerOneName = document.querySelector("#playerOneName");

playerOneName.addEventListener("click", newNameOne);
function newNameOne() {
  const name = prompt("enter name");
  playerOneName.textContent = `Player One: ${name}`;
}

const playerTwoName = document.querySelector("#playerTwoName");
playerTwoName.addEventListener("click", newNameTwo);
function newNameTwo() {
  const name = prompt("enter name");
  playerTwoName.textContent = `Player Two: ${name}`;
}
