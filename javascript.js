
buttonText = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", 
".", "=", "+", "CLEAR"]

btnContainer = document.querySelector("#btnContainer");

for (i = 0; i < 17; i++) {
  let btn = document.createElement("button");
  btn.classList.toggle("btn");
  btnContainer.appendChild(btn);
  btn.textContent = buttonText[i];
  if (i === 16) btn.setAttribute("id", "clearBtn");
}




//Create functions "add", "subtract", "multiply" and "divide"
//Create function "operate" that takes an operator and 2 numbers then calls one of the above functions on the numbers. (Probably use switch statement for each operator case)
//Create event listeners that populate the display when number buttons are clicked. Store the displayValue in a variable for next steps.
//Create event listeners for operator buttons that store the current number on the display, clearDisplay, store which operator was chosen.
//Create event listener for "=" button which runs "operate()" on the stored values.
//If there is already a decimal point on the display, don't let the user type another one.

//NOTE: Will need to figure out the proper logic to store the values and call operate() with them.

//Event listener on "CLEAR" that runs a clearDisplay function to set textContent of display to nothing and reset stored values to 0.

//Have a "prevButton" variable which is set to whichever button was pressed last (have it in the event listeners)
//If prevButton = "=" when a operator button is clicked, run the clearDisplay function first but store prevAnswer in a variable so that when you click "=" next time it will evaluate the operation with prevAnswer as the first number.