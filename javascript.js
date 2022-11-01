
btnText = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0",
  ".", "=", "+", "CLEAR"];

btnContainer = document.querySelector("#btnContainer");

for (i = 0; i < 17; i++) { 
  let btn = document.createElement("button");
  btn.classList.toggle("btn");
  btnContainer.appendChild(btn);
  btn.textContent = btnText[i]; //Creates buttons for calculator, labelling them according to the btnText array.

  if (btnText[i] === "CLEAR") {
    btn.setAttribute("id", "clearBtn");
  } else if (!isNaN(btnText[i])) { //If the array item is a number, give it class numBtn
    btn.classList.add("numBtn");
  } else if (btnText[i] === ".") {
    btn.setAttribute("id", "decimalBtn");
  } else if (btnText[i] === "=") {
    btn.setAttribute("id", "equalsBtn");
  } else {
    btn.classList.add("operatorBtn");
  }
}

function add(num1, num2) {
  return +num1 + +num2;
}

function subtract(num1, num2) {
  return +num1 - +num2;
}

function multiply(num1, num2) {
  return +num1 * +num2;
}

function divide(num1, num2) {
  return +num1 / +num2;
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
    if (displayValue.toString().length < 11) { //Only input numbers if it will fit on the display (prevents overflow)
      display.textContent += btn.textContent;
      displayValue = display.textContent;
    }
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

function roundAnswer(num) {
  return +(Math.round(num + "e+4") + "e-4") //Rounds input to 4 decmial places
}

const equalsBtn = document.querySelector("#equalsBtn");
equalsBtn.addEventListener("click", () => {
  let result = operate(operator, storedNum, displayValue);
  result = roundAnswer(result);

  if (result.toString().length > 11) { //Checks if answer will fit on display
    display.textContent = "ERR: TOO BIG";
  } else {
    displayValue = result;
    display.textContent = result;
    enableDec(); //Once an operation has been done, enable decimals again for the next number.
  }
});

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
  clearDisplay();
  storedNum = 0;
});

const decimalBtn = document.querySelector("#decimalBtn");

function inputDec(event) {
  display.textContent += decimalBtn.textContent;
  displayValue = display.textContent;
  decimalBtn.removeEventListener("click", inputDec); //When decimal is clicked, disable the listener so it can't be clicked again.
}

function enableDec() {
  decimalBtn.addEventListener("click", inputDec);
}
enableDec(); //Call it so that Decimals are enabled from page load.