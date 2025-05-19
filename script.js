const BUTTONS = document.querySelectorAll(".button-drinks");

const ESPRESSO = document.getElementById("espresso");
const ESPRESSO_QUANTITY = document.getElementById("espresso-stock");

const FRAPPE = document.getElementById("frappe");
const FRAPPE_QUANTITY = document.getElementById("frappe-stock");

const ICED = document.getElementById("iced-coffee");
const ICED_QUANTITY = document.getElementById("iced-stock");

const TEA = document.getElementById("tea");
const TEA_QUANTITY = document.getElementById("tea-stock");

const WATER = document.getElementById("water");
const WATER_QUANTITY = document.getElementById("water-stock");

const COCA = document.getElementById("coca");
const COCA_QUANTITY = document.getElementById("coca-stock");

const SCREEN = document.getElementById("screen");

const VALID = document.getElementById("validate");
const RESET = document.getElementById("reset");

const RESULT = document.getElementById("drink-result");
const IMG_RESULT = document.getElementById("img-result");

const STOCK = document.querySelectorAll(".drink-quantity");

let userChoice;

BUTTONS.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.value;

    SCREEN.innerText = "Your current choice:" + " " + userChoice;
  });
});

// Reset user choice
RESET.addEventListener("click", () => {
  userChoice = "Please choose a drink";

  SCREEN.innerText = userChoice;
  IMG_RESULT.src = "";
});

// Check if drink is valid or not
VALID.addEventListener("click", () => {
  switch (userChoice) {
    case "":
      SCREEN.innerText = "Please choose your drink";
      break;

    case "1":
      if (ESPRESSO_QUANTITY.textContent > 0) {
        ESPRESSO_QUANTITY.textContent -= 1;
        IMG_RESULT.src = "./assets/espresso.png";
        SCREEN.innerText = "Enjoy your drink! 😎";
      } else {
        SCREEN.innerText = "Out of stock :(";
      }
      break;

    case "2":
      if (FRAPPE_QUANTITY.textContent > 0) {
        IMG_RESULT.src = "./assets/frappe.png";
        SCREEN.innerText = "Enjoy your drink! 😎";
      } else {
        SCREEN.innerText = "Out of stock :(";
      }
      break;

    case "3":
      if (ICED_QUANTITY.textContent > 0) {
        ICED_QUANTITY.textContent -= 1;
        IMG_RESULT.src = "./assets/iced-coffee.png";
        SCREEN.innerText = "Enjoy your drink! 😎";
      } else {
        SCREEN.innerText = "Out of stock :(";
      }
      break;

    case "4":
      if (TEA_QUANTITY.textContent > 0) {
        TEA_QUANTITY.textContent -= 1;
        IMG_RESULT.src = "./assets/tea.png";
        SCREEN.innerText = "Enjoy your drink! 😎";
      } else {
        SCREEN.innerText = "Out of stock :(";
      }
      break;

    case "5":
      if (WATER_QUANTITY.textContent > 0) {
        WATER_QUANTITY.textContent -= 1;
        IMG_RESULT.src = "./assets/water.png";
        SCREEN.innerText = "Enjoy your drink! 😎";
      } else {
        SCREEN.innerText = "Out of stock :(";
      }
      break;

    case "6":
      if (COCA_QUANTITY.textContent > 0) {
        COCA_QUANTITY.textContent -= 1;
        IMG_RESULT.src = "./assets/coca.png";
        SCREEN.innerText = "Enjoy your drink! 😎";
      } else {
        SCREEN.innerText = "Out of stock :(";
      }
      break;

    case "7":
      IMG_RESULT.src = "";
      SCREEN.innerText = "This drink is not available atm";
      break;

    case "8":
      IMG_RESULT.src = "";
      SCREEN.innerText = "This drink is not available atm";
      break;

    case "9":
      IMG_RESULT.src = "";
      SCREEN.innerText = "This drink is not available atm";
      break;

    case "0":
      IMG_RESULT.src = "";
      SCREEN.innerText = "This drink is not available atm";
      break;

    default:
      IMG_RESULT.src = "";
      SCREEN.innerText = "Please consider choosing a drink";
  }

  timerReset();
});

function timerReset() {
  setTimeout(() => {
    SCREEN.innerText = "Please choose a drink";
    IMG_RESULT.src = "";
  }, 3000);
}
