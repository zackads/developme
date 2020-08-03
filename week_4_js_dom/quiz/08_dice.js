{
  /* <span class="dice dice-1" title="Dice 1"></span>
<span class="dice dice-2" title="Dice 2"></span>
<span class="dice dice-3" title="Dice 3"></span>
<span class="dice dice-4" title="Dice 4"></span>
<span class="dice dice-5" title="Dice 5"></span>
<span class="dice dice-6" title="Dice 6"></span> */
}

((d, w) => {
  const button = d.getElementById("roll");
  const diceContainer = d.getElementById("dice");

  const rand1to6 = () => String(Math.floor(Math.random() * 6) + 1);
  const showDice = () => {
    let die1 = d.createElement("span");
    let die2 = d.createElement("span");

    die1.classList.add("dice", "dice-" + rand1to6());
    die2.classList.add("dice", "dice-" + rand1to6());

    diceContainer.append(die1, die2);
  };

  button.addEventListener("click", showDice());
})(document, window);
