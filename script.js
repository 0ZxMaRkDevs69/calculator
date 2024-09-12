let display = document.getElementById("display");
let expression = "";

function clickButton(button) {
  let buttonText = button.textContent;
  if (buttonText === "=") {
    try {
      let resul = eval(expression);
      if (resul === 11) {
        display.value = "I miss you HAHAHA";
      } else {
        display.value = resul;
      }
    } catch (e) {
      alert("Error: " + e.message);
    }
  } else {
    expression += buttonText;
    display.value = expression;
  }
}

/*let display = document.getElementById("display");
let expression = "";*/

function clickButton(button) {
  let buttonText = button.textContent;
  if (buttonText === "=") {
    try {
      let result = eval(expression);
      if (result === 6) {
        display.value = "Kiss ko bi HAHAHA";
      } else {
        display.value = result;
      }
    } catch (e) {
      alert("Error: " + e.message);
    }
  } else {
    expression += buttonText;
    display.value = expression;
  }
}

function deleteLastChar() {
  expression = expression.slice(0, -1);
  display.value = expression;
}

function clearEntry() {
  expression = "";
  display.value = "";
}
