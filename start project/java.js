let firstNumber = '';
let secondNumber = '';
let operation = '';
let result = '';

function appendToDisplay(value) {
    if (operation === '') {
        firstNumber += value;
        updateDisplay(firstNumber);
    } else {
        secondNumber += value;
        updateDisplay(secondNumber);
    }
    console.log(value);
}

function setOperator(op) {
    if (firstNumber === '') return;
    operation = op;
    console.log(op);
}

function clearDisplay() {
    firstNumber = '';
    secondNumber = '';
    operation = '';
    result = 0;
    updateDisplay('');
    console.log('clear display');
    
}

function calculateResult() {
    if (firstNumber === '' || secondNumber === '' || operation === '') return;

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "Error";
            break;
        default:
            return;
    }

    updateDisplay(result);
    firstNumber = result.toString();
    secondNumber = '';
    operation = '';
    console.log('calculate');
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key) || key === '.') {
        appendToDisplay(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        setOperator(key);
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
});
