"use strict";

const gameboard = document.querySelector(".game");
const cells = [];
let width = 23;
const layout = [
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 2, 2, 2, 2, 2, 2,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0,
];

function buildGame() {
  for (let i = 0; i < layout.length; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    switch (layout[i]) {
      case 0:
        cell.classList.add("land");
        break;
      case 1:
        cell.classList.add("road");
        break;
      case 2:
        cell.classList.add("water");
        break;
      case 3:
        cell.classList.add("grass");
        break;
      case 4:
        cell.classList.add("water");
        cell.classList.add("home");
        break;
    }
    cells.push(cell);
    gameboard.appendChild(cell);
  }
}

buildGame();

let playerIndex = 155;

function drawFrog() {
  cells[playerIndex].classList.add("frog");
}
function eraseFrog() {
  cells[playerIndex].classList.remove("frog");
}

drawFrog();

// Move frog

document.addEventListener("keydown", function (key) {
  eraseFrog();
  switch (key.keyCode) {
    // Move left: A key
    case 65:
      playerIndex--;
      break;
    // Move right: D key
    case 68:
      playerIndex++;
      break;
    // Move down: S key
    case 83:
      playerIndex += width;
      break;
    // Move up: W key
    case 87:
      playerIndex -= width;
      break;
  }
  drawFrog();
});
