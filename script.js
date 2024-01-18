let num1 = 0;
let num2 = 0;
let canAddOperation = false;
let canAddDecimal = false;
let shouldResetScreen = false;

const operators = document.querySelectorAll('[operator-btn]');
const numbers = document.querySelectorAll('[number-btn]')
const displayScreen = document.getElementById('display');

const periodBtn = document.getElementById('.')
const clearBtn = document.getElementById('AC')
const equalsBtn = document.getElementById('equals')

periodBtn.addEventListener('click', onDecimalPressed);
clearBtn.addEventListener('click', onClear);
// equalsBtn.addEventListener('click', evaluate);

operators.forEach((button) =>
    button.addEventListener('click', () => onOperationPressed(button.textContent, shouldResetScreen))
);

numbers.forEach((button) =>
    button.addEventListener('click', () => onNumericPressed(button.textContent))
)

function onOperationPressed(operation) {
    if (canAddOperation) {
        console.log("getting operator..")
        displayScreen.textContent += operation;
        canAddDecimal = false;
        canAddOperation = false;
    }   
}

function onNumericPressed(number, resetScreen) {
    console.log("setting number")
    if (resetScreen || displayScreen.textContent === '0') {
        setBlankScreen()
    }
    displayScreen.textContent += number;
    canAddDecimal = true;
    canAddOperation = true;
}

function onDecimalPressed() {
    if (canAddDecimal) {
        displayScreen.textContent += '.';
        canAddOperation = false;
        canAddDecimal = false;
    }
}

function setBlankScreen() {
    displayScreen.textContent = '';
}

function onClear() {
    displayScreen.textContent = '0';
    shouldResetScreen = false;
}

