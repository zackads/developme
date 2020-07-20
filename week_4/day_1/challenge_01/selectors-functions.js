((d) => {
  // *** 06 *** (uber-tricksy)
  class SelectorCache {
    getElementBySelector(selector) {
      return this[selector];
    }

    addElementBySelector(selector, element) {
      this[selector] = d.querySelector(selector);
      return this[selector];
    }
  }

  const cache = new SelectorCache();

  // *** 02 ***
  let addClassTo = (className, selector) => {
    let el = cache.getElementBySelector(selector) || d.querySelector(selector);
    if (el) {
      el.classList.add(className);
      return cache.addElementBySelector(selector, el);
    }
    return null;
  };

  let addedEl = addClassTo("col-md-12", ".js__first-list");
  console.log(addedEl); // the <ul> - should have the new class

  let addNoError = addClassTo("col-md-12", ".js__first-list-eek");
  console.log(addNoError); // null

  // *** 03 ***
  let removeClassFrom = (className, selector) => {
    let el = cache.getElementBySelector(selector) || d.querySelector(selector);
    if (el) {
      el.classList.remove(className);
      return cache.addElementBySelector(selector, el);
    }
    return null;
  };

  let removedEl = removeClassFrom("col-md-12", ".js__first-list");
  console.log(removedEl); // the <ul> - should have removed the class

  let removeNoError = removeClassFrom("col-md-12", ".js__first-list-eek");
  console.log(removeNoError); // null;

  // *** 04 *** (tricksy)
  let addClassesTo = (classNames, selectors) => {
    let elements = selectors.map(
      (selector) =>
        cache.getElementBySelector(selector) || d.querySelector(selector)
    );
    if (elements) {
      elements.forEach((el) => el.classList.add(...classNames));
      return elements;
    }
    return null;
  };

  let addedEls = addClassesTo(
    ["col-md-12", "list-group"],
    [".js__first-list", ".js__second-list"]
  );
  console.log(addedEls); // the two <ul> elements - should have the new classes

  // *** 05 *** (tricksy)
  let removeClassesFrom = (classNames, selectors) => {
    let elements = selectors.map(
      (selector) =>
        cache.getElementBySelector(selector) || d.querySelector(selector)
    );
    if (elements) {
      elements.forEach((el) => el.classList.remove(...classNames));
      return elements;
    }
    return null;
  };

  let removedEls = removeClassesFrom(
    ["col-md-12", "list-group"],
    [".js__first-list", ".js__second-list"]
  );
  console.log(removedEls); // the two <ul> elements - should have removed the classes
})(document);
