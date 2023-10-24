let display = document.getElementById('display');
let memory = 0;

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function removeLastCharacter() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert('Invalid expression');
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (!isNaN(key) || key === '+' || key === '-' || key === '*' || key === '/' || key === '%' || key === '.' || key === 'Enter') {
        if (key === 'Enter') {
            calculateResult();
        } else {
            appendToDisplay(key);
        }
    } else {
        alert('Only numbers and mathematical operators are allowed.');
    }
});