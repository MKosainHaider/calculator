document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            if (value === null) {
                // Handle special buttons (C and =)
                if (this.id === 'clear') {
                    clearDisplay();
                } else if (this.id === 'equals') {
                    calculate();
                }
            } else {
                appendToDisplay(value);
            }
        });
    });

    function appendToDisplay(value) {
        if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput !== '') {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    }

    function calculate() {
        if (previousInput !== '' && currentInput !== '') {
            try {
                currentInput = eval(`${previousInput}${operator}${currentInput}`);
                display.value = currentInput;
                previousInput = '';
                operator = '';
            } catch (e) {
                display.value = 'Error';
            }
        }
    }

    function clearDisplay() {
        currentInput = '';
        previousInput = '';
        operator = '';
        display.value = '';
    }
});
