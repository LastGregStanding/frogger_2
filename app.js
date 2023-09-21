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

//#region Move frog and frog design
let playerIndex = 356;

function drawFrog() {
  cells[playerIndex].classList.add("frog");
}
function eraseFrog() {
  cells[playerIndex].classList.remove("frog");
}

drawFrog();

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

//#endregion

function Car(color, currentIndex, direction) {
  this.color = color;
  this.currentIndex = currentIndex;
  this.direction = direction;
}

const cars = [
  new Car("black", [300, 301], "right"),
  new Car("black", [305, 306], "right"),
  new Car("black", [310, 311], "right"),
  new Car("black", [315, 316], "right"),
  new Car("black", [320, 321], "right"),
  new Car("brown", [297, 296], "left"),
  new Car("brown", [292, 291], "left"),
  new Car("brown", [287, 286], "left"),
  new Car("brown", [282, 281], "left"),
  new Car("brown", [277, 276], "left"),
  new Car("black", [275, 274], "right"),
  new Car("black", [270, 269], "right"),
  new Car("black", [265, 264], "right"),
  new Car("black", [260, 259], "right"),
  new Car("black", [255, 254], "right"),
];

function drawCar() {
  cars.forEach((car) => {
    car.currentIndex.forEach((index) => {
      cells[index].classList.add("car");
      switch (car.color) {
        case "black":
          cells[index].style.backgroundColor = "black";
          break;
        case "brown":
          cells[index].style.backgroundColor = "brown";
          break;
      }
    });
  });
}

function eraseCar() {
  cars.forEach((car) => {
    car.currentIndex.forEach((index) => {
      cells[index].classList.remove("car");
      cells[index].style.backgroundColor = "grey";
    });
  });
}

function moveCar() {
  cars.forEach((car) => {
    if (car.direction === "right") {
      car.currentIndex = car.currentIndex.map((index) => index + 1);
    } else {
      car.currentIndex = car.currentIndex.map((index) => index - 1);
    }
  });
}

drawCar();

function animateCar() {
  eraseCar();
  moveCar();
  drawCar();
}

// setInterval(animateCar, 500);

/*

I also need to figure out how to deal with the cars once they hid the edge of the road. I need them to repeat on the opposite side. 

*/
