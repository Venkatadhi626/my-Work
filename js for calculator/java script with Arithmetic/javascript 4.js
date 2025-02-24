
 function myFunction() {
    let input = document.getElementById('display').value;
        console.log("Current input value: " + input);
            if(event.key === 'Enter') {
         calculate();
                } 
            }

let screen = document.getElementById('screen');
        let expression = "";
        let lastCharIsOperator = false;

        function appendValue(value) {
            expression += value;
            screen.value = expression;
            lastCharIsOperator = false;
        }

        function appendOperator(operator) {
            if (!lastCharIsOperator && expression.length > 0) {
                expression += operator;
                screen.value = expression;
                lastCharIsOperator = true;
            }
        }

        function clearScreen() {
            expression = "";
            screen.value = "";
            lastCharIsOperator = false;
        }

        function calculate() {
            try {
                let result = Function('"use strict"; return (' + expression + ')')();
                screen.value = result;
                expression = result.toString();
                lastCharIsOperator = false;
            } catch {
                screen.value = "Error";
                expression = "";
                lastCharIsOperator = false;
            }
        }