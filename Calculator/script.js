// Get the calculator screen and buttons
const calculatorScreen = document.querySelector(".calculator-screen");
const calculatorButtons = document.querySelectorAll(".calculator-button");

// Define the calculator's state
let currentValue = "0";
let previousValue = "";
let operator = "";

// Add event listeners to the buttons
calculatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;

    // Handle number buttons
    if (buttonValue >= "0" && buttonValue <= "9") {
      handleNumberButton(buttonValue);
    }
    // Handle operator buttons
    else if (["+", "-", "*", "/"].includes(buttonValue)) {
      handleOperatorButton(buttonValue);
    }
    // Handle equals button
    else if (buttonValue === "=") {
      handleEqualsButton();
    }
    // Handle clear button
    else if (buttonValue === "C") {
      handleClearButton();
    }
  });
});

// Handle number button clicks
function handleNumberButton(value) {
  if (currentValue === "0") {
    currentValue = value;
  } else {
    currentValue += value;
  }
  updateScreen();
}

// Handle operator button clicks
function handleOperatorButton(operatorValue) {
  if (currentValue !== "") {
    previousValue = currentValue;
    currentValue = "";
  }
  operator = operatorValue;
  updateScreen();
  calculatorScreen.textContent += ` ${operator} `;
}

// Handle equals button clicks
function handleEqualsButton() {
  const result = calculateResult();
  currentValue = result.toString();
  updateScreen();
}

// Handle clear button clicks
function handleClearButton() {
  currentValue = "0";
  previousValue = "";
  operator = "";
  updateScreen();
}

// Calculate the result of the current operation
function calculateResult() {
  const num1 = parseFloat(previousValue);
  const num2 = parseFloat(currentValue);
  let result;

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
      result = num1 / num2;
      break;
    default:
      result = 0;
  }
  return result;
}

// Update the calculator screen
function updateScreen() {
  calculatorScreen.textContent = currentValue;
}


