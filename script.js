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
equalsBtn.addEventListener('click', evaluate);

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

// Take input from displayscreen.textContent and split the operators and numbers
function parseCalculationString() {
    // Use regular expression to match numbers and operands
    var regex = /(\d+|\+|\-|\x|\/)/g;
    var matches = displayScreen.textContent.match(regex);

    // Convert matches to an array of numbers and operands
    var result = matches.map(function (match) {
        return isNaN(match) ? match : parseFloat(match);
    });
    return result;
}

function calculateMulDiv(expressionArray) {
    for (var i = 0; i < expressionArray.length; i++) {
        if (expressionArray[i] === 'x') {
            expressionArray[i - 1] = expressionArray[i - 1] * expressionArray[i + 1];
            expressionArray.splice(i, 2); // Remove the operator and the next number
            i--; // Decrement index to reevaluate the current position
        } else if (expressionArray[i] === '/') {
            expressionArray[i - 1] = expressionArray[i - 1] / expressionArray[i + 1];
            expressionArray.splice(i, 2); // Remove the operator and the next number
            i--; // Decrement index to reevaluate the current position
        }
    }

    return expressionArray;
}

function calculateAddSub(expressionArray) {
    for (var j = 0; j < expressionArray.length; j++) {
        if (expressionArray[j] === '+') {
            expressionArray[j - 1] = expressionArray[j - 1] + expressionArray[j + 1];
            expressionArray.splice(j, 2); // Remove the operator and the next number
            j--; // Decrement index to reevaluate the current position
        } else if (expressionArray[j] === '-') {
            expressionArray[j - 1] = expressionArray[j - 1] - expressionArray[j + 1];
            expressionArray.splice(j, 2); // Remove the operator and the next number
            j--; // Decrement index to reevaluate the current position
        }
    }
    return expressionArray;
}

function evaluate(equation) {
    let inputString = equation.toString();
    console.log(inputString)
    var resultArray = parseCalculationString(inputString);

    // First, perform multiplication and division
    resultArray = calculateMulDiv(resultArray);

    // Then, perform addition and subtraction on the updated array
    var finalResult = calculateAddSub(resultArray);

    console.log(finalResult[0]);
    let resultString = finalResult[0];
    displayScreen.textContent = resultString;
}