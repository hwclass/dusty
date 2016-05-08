/*!
 * dusty : A small library-like DOM traversing tool
 *
 * Copyright (c) 2014 Barış Güler
 * http://hwclass.github.io
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Launch  : October 2014
 * Version : 1.3.2
 * Released: 2015
 *
 */

'use strict';

;const dusty = ((global, document, undefined) => {

  const config = {
    messages : {
      selectorCriteriaError : 'There is no any element specified.',
      noMarkupCode : 'There is no any markup code specified.'
    }
  };

  const add = {

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
    },

    customEvent: (element, customEventName) => {
      element.dispatchEvent(new CustomEvent(customEventName));
    },

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

    byId: (id) => {
      return element.parentNode.removeChild(document.getElementById(id));
    },

    byClass: (nodes, className) => {
      return document.getElementsByClassName(className).remove();
    },

    withTagName: (tagName) => {
      return document.getElementsByTagName(tagName).remove();
    },

    all: (nodes) => {
      for (let counterForNodes = 0, len = nodes.length; counterForNodes < len; counterForNodes++) {
        if (nodes[counterForNodes]) {
          nodes[counterForNodes].parentNode.removeChild(nodes[counterForNodes]);
        }
      }
    }

  };

  const ajax = {

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
      }
      xhrReq.open(method, url, true);
      if (method === 'POST') {
        postData = data
      }
      xhrReq.send(postData);
    }
  };

  const get = {

    byId: (id) => {
      return document.getElementById(id);
    },

    byClass: (className) => {
      let elements = document.getElementsByClassName(className);
      return (elements.length===0?undefined:elements);
    },

    withTagName: (tagName) => {
      var elements = document.getElementsByTagName(tagName);
      return (elements.length===0?undefined:elements);
    }

  };

  var set = {
    value: (element, val) => {
      if(element.tagName && element.tagName.toLowerCase() === "textarea" || element.tagName.toLowerCase() === "input") {
        element.value = val;
      } else {
        element.innerHTML = val;
      }
    },
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
      return (dusty.utils.isUndefined(result) || dusty.utils.isNull(result) ? console.log(result) : undefined);
    },
    attr: function (id, attribute, value) {
      document.getElementById(id).setAttribute(attribute, value);
    }
  };

  const has = {
    class: (node, className) => {
      return (" " + node.className.split(/\s+/g).join(" ") + " ").indexOf(" " + className + " ") > -1;
    }
  };

  const utils = {
    isUndefined : (obj) => {
      return (typeof obj === 'undefined');
    },
    isNull: (obj) => {
      return obj === null;
    },
    isEmptyString: (obj) => {
      return (obj === '');
    }
  };

  return {
    config : config,
    get : get,
    set : set,
    add : add,
    remove : remove,
    ajax : ajax,
    utils : utils
  };

})(window, document);

module.exports = dusty;
