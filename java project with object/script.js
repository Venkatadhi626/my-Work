
        function addNumbers() {
            let num1 = parseFloat(prompt("Enter the first number:"));
            let num2 = parseFloat(prompt("Enter the second number:"));

            if (!isNaN(num1) && !isNaN(num2)) {
                let sum = num1 + num2;
                document.getElementById("result").innerText = "The sum is: " + sum;
            } else {
                alert("Please enter valid numbers.");
            }
        }

