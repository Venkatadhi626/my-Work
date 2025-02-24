let screen = document.getElementById('screen');
let expression = "";

function appendValue(value) {
    expression += value;
    screen.value = expression;
}

function clearScreen() {
    expression = "";
    screen.value = "";
}

function calculate() {
    try {
        let result = new Function('return ' + expression)();
        screen.value = result;
        expression = result.toString();
    } catch {
        screen.value = "Error";
        expression = "";
    }
}