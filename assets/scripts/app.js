let currentResult = 0;
let logEntries = [];

function getUserInputInt() {
    return parseInt(userInput.value);
}
function createAndWriteOutput(operator, resultBfrCalc, calcNum){
    const calcDescription = `${resultBfrCalc} ${operator} ${calcNum}`;
    outputResult(currentResult, calcDescription);
}
function addLog(newNum){
    logEntries.push(newNum);
    console.log(logEntries[0]);
}
function writeToLog(operationID, prevResult, opNum, newResult){
    const logEntry = {
        operation: operationID,
        prevResult: prevResult,
        number: opNum,
        result: newResult
    };
    addLog(logEntry);
    console.log(logEntries);
}

//functions for the logic of the calculations
function add(){
    const enteredNum = getUserInputInt();
    const initialResult = currentResult;
    currentResult += enteredNum;
    createAndWriteOutput('+', initialResult, enteredNum);
    writeToLog("ADD", initialResult, enteredNum, currentResult);
}
function subtract(){
    const enteredNum = getUserInputInt();
    const initialResult = currentResult;
    currentResult -= enteredNum;
    createAndWriteOutput('-', initialResult, enteredNum);
    writeToLog("SUBTRACT", initialResult, enteredNum, currentResult);
}
function multiply(){
    const enteredNum = getUserInputInt();
    const initialResult = currentResult;
    currentResult *= enteredNum;
    createAndWriteOutput('*', initialResult, enteredNum);
    writeToLog("MULTIPLY", initialResult, enteredNum, currentResult);
}
function divide(){
    const enteredNum = getUserInputInt();
    const initialResult = currentResult;
    currentResult /= enteredNum;
    createAndWriteOutput('/', initialResult, enteredNum);
    writeToLog("DIVIDE", initialResult, enteredNum, currentResult);
}

//Adding the logic to the butons
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);