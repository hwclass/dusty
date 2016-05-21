const subModuleA = require('sub-module-a');
const subModuleB = require('sub-module-b');

module.exports = {
  subModuleA: subModuleA,
  subModuleB: subModuleB
};

const dusty = ((global, document, undefined) => {

  const config = {
    messages: {
      selectorCriteriaError: 'There is no any element specified.',
      noMarkupCode: 'There is no any markup code specified.'
    }
  };

  const subModules = {
    subModuleA: subModuleA,
    subModuleB: subModuleB
  };

  const add = {

    /**
     * event() : The method for binding events for selected element(s)
     *
     * @param {object} element
     * @param {string} event
     * @param {function} fn
    */
    event: eventModule,

    /**
     * customEvent() : The method for binding custom events for selected element(s)
     *
     * @param {object} element
     * @param {string} customEventName
    */
    customEvent: (element, customEventName) => {
      element.dispatchEvent(new CustomEvent(customEventName));
    },

    /**
     * element() : The method for appending a HTML code into an existing element in the DOM.
     *
     * @param {object} element
     * @param {string} markup
    */
    element: function (_element) {
      function element(_x, _x2) {
        return _element.apply(this, arguments);
      }

      element.toString = function () {
        return _element.toString();
      };

      return element;
    }((element, markup) => {
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
      return dusty.utils.isUndefined(result) || dusty.utils.isNull(result) ? console.log(result) : undefined;
    }),

    /**
     * class() : The method for appending a class for the DOM nodes.
     *
     * @param {HTMLElement} nodes
     * @param {string} className
    */
    class: (nodes, className) => {
      for (var counterForNodes = 0, len = nodes.length; counterForNodes < len; counterForNodes++) {
        let tempElement = nodes[counterForNodes];
        if (!has.class(tempElement), className) {
          nodes[counterForNodes].className += ' ' + className;
        }
      }
    }

  };

  const remove = {

    /**
     * byId() : The method removes a DOM element specified id as an argument.
     *
     * @param {string} id
    */
    byId: id => {
      return element.parentNode.removeChild(document.getElementById(id));
    },

    /**
     * byId() : The method removes a DOM element specified class as an argument.
     *
     * @param {HTMLElement} nodes
     * @param {string} className
    */
    byClass: (nodes, className) => {
      return document.getElementsByClassName(className).remove();
    },

    /**
     * withTagName() : The method removes a DOM element specified tag names as an argument.
     *
     * @param {string} tagName
    */
    withTagName: tagName => {
      return document.getElementsByTagName(tagName).remove();
    },

    /**
     * all() : The method removes the whole DOM element's content given in an array
     *
     * @param {HTMLElement} nodes
    */
    all: nodes => {
      for (let counterForNodes = 0, len = nodes.length; counterForNodes < len; counterForNodes++) {
        if (nodes[counterForNodes]) {
          nodes[counterForNodes].parentNode.removeChild(nodes[counterForNodes]);
        }
      }
    }

  };

  const ajax = {

    /**
     * request() : The method removes the whole DOM element's content given in an array
     *
     * @param {string} method
     * @param {string} url
     * @param {object} data
     * @param {function} callback
    */
    request: (method, url, data, callback) => {
      let xhrReq,
          returnedData = null,
          postData = null,
          transferComplete = () => {
        return true;
      };
      if (window.XMLHttpRequest) {
        xhrReq = new XMLHttpRequest();
      } else {
        xhrReq = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xhrReq.addEventListener("load", transferComplete, false);
      xhrReq.onreadystatechange = () => {
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

  const get = {

    /**
     * byId() : The method fetches a DOM element specified id as an argument.
     *
     * @param {string} id
    */
    byId: id => {
      return document.getElementById(id);
    },

    /**
     * byId() : The method gets a DOM element specified class as an argument.
     *
     * @param {HTMLElement} nodes
     * @param {string} className
    */
    byClass: className => {
      let elements = document.getElementsByClassName(className);
      return elements.length === 0 ? undefined : elements;
    },

    /**
     * withTagName() : The method gets a DOM element specified tag names as an argument.
     *
     * @param {string} tagName
    */
    withTagName: tagName => {
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
    value: (element, val) => {
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
    HTML: (element, markup) => {
      let el = element,
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

  const has = {

    /**
     * class() : The method checks if the HTML element has the specified class name or not.
     *
     * @param {HTMLElement} node
     * @param {string} className
    */
    class: (node, className) => {
      return (" " + node.className.split(/\s+/g).join(" ") + " ").indexOf(" " + className + " ") > -1;
    }

  };

  const utils = {

    /**
     * isUndefined() : The method checks if specified obj is undefined or not.
     *
     * @param {object} obj
    */
    isUndefined: obj => {
      return typeof obj === 'undefined';
    },

    /**
     * isNull() : The method checks if specified obj is null or not.
     *
     * @param {object} obj
    */
    isNull: obj => {
      return obj === null;
    },

    /**
     * isEmptyString() : The method checks if specified arguement is an empty string or not.
     *
     * @param {object} obj
    */
    isEmptyString: obj => {
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
})(window, document);

module.exports = dusty || {};
//# sourceMappingURL=main.mjs.map