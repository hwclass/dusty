'use strict';

/**
 * event() : The method for binding events for selected element(s)
 *
 * @param {object} element
 * @param {string} event
 * @param {function} fn
*/
module.exports = (element, event, fn) => {
  let el = element[0];
  listenHandler = (e) => {
    let ret = fn.apply(this, arguments);
    if (ret === false) {
      e.stopPropagation();
      e.preventDefault();
    }
    return(ret);
  }
  if (el.addEventListener) {
    el.addEventListener(event, listenHandler, false);
  } else if (el.attachEvent) {
    el.attachEvent ("on" + type, fn);
  } else {
    el.attachEvent("on" + event, fn);
  }
}