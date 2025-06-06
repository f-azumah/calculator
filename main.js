function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b != 0){
        return a / b;
    }

    let errorMessage = document.createElement('p');
    errorMessage.setAttribute("style", "font-size: 20px; font-family: Anta");
    errorMessage.textContent = "ERROR: DIVIDE BY 0";
    currentInput = "";
    display.textContent = "";
    display.appendChild(errorMessage);
    return null;
}

let num1 = 0;
let operator = "";
let num2 = 0;

function operate(operator, num1, num2){
    if(operator === "+"){
        return add(num1, num2);
    } else if (operator === "-"){
        return subtract(num1, num2);
    } else if (operator === "*"){
        return multiply(num1, num2);
    } else if (operator === "/"){
        return divide(num1, num2);
    }
}

let currentInput = "";
let justEvaluated = false;

function appendDigit(digit){
    if (justEvaluated){
        currentInput = "";
        display.textContent = "";
        justEvaluated = false;
    }
    currentInput += digit;
    display.textContent = currentInput;
}

function clearDisplay(){
    display.textContent = "";
    currentInput = "";
    num1 = "";
    op = "";
    num2 = "";
}

function deleteDigit(){
    currentInput = currentInput.slice(0,-1);
    display.textContent = currentInput;
}

function setOperator(op){
    num1 = Number(currentInput);
    operator = op;
    if (!justEvaluated) {
        display.textContent = "";
    }
    currentInput = "";
    justEvaluated = false;
}

function evaluate(){
    num2 = Number(currentInput);
    const result = operate(operator, num1, num2);

    if (result === null) return;

    // console.log("result: " + result);
    display.textContent = result.toString();
    currentInput = result.toString();
    operator = ""
    justEvaluated = true;
}

let buttons = document.querySelector(".buttons");
let display = document.querySelector(".display");
const labels = [
    "AC", "DEL", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "00", "0", ".", "="
];

for (let i = 0; i < labels.length; i++){
    let btn = document.createElement('button');
    btn.setAttribute("style", "width: 75px; height: 50px; box-sizing: border-box; font-family: Anta; font-size: 24px; border-radius: 20px");
    btn.textContent = labels[i];
    buttons.appendChild(btn);

    btn.addEventListener("click", (event) => {
        const value = event.target.textContent;
        if(!isNaN(value) || value === "."){
            appendDigit(value);
        } else if("+-*/".includes(value)){
            if (operator.length === 0){
                setOperator(value);
             } else {
                evaluate();
                setOperator(value);          
            }
        } else if(value === "="){
            evaluate();
        } else if(value === "AC"){
            clearDisplay();
        } else if(value === "DEL"){
            deleteDigit();
        }
    } )
}