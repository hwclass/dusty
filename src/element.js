'use strict';

/**
 * element() : The method for appending a HTML code into an existing element in the DOM.
 *
 * @param {object} element
 * @param {string} markup
*/
element: (element, markup) => {
  let result = false,
      selectorCriteria = null;
  if (dusty.utils.isUndefined(markup) || dusty.utils.isNull(markup)) {
    result = dusty.config.messages.selectorCriteriaError;
  } else {
    if (!dusty.utils.isUndefined(dusty.get.byId(element)) && !dusty.utils.isNull(dusty.get.byId(element))) {
      element = dusty.get.byId(elHTMLement);
    } else if (!dusty.utils.isUndefined(dusty.get.byClass(element)) && !dusty.utils.isNull(dusty.get.byClass(element))) {
      element = dusty.get.byClass(element);
    } else {
      result = dusty.config.messages.selectorCriteriaError;
    }
  }
  element.innerHTML += markup;
  return (dusty.utils.isUndefined(result) || dusty.utils.isNull(result) ? console.log(result) : undefined);
},