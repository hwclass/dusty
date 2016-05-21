'use strict';

/**
 * customEvent() : The method for binding custom events for selected element(s)
 *
 * @param {object} element
 * @param {string} customEventName
*/
module.exports = (element, customEventName) => {
  element.dispatchEvent(new CustomEvent(customEventName));
}