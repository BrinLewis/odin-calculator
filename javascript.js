
buttonText = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0",
  ".", "=", "+", "CLEAR"];

btnContainer = document.querySelector("#btnContainer");

for (i = 0; i < 17; i++) {
  let btn = document.createElement("button");
  btn.classList.toggle("btn");
  btnContainer.appendChild(btn);
  btn.textContent = buttonText[i];
  if (i === 16) {
    btn.setAttribute("id", "clearBtn");
  } else if (!isNaN(buttonText[i])) {
    btn.classList.add("numBtn");
  } else if (i === 13) {
    btn.setAttribute("id", "decimalBtn");
  } else if (i === 14) {
    btn.setAttribute("id", "equalsBtn");
  } else {
    btn.classList.add("operatorBtn");
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

let display = document.querySelector("#display");
let displayValue = display.textContent;

function clearDisplay() {
  display.textContent = "";
  displayValue = 0;
}

const numBtns = document.querySelectorAll(".numBtn");
numBtns.forEach(btn => {
  btn.addEventListener("click", () => { //Event listeners to input numbers.
    display.textContent += btn.textContent;
    displayValue = +display.textContent;
  })
});

let storedNum = 0;
let operator = undefined;

const operatorBtns = document.querySelectorAll(".operatorBtn");
operatorBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    storedNum = displayValue;
    clearDisplay();
    operator = `${btn.textContent}`;
    enableDec(); //Once previous number is entered, and an operator has been clicked, enable decimals again for the next number.
  })
});

const equalsBtn = document.querySelector("#equalsBtn");
equalsBtn.addEventListener("click", () => {
  let result = operate(operator, storedNum, displayValue);
  displayValue = result;
  display.textContent = result;
  enableDec(); //Once an operation has been done, enable decimals again for the next number.
});

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
  clearDisplay();
  storedNum = 0;
});

const decimalBtn = document.querySelector("#decimalBtn");

function inputDec(event) {
  display.textContent += decimalBtn.textContent;
  displayValue = +display.textContent;
  decimalBtn.removeEventListener("click", inputDec); //When decimal is clicked, disable the listener so it can't be clicked again.
}

function enableDec() {
decimalBtn.addEventListener("click", inputDec);
}
enableDec(); //Call it so that Decimals are enabled from page load.