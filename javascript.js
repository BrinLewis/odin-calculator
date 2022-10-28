
buttonText = ["7", "8", "9", "/", "4", "5", "6", "X", "1", "2", "3", "-", "0", 
".", "=", "+", "CLEAR"]

btnContainer = document.querySelector("#btnContainer");

for (i = 0; i < 17; i++) {
  let btn = document.createElement("button");
  btn.classList.toggle("btn");
  btnContainer.appendChild(btn);
  btn.textContent = buttonText[i];
  if (i === 16) btn.setAttribute("id", "clearBtn");
}
