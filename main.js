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
    return a / b;
}

let num1 = 0;
let operator;
let num2 = 0;

function operate(operator, num1, num2){
    if(operator === "+"){
        add(num1, num2);
    } else if (operator === "-"){
        subtract(num1, num2);
    } else if (operator === "*"){
        multiply(num1, num2);
    } else if (operator === "/"){
        divide(num1, num2);
    }
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
    btn.setAttribute("style", "width: 75px; height: 50px; box-sizing: border-box; font-family: Anta; font-size: 24px");
    btn.textContent = labels[i];
    buttons.appendChild(btn);

    btn.addEventListener("click", () => {
        display.textContent += labels[i];
    } )
}