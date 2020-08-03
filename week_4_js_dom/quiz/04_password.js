((d, w) => {
  const passwordInput = d.getElementById("password");
  const feedbackP = d.getElementById("feedback");

  const passwordRules = [
    {
      title: "Will reject passwords shorter than 10 characters",
      test: (pw) => pw.length < 10,
      color: "red",
      message: "Passwords must be 10 characters or greater",
    },
    {
      title:
        "Will accept passwords between 10 and 18 characters with a cautionary message",
      test: (pw) => pw.length >= 10 && pw.length <= 18,
      color: "orange",
      message: "Please consider using a password longer than 18 characters",
    },
    {
      title: "Will accept passwords greater than 18 characters",
      test: (pw) => pw.length > 18,
      color: "green",
      message: "Lookin' good!",
    },
  ];

  const validatePassword = (password, rules) => {
    // Checks `password` against `rules.  Returns `outcome` object with `color` and `message` properties.
    return rules.reduce((outcome, rule) => {
      if (rule.test(password)) {
        outcome.color = rule.color;
        outcome.message = rule.message;
      }
      return outcome;
    }, {});
  };

  passwordInput.addEventListener("keyup", () => {
    const outcome = validatePassword(passwordInput.value, passwordRules);
    passwordInput.style.backgroundColor = outcome.color;
    feedbackP.textContent = outcome.message;
  });
})(document, window);
