let firstNumber = '';
let secondNumber = '';
let operation = '';
result = 0;

function getNumber(num) {
    if (operation === '') {
        firstNumber += num;
        updateDisplay(firstNumber);
    } else {
        secondNumber += num;
        updateDisplay(secondNumber);
    }
    console.log(num);
}

function getOperator(op) {
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

const calculateEquals = () => {
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

let result = document.getElementById('result');