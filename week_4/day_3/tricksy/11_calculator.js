((d, w) => {
  // Input and output elements
  let input1 = d.getElementById("value1");
  let input2 = d.getElementById("value2");
  let output = d.getElementById("answer");

  // Map() object used for buttons to allow
  // iteration when adding event listeners
  const operators = new Map();
  operators.set("add", {
    element: d.getElementById("add"),
    operation: (a, b) => a + b,
  });
  operators.set("subtract", {
    element: d.getElementById("subtract"),
    operation: (a, b) => a - b,
  });
  operators.set("multiply", {
    element: d.getElementById("multiply"),
    operation: (a, b) => a * b,
  });
  operators.set("divide", {
    element: d.getElementById("divide"),
    operation: (a, b) => a / b,
  });

  // Set event listeners iteratively
  operators.forEach((value) => {
    value.element.addEventListener("click", () => {
      output.textContent = value.operation(
        parseInt(input1.value),
        parseInt(input2.value)
      );
    });
  });
})(document, window);
