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
 * Version : 1.1.2
 * Released: 2015
 *
 */
;var dusty = (function(global, document, undefined) {

  var config = {
    messages : {
      selectorCriteriaError : 'There is no any element specified.',
      noMarkupCode : 'There is no any markup code specified.'
    }
  };

  var add = {
    event : function(element, event, fn) {
      var el = element[0];
      function listenHandler(e) {
        var ret = fn.apply(this, arguments);
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

    customEvent : function (element, customEventName) {
      element.dispatchEvent(new CustomEvent(customEventName));
    },

    element : function (element, markup) {
      var result = false;
      var selectorCriteria = null;
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

    class : function (nodes, className) {
      for (var counterForNodes = 0, len = nodes.length; counterForNodes < len; counterForNodes++) {
        var tempElement = nodes[counterForNodes];
        if (!utils.hasClass(tempElement), className) {
          nodes[counterForNodes].className += ' ' + className;
        }
      }
    }

  };

  var remove = {

    byId : function (id) {
      element.parentNode.removeChild(document.getElementById(id));
    },

    byClass : function (nodes, className) {
      document.getElementsByClassName(className).remove();
    },

    withTagName : function (tagName) {
      var elements = document.getElementsByTagName(tagName);
      document.getElementsByTagName(tagName).remove();
    },

    all : function (nodes) {
      for (var counterForNodes = 0, len = nodes.length; counterForNodes < len; counterForNodes++) {
        if (nodes[counterForNodes]) {
          nodes[counterForNodes].parentNode.removeChild(nodes[counterForNodes]);
        }
      }
    }

  };

  var ajax = {

    request : function (method, url, data, callback) {
      var xhrReq;
      var returnedData = null;
      if (window.XMLHttpRequest) {
        xhrReq = new XMLHttpRequest();
      } else {
        xhrReq = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xhrReq.addEventListener("load", transferComplete, false);
      xhrReq.onreadystatechange = function() {
        if (xhrReq.readyState == 4 && xhrReq.status == 200) {
          callback(xhrReq.responseText);
        }
      }
      xhrReq.open(method, url, true);
      var postData = null;
      if (method === 'POST') {
        postData = data
      }
      xhrReq.send(postData);
      var transferComplete = function () {
        return true;
      }
    }

  };

  var get = {

    byId : function(id) {
      return document.getElementById(id);
    },

    byClass : function(className) {
      var elements = document.getElementsByClassName(className);
      return (elements.length===0?undefined:elements);
      return this;
    },

    withTagName : function(tagName) {
      var elements = document.getElementsByTagName(tagName);
      return (elements.length===0?undefined:elements);
    }

  };

  var set = {
    value : function(element, val) {
      if(element.tagName && element.tagName.toLowerCase() == "textarea" || element.tagName.toLowerCase() == "input") {
        element.value = val;
      } else {
        element.innerHTML = val;
      }
    },
    HTML : function(element, markup) {
      var el = element,
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
    attr : function (id, attribute, value) {
      document.getElementById(id).setAttribute(attribute, value);
    }
  };

  var utils = {
    isUndefined : function(obj) {
      return (typeof obj === 'undefined');
    },
    isNull : function (obj) {
      return obj === null;
    },
    isEmptyString : function (obj) {
      return (obj === '');
    },
    hasClass : function (node, className) {
      return (" " + node.className.split(/\s+/g).join(" ") + " ").indexOf(" " + className + " ") > -1;
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
