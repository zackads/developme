var coll = document.getElementsByClassName("collapsible");
var i;
console.log("js loaded");
console.log(coll);
for (i = 0; i < coll.length; i++) {
  console.log(coll[i]);
  coll[i].addEventListener("click", function () {
    console.log("fired!");
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
