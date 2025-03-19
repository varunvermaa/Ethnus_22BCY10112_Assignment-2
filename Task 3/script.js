function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers";
    } else {
        if (operation === 'multiply') {
            result = num1 * num2;
        } else if (operation === 'divide') {
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero!";
            }
        }
    }

    document.getElementById("result").innerText = result;
}
