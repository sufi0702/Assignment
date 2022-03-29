// ES6 - Javascript Classes

class Calculator {
  constructor(previousNumber, currentNumber) {
    this.previousNumber = previousNumber;
    this.currentNumber = currentNumber;
    this.clear();
  }
  // To do backspace of current value
  clear() {
    this.currentValue = "";
    this.previousValue = "";
    this.operator = undefined;
    this.updateDisplay();
  }
  // To clear the display
  delete() {
    this.currentValue = this.currentValue.toString().slice(0, -1);
    this.updateDisplay();
  }
  // To show the number and dot in display
  appendNumber(number) {
    if (number === "." && this.currentValue.includes(".")) {
      return;
    } else {
      this.currentValue = this.currentValue + number;
    }
    this.updateDisplay();
  }
  // To show the opertor in display
  chooseOperation(operator) {
    if (this.currentValue === "") {
      return;
    }
    if (this.previousValue !== "") {
      this.calculation();
    }
    this.operator = operator;
    this.previousValue = this.currentValue;
    this.currentValue = "";
    this.updateDisplay();
  }
  // To show the result of operation in display
  calculation() {
    let result;
    const num1 = parseFloat(this.previousValue);
    const num2 = parseFloat(this.currentValue);
    if (isNaN(num1) || isNaN(num2)) {
      return;
    }
    switch (this.operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
      case "÷":
        result = num1 / num2;
        break;
      default:
        return;
    }
    this.currentValue = result;
    this.operator = undefined;
    this.previousValue = "";
    this.updateDisplay();
  }
  // To updates the all values of display
  updateDisplay() {
    this.currentNumber.innerText = this.currentValue;
    if (this.operator != null) {
      // ES6 - Template Literals use
      this.previousNumber.innerText = `${this.previousValue} ${this.operator}`;
    } else {
      this.previousNumber.innerText = "";
    }
  }
}

export default Calculator;
