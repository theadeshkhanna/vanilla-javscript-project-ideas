function handleButtonClick0() {
    const zero = document.getElementById("btn0").innerText;
    document.getElementById("res").innerText += zero;
}

function handleButtonClick1() {
    const one = document.getElementById("btn1").innerText;
    document.getElementById("res").innerText += one;
}

function handleButtonClickSum() {
    const sum = document.getElementById("btnSum").innerText;
    document.getElementById("res").innerText += sum;
}

function handleButtonClickSub() {
    const sub = document.getElementById("btnSub").innerText;
    document.getElementById("res").innerText += sub;
}

function handleButtonClickMul() {
    const mul = document.getElementById("btnMul").innerText;
    document.getElementById("res").innerText += mul;
}

function handleButtonClickDiv() {
    const div = document.getElementById("btnDiv").innerText;
    document.getElementById("res").innerText += div;
}

function handleClear() {
    document.getElementById("res").innerText = "";
}

function handleEval() {
    const exp = document.getElementById("res").innerText;
    const t = exp.split(/[+|-|*|/]/);
    const operand1 = t[0];
    const operand2 = t[1];
    const operand = exp[operand1.length];

    const decOperand1 = binToDec(operand1);
    const decOperand2 = binToDec(operand2);

    let result = null;

    switch(operand) {
        case "+": {
             result = decOperand1 + decOperand2;
        }
        break;

        case "-": {
            result = decOperand1 - decOperand2;
        }
        break;

        case "*": {
            result = decOperand1 * decOperand2;
        }
        break;

        case "/": {
            result = decOperand1 / decOperand2;
        }
        break;
    }

    document.getElementById("res").innerText = decToBin(result);
}

function binToDec(binNum) {
    return parseInt(binNum, 2);
}

function decToBin(decNum) {
    return decNum.toString(2);
}
