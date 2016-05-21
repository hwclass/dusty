'use strict';

module.exports = {
	event: (element, event, fn) => {
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
}