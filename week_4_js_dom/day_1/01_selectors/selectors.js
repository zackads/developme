((d) => {
  // 01
  d.body.classList.add("container");

  d.getElementById("header").classList.add("col-md-12");

  d.getElementById("sidebar").classList.add("col-md-4");

  d.getElementById("main").classList.add("col-md-8");

  d.querySelector("#main p:first-child").classList.add("lead");

  let firstList = d.getElementsByClassName("js__first-list")[0];
  firstList.classList.add("list-group");

  let secondList = d.getElementsByClassName("js__second-list")[0];
  secondList.classList.add("pagination");

  // Afternoon - 01
  let firstListItems = Array.from(firstList.children);
  firstListItems.map((item) => item.classList.add("list-group-item"));
})(document);
