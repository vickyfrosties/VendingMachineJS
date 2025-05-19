const BUTTONS = document.querySelectorAll(".button-drinks");

const ESPRESSO = document.getElementById("espresso");
const FRAPPE = document.getElementById("frappe");
const ICED = document.getElementById("iced-coffee");
const TEA = document.getElementById("tea");
const WATER = document.getElementById("water");
const COCA = document.getElementById("coca");

const SCREEN = document.getElementById("screen");

const VALID = document.getElementById("validate");
const RESET = document.getElementById("reset");

const RESULT = document.getElementById("drink-result");
const IMG_RESULT = document.getElementById("img-result");

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
      SCREEN.innerText = "Please choose a drink";
      break;

    case "1":
      IMG_RESULT.src = "./assets/espresso.png";
      SCREEN.innerText = "Enjoy your drink! 😎";
      timerReset();
      break;

    case "2":
      IMG_RESULT.src = "./assets/frappe.png";
      SCREEN.innerText = "Enjoy your drink! 😎";
      timerReset();
      break;

    case "3":
      IMG_RESULT.src = "./assets/iced-coffee.png";
      SCREEN.innerText = "Enjoy your drink! 😎";
      timerReset();
      break;

    case "4":
      IMG_RESULT.src = "./assets/tea.png";
      SCREEN.innerText = "Enjoy your drink! 😎";
      timerReset();
      break;

    case "5":
      IMG_RESULT.src = "./assets/water.png";
      SCREEN.innerText = "Enjoy your drink! 😎";
      timerReset();
      break;

    case "6":
      IMG_RESULT.src = "./assets/coca.png";
      SCREEN.innerText = "Enjoy your drink! 😎";
      timerReset();
      break;

    default:
      IMG_RESULT.src = "";
      SCREEN.innerText = "This drink is not available atm";
  }
});

function timerReset() {
  setTimeout(() => {
    SCREEN.innerText = "";
    IMG_RESULT.src = "";
  }, 4000);
}
