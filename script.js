let num1 = 0;
let num2 = 0;
let operator = "";
let shouldResetScreen = false;

const operators = document.querySelectorAll("operator-btn");
const displayScreen = document.getElementById('display');

const additionBtn = document.getElementById('add');
const subtractionBtn = document.getElementById('subtract');
const multiplicationBtn = document.getElementById('multiply');
const divisionBtn = document.getElementById('divide');

const nineBtn = document.getElementById('9')
const eightBtn = document.getElementById('8')
const sevenBtn = document.getElementById('7')
const sixBtn = document.getElementById('6')
const fiveBtn = document.getElementById('5')
const fourBtn = document.getElementById('4')
const threeBtn = document.getElementById('3')
const twoBtn = document.getElementById('2')
const oneBtn = document.getElementById('1')
const zeroBtn = document.getElementById('0')

const periodBtn = document.getElementById('.')
const clearBtn = document.getElementById('AC')
const equalsBtn = document.getElementById('equals')

operators.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
);

function appendNumber(number) {
    if (shouldResetScreen || displayScreen.textContent === '0') {
        resetScreen()
    }
    displayScreen.textContent += number
}

function resetScreen() {
    displayScreen.textContent = '';
    shouldResetScreen = false;
}

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);

    switch(operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);        
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            break;
    }
    
}