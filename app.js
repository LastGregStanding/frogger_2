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

//#region Cars
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
  new Car("black", [273, 272], "right"),
  new Car("black", [268, 267], "right"),
  new Car("black", [263, 262], "right"),
  new Car("black", [258, 257], "right"),
  new Car("black", [254, 253], "right"),
  new Car("brown", [249, 248], "left"),
  new Car("brown", [244, 243], "left"),
  new Car("brown", [239, 238], "left"),
  new Car("brown", [234, 233], "left"),
  new Car("brown", [252, 230], "left"),
  new Car("black", [228, 227], "right"),
  new Car("black", [223, 222], "right"),
  new Car("black", [218, 217], "right"),
  new Car("black", [213, 212], "right"),
  new Car("black", [208, 207], "right"),
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
      car.currentIndex = car.currentIndex.map((index) => {
        switch (index) {
          case 275:
            return (index = 253);
          case 321:
            return (index = 299);

          case 229:
            return (index = 207);
          default:
            return index + 1;
        }
      });
    } else {
      car.currentIndex = car.currentIndex.map((index) => {
        switch (index) {
          case 276:
            return (index = 298);
          case 230:
            return (index = 252);
          default:
            return index - 1;
        }
      });
    }
  });
}

function animateCar() {
  eraseCar();
  moveCar();
  drawCar();
}

//#endregion

// function Log(currentIndex, speed) {}

function Log(currentIndex, direction) {
  this.currentIndex = currentIndex;
  this.direction = direction;
}

const logs = [
  new Log([53], "right"),
  new Log([60], "right"),
  new Log([68], "right"),
  new Log([75, 76], "left"),
  new Log([85, 86, 87], "left"),
  new Log([94], "right"),
  new Log([100], "right"),
  new Log([106], "right"),
  new Log([112], "right"),
  new Log([120, 121, 122], "left"),
  new Log([130, 131, 132], "left"),
  new Log([140], "right"),
  new Log([146], "right"),
  new Log([152], "right"),
  new Log([158], "right"),
];

function drawLog() {
  logs.forEach((log) => {
    log.currentIndex.forEach((index) => {
      cells[index].classList.add("log");
      cells[index].style.backgroundColor = "brown";
    });
  });
}

function eraseLog() {
  logs.forEach((log) => {
    log.currentIndex.forEach((index) => {
      cells[index].classList.remove("log");
      cells[index].style.backgroundColor = "grey";
    });
  });
}

drawLog();

function animateLog() {
  eraseLog();
  moveLog();
  drawLog();
}

document.addEventListener("keydown", function (key) {
  if (key.keyCode === 13) {
    drawCar();
    setInterval(animateCar, 500);
  }
});

/*



*/
