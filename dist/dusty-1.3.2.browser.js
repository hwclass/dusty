'use strict';

var event = require('event');

var dusty = function (global, document, undefined) {

  var config = {
    messages: {
      selectorCriteriaError: 'There is no any element specified.',
      noMarkupCode: 'There is no any markup code specified.'
    }
  };

  var add = {
    event: event
  };

  var remove = {

    /**
     * byId() : The method removes a DOM element specified id as an argument.
     *
     * @param {string} id
    */
    byId: function byId(id) {
      return element.parentNode.removeChild(document.getElementById(id));
    },

    /**
     * byId() : The method removes a DOM element specified class as an argument.
     *
     * @param {HTMLElement} nodes
     * @param {string} className
    */
    byClass: function byClass(nodes, className) {
      return document.getElementsByClassName(className).remove();
    },

    /**
     * withTagName() : The method removes a DOM element specified tag names as an argument.
     *
     * @param {string} tagName
    */
    withTagName: function withTagName(tagName) {
      return document.getElementsByTagName(tagName).remove();
    },

    /**
     * all() : The method removes the whole DOM element's content given in an array
     *
     * @param {HTMLElement} nodes
    */
    all: function all(nodes) {
      for (var counterForNodes = 0, len = nodes.length; counterForNodes < len; counterForNodes++) {
        if (nodes[counterForNodes]) {
          nodes[counterForNodes].parentNode.removeChild(nodes[counterForNodes]);
        }
      }
    }

  };

  var ajax = {

    /**
     * request() : The method removes the whole DOM element's content given in an array
     *
     * @param {string} method
     * @param {string} url
     * @param {object} data
     * @param {function} callback
    */
    request: function request(method, url, data, callback) {
      var xhrReq = void 0,
          returnedData = null,
          postData = null,
          transferComplete = function transferComplete() {
        return true;
      };
      if (window.XMLHttpRequest) {
        xhrReq = new XMLHttpRequest();
      } else {
        xhrReq = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xhrReq.addEventListener("load", transferComplete, false);
      xhrReq.onreadystatechange = function () {
        if (xhrReq.readyState == 4 && xhrReq.status == 200) {
          callback(xhrReq.responseText);
        }
      };
      xhrReq.open(method, url, true);
      if (method === 'POST') {
        postData = data;
      }
      xhrReq.send(postData);
    }

  };

  var get = {

    /**
     * byId() : The method fetches a DOM element specified id as an argument.
     *
     * @param {string} id
    */
    byId: function byId(id) {
      return document.getElementById(id);
    },

    /**
     * byId() : The method gets a DOM element specified class as an argument.
     *
     * @param {HTMLElement} nodes
     * @param {string} className
    */
    byClass: function byClass(className) {
      var elements = document.getElementsByClassName(className);
      return elements.length === 0 ? undefined : elements;
    },

    /**
     * withTagName() : The method gets a DOM element specified tag names as an argument.
     *
     * @param {string} tagName
    */
    withTagName: function withTagName(tagName) {
      var elements = document.getElementsByTagName(tagName);
      return elements.length === 0 ? undefined : elements;
    }

  };

  var set = {

    /**
     * value() : The method sets the value of the specified DOM element.
     *
     * @param {HTMLElement} element
     * @param {string} val
    */
    value: function value(element, val) {
      if (element.tagName && element.tagName.toLowerCase() === "textarea" || element.tagName.toLowerCase() === "input") {
        element.value = val;
      } else {
        element.innerHTML = val;
      }
    },

    /**
     * HTML() : The method sets the HTML value of the specified DOM element.
     *
     * @param {HTMLElement} element
     * @param {string} markup
    */
    HTML: function HTML(element, markup) {
      var el = element,
          result = false;
      if (typeof el !== "undefined" && el !== null) {
        if (!dusty.utils.isUndefined(el) && !dusty.utils.isNull(el)) {
          el.innerHTML = markup;
        }
      } else {
        result = dusty.config.messages.selectorCriteriaError;
      }
      return dusty.utils.isUndefined(result) || dusty.utils.isNull(result) ? console.log(result) : undefined;
    },

    /**
     * attr() : The method sets the HTML attribute of the specified DOM element.
     *
     * @param {string} id
     * @param {string} attribute
     * @param {string} value
    */
    attr: function attr(id, attribute, value) {
      document.getElementById(id).setAttribute(attribute, value);
    }

  };

  var has = {

    /**
     * class() : The method checks if the HTML element has the specified class name or not.
     *
     * @param {HTMLElement} node
     * @param {string} className
    */
    class: function _class(node, className) {
      return (" " + node.className.split(/\s+/g).join(" ") + " ").indexOf(" " + className + " ") > -1;
    }

  };

  var utils = {

    /**
     * isUndefined() : The method checks if specified obj is undefined or not.
     *
     * @param {object} obj
    */
    isUndefined: function isUndefined(obj) {
      return typeof obj === 'undefined';
    },

    /**
     * isNull() : The method checks if specified obj is null or not.
     *
     * @param {object} obj
    */
    isNull: function isNull(obj) {
      return obj === null;
    },

    /**
     * isEmptyString() : The method checks if specified arguement is an empty string or not.
     *
     * @param {object} obj
    */
    isEmptyString: function isEmptyString(obj) {
      return obj === '';
    }

  };

  return {
    config: config,
    get: get,
    set: set,
    add: add,
    remove: remove,
    ajax: ajax,
    utils: utils
  };
}(window, document);

module.exports = dusty || {};
//# sourceMappingURL=dusty-1.3.2.browser.js.map