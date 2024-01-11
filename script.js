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

function evaluate() {
    let brokenUpInput = breakUpInput();
    let timesDivision = timesDivisionCalculation(brokenUpInput);
}

function timesDivisionCalculation(alteredList) {
    let list = alteredList;

    while (list.contains('x') || list.contains('/')) {
        list = calculateTimesandDivision(list);
    }

    return list;
}

function calculateTimesandDivision(alteredList) {
    let newList = [];
    let restartIndex = alteredList.length

    for (let index of alteredList.keys()) {
        if (alteredList[index].length == 1 && index < restartIndex) {

        }
    }
}

function breakUpInput() {
    let currentDigit = ''
    let inputList = [];
    
    console.log("breaking up current input: " + displayScreen.textContent)

    for (character in displayScreen.textContent) {
        if (character.isInteger() || character == '.') {
            currentDigit += character;
        } else {
            inputList.push(currentDigit);
            currentDigit = '';
            inputList.push(character);
        }
    }

    if (currentDigit != '') {
        inputList.push(currentDigit);
    }
    console.log("Input: " + inputList)
}