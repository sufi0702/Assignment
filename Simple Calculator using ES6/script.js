// ES6 module import use
import Calculator from "./calClass.js";

// ES6 const keyword use
const numberButtons = document.querySelectorAll(".number-key");
const operatorButtons = document.querySelectorAll(".operator");
const equalsToButton = document.querySelector(".equals-to");
const deleteButton = document.querySelector(".delete");
const allClearButton = document.querySelector(".all-clear");
const previousNumber = document.querySelector(".previous-value");
const currentNumber = document.querySelector(".current-value");

// calculator class object
const calculator = new Calculator(previousNumber, currentNumber);

// ES6 for...of loop use
for (let button of numberButtons) {
  // ES6 arrow function use
  button.addEventListener("click", () => {
    // To show the number and dot in display
    calculator.appendNumber(button.innerText);
  });
}

// ES6 forEach filter use
operatorButtons.forEach((button) => {
  // ES6 arrow function use
  button.addEventListener("click", () => {
    // To show the opertor in display
    calculator.chooseOperation(button.innerText);
  });
});

equalsToButton.addEventListener("click", () => {
  // To show the result of operation in display
  calculator.calculation();
});

allClearButton.addEventListener("click", () => {
  // To do backspace of current value
  calculator.clear();
});

deleteButton.addEventListener("click", () => {
  // To clear the display
  calculator.delete();
});

// when key is press on keybord
document.addEventListener("keydown", function (event) {
  // ES6 let keyword use
  let patternForNumbers = /[0-9]/;
  let patternForOperators = /[+\-*\/]/;
  // when number or dot key press
  if (event.key.match(patternForNumbers) || event.key === ".") {
    calculator.appendNumber(event.key);
  }
  //   when operator key is press
  if (event.key.match(patternForOperators)) {
    calculator.chooseOperation(event.key);
  }
  //   when Enter or = is press
  if (event.key === "Enter" || event.key === "=") {
    calculator.calculation();
  }
  //   when backspace key is press
  if (event.key === "Backspace") {
    calculator.delete();
  }
  //   when delete key is press
  if (event.key == "Delete") {
    calculator.clear();
  }
});
