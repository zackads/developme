((d, w) => {
  let buttons = d.getElementById("buttons");
  let output = d.getElementById("answer");

  let operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };

  buttons.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let input1 = Number(d.getElementById("value1").value);
      let input2 = Number(d.getElementById("value2").value);

      let operation = operations[e.target.id];
      output.textContent = operation(input1, input2);
    }
  });
})(document, window);
