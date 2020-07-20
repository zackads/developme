((d) => {
  // Map to store cached selectors
  // use the selector string as the key and the element as the value
  let selectorCache = Map();

  // cache function
  let cache = (selector) => {
    // if the selector doesn't exist in the cache
    // go and get it from the DOM and add it to the cache
    if (!selectorCache.has(selector)) {
      // use the selector as the key
      // and the element as the value
      selectorCache.set(selector, d.querySelector(selector));
    }

    // return the cached version
    return selectorCache.get(selector);
  };

  // as before, but using cache to get the selector
  let addClassTo = (className, selector) => {
    let el = cache(selector);

    if (el !== null) {
      el.classList.add(className);
    }

    return el;
  };

  // as before, but using cache to get the selector
  let removeClassFrom = (className, selector) => {
    let el = cache(selector);

    if (el !== null) {
      el.classList.remove(className);
    }

    return el;
  };

  // take an array of selectors
  // map over them with cache
  // filter out any that are null
  let getElements = (selectors) =>
    selectors.map(cache).filter((el) => el !== null);

  // as before, but using getElements to get the selector
  let addClassesTo = (classes, selectors) => {
    let els = getElements(selectors);

    // for each element
    els.forEach((el) => {
      // for each class add to this element
      classes.forEach((className) => el.classList.add(className));
    });

    return els;
  };

  // as before, but using getElements to get the selector
  let removeClassesFrom = (classes, selectors) => {
    let els = getElements(selectors);

    // for each element
    els.forEach((el) => {
      // for each class remove from this element
      classes.forEach((className) => el.classList.remove(className));
    });

    return els;
  };
})(document);
