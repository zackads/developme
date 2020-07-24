((d, w) => {
  // Elements
  const button = d.getElementById("submit");
  const form = d.getElementById("form");
  const formGroups = Array.from(form.children).filter(
    (element) => element.tagName !== "BUTTON"
  );

  // Error message
  let errorMsg = d.createElement("span");
  errorMsg.classList.add("help-block", "error-msg");
  errorMsg.textContent = "Input required!";

  // Helper functions
  const resetValidity = (formGroup) => {
    formGroup.classList.remove("has-error", "has-success"); // Input field styling
    if (formGroup.children[2]) {
      formGroup.children[2].remove(); // Error message
    }
    return formGroup;
  };

  let makeValid = (formGroup) => {
    formGroup.classList.add("has-success");
  };

  let makeInvalid = (formGroup) => {
    formGroup.classList.add("has-error");
    formGroup.append(errorMsg.cloneNode());
  };

  // Event listener
  button.addEventListener("click", (e) => {
    formGroups.forEach((formGroup) => {
      if (formGroup.children[1].value === "") {
        e.preventDefault();
        makeInvalid(resetValidity(formGroup));
      } else {
        makeValid(resetValidity(formGroup));
      }
    });
  });
})(document, window);
