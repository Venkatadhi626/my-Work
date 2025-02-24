
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    // Function to append numbers to the display
    function appendToDisplay(value) {
        currentInput += value;
        updateDisplay(currentInput);
    }

    // Function to set the operator
    function setOperator(op) {
        if (currentInput === '') return;
        if (previousInput !== '') {
            calculateResult();
        }
        operator = op;
        previousInput = currentInput;
        currentInput = '';
    }

    // Function to calculate the result
    function calculateResult() {
        if (previousInput === '' || currentInput === '') return;

        let num1 = parseFloat(previousInput);
        let num2 = parseFloat(currentInput);
        let result = 0;

        switch (operator) {
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
        currentInput = result.toString();
        previousInput = '';
        operator = '';
    }

    // Function to update the display
    function updateDisplay(value) {
        document.getElementById('display').value = value;
    }

    // Function to clear the display
    function clearDisplay() {
        currentInput = '';
        previousInput = '';
        operator = '';
        updateDisplay('');
    }