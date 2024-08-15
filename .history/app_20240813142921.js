document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");
  let currentInput = "";
  let operator = "";
  let previousInput = "";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.getAttribute("data-value");

      if (value === null) {
        // Handle special buttons (C and =)
        if (this.id === "clear") {
          clearDisplay();
        } else if (this.id === "equals") {
          calculate();
        }
      } else {
        appendToDisplay(value);
      }
    });
  });

  function appendToDisplay(value) {
    if (["+", "-", "*", "/"].includes(value)) {
      if (currentInput !== "") {
        operator = value;
        previousInput = currentInput;
        currentInput = "";
        display.value = `${previousInput} ${operator}`;
      }
    } else {
      currentInput += value;
      display.value = `${previousInput} ${operator} ${currentInput}`.trim();
    }
  }

  function calculate() {
    if (previousInput !== "" && currentInput !== "") {
      let result;
      const num1 = parseFloat(previousInput);
      const num2 = parseFloat(currentInput);

      switch (operator) {
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
          result = num2 !== 0 ? num1 / num2 : "Error";
          break;
        default:
          result = "Error";
      }

      display.value = result;
      currentInput = result.toString();
      previousInput = "";
      operator = "";
    }
  }

  function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    display.value = "";
  }
});
