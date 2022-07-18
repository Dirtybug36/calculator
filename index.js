"use strict";

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".input");
//console.log(buttons);
//converting buttons into arrays
const allButtons = Array.from(buttons);
//console.log(allButtons);
allButtons.map((input) => {
  input.addEventListener("click", (e) => {
    // console.log("clicked");
    // console.log(e);
    // console.log(e.target);
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "«":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!!!!";
        }
        break;

      default:
        display.innerText += e.target.innerText;
    }
  });
});
