let currentInput = "";
let previousInput = "";
let operator = "";

// Append numbers to display
function appendNumber(value) {
    currentInput += value;
    updateDisplay(currentInput);
}

// Set operator and store previous input
function setOperator(op) {
    if (currentInput === "") return;

    if (previousInput !== "") {
        calculate();
    }
    
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

// Perform calculation manually without eval()
function calculate() {
    if (previousInput === "" || currentInput === "") return;

    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);
    let result = 0;

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
            return;
    }

    updateDisplay(result);
    currentInput = result.toString();
    previousInput = "";
    operator = "";
}

// Update calculator display
function updateDisplay(value) {
    document.getElementById("display").value = value;
}

// Clear display
function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay("");
}
