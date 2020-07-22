((d, window) => {
  const styles = [...d.getElementById("items").children];
  let fragment = d.createDocumentFragment();
  let ulElem = d.getElementById("colours");
  styles.forEach((div) => {
    let liElem = d.createElement("li");
    liElem.textContent = div.style.backgroundColor;
    fragment.append(liElem);
  });
  ulElem.append(fragment);
})(document, window);
