let playerO = "O";
let playerX = "X";

let currPlayer = playerO;

let gameboard = ["", "", "", "", "", "", "", "", ""];
let gameCells;

let winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let gameOver = false;
let RestartButton;

window.onload = function () {
  gameCells = document.getElementsByClassName("gamecell");
  for (let cell of gameCells) {
    cell.addEventListener("click", placeCell);
  }
  RestartButton = document.getElementById("restart-button");
  RestartButton.addEventListener("click", restartGame);
}

function placeCell() {
  if (gameOver) {
    return;
  }

  const index = parseInt(this.getAttribute("data-cellindex"));
  if (gameboard[index] != "") {
    return;
  }

  this.innerText = currPlayer;
  gameboard[index] = currPlayer;
  //change players
  currPlayer = (currPlayer == playerO) ? playerX : playerO;

  //check winner
  checkwinner();
}

function checkwinner() {
  for (let winCondition of winningConditions) {
    let a = gameboard[winCondition[0]];
    let b = gameboard[winCondition[1]];
    let c = gameboard[winCondition[2]];

    if (a == b && b == c && a != "") {
      for (let i = 0; i < gameboard.length; i++) {
        if (winCondition.includes(i)) {
          gameCells[i].classList.add("winning-cell");
        }
      }
      gameOver = true;
      return;
    }

  }
}

function restartGame() {
  gameOver = false;
  gameboard = ["", "", "", "", "", "", "", "", ""];
  for (let cell of gameCells) {
    cell.innerText = "";
    cell.classList.remove("winning-cell");
  }
}
//20:15
