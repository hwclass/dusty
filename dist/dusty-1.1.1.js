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
 * Version : 1.1.1
 * Released: 2014
 *
 */
var dusty = (function(global, document, undefined) {
  
  /*
   * Configuration object wrapper
   */
  var config = {
    messages : {
      selectorCriteriaError : 'There is no any element specified.',
      noMarkupCode : 'There is no any markup code specified.'
    }
  };

  /*
   * It is used to bind events and adding markup code into elements
   * Custom events are controlled within their context in the future
   */
  var add = {
    event : function(element, event, fn) {
      function listenHandler(e) {
        var ret = fn.apply(this, arguments);
        if (ret === false) {
          e.stopPropagation();
          e.preventDefault();
        }
        return(ret);
      }
      if (element.addEventListener) {
        element.addEventListener(event, listenHandler, false);
      } else if (element.attachEvent) {
        element.attachEvent ("on" + type, fn);
      } else {
        element.attachEvent("on" + event, attachHandler);
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
        if (!dusty.utils.isUndefined(dusty.get.withId(element)) && !dusty.utils.isNull(dusty.get.withId(element))) {
          element = dusty.get.withId(element);
        } else if (!dusty.utils.isUndefined(dusty.get.withClass(element)) && !dusty.utils.isNull(dusty.get.withClass(element))) {
          element = dusty.get.withClass(element);
        } else {
          result = dusty.config.messages.selectorCriteriaError;
        }
      }
      element.innerHTML += markup;
      return (dusty.utils.isUndefined(result) || dusty.utils.isNull(result) ? console.log(result) : undefined);
    }
  };

  /*
   * It is used to wrap the methods to make ajax requests
   */
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
          var result = xhrReq.responseText;
          var responseContentType = xhrReq.getResponseHeader('content-type');
          if (responseContentType.indexOf('json') > -1) {
            result = JSON.parse(result)
          }
          callback(result);
        }
      }
      xhrReq.open(method, url, true);
      var postData = null;
      if (method === 'POST') {
        postData = data
      }
      xhrReq.send(postData);
      var transferComplete = function () {
        console.log('transferComplete');
      }
    }
  };

  /*
   * DOM element traversing wrapper object
   */
  var get = {
    withId : function(id) {
      return document.getElementById(id);
    },
    withClass : function(className) {
      var elements = document.getElementsByClassName(className);
      return (elements.length===0?undefined:elements);
    },
    withTagName : function(tagName) {
      var elements = document.getElementsByTagName(tagName);
      return (elements.length===0?undefined:elements);
    }
  };
  
  /*
   * It is used for removing elements in the DOM 
   */
  var remove = {
    withId : function (id) {
      var element = document.getElementById(id);
      element.parentNode.removeChild(element);
    },
    withClass : function (className) {
      document.getElementsByClassName(className).remove();
    },
    withTagName : function (tagName) {
      var elements = document.getElementsByTagName(tagName);
      document.getElementsByTagName(tagName).remove();
    },
    event : function (element, event, fn) {
      if (element.removeEventListener) {
        element.removeEventListener(event, fn, false);
      } else if (element.detachEvent) {
        element.detachEvent('on'+event, fn);
      }
    }
  };

  /*
   * It is used to set some values, attributes and HTML content into DOM elements 
   */
  var set = {
    value : function(element, val) {
      if (element.length === 1) {       
        if(element.tagName) {
          if (element.tagName.toLowerCase() == "TEXTAREA" || element.tagName.toLowerCase() == "INPUT") {
             element.value = val;
          }
        } else {
         element.innerHTML = val;
        }
      } else if (element.length > 1) {
        for (var elCounter1 = 0, len1 = element.length; elCounter1 < len1; elCounter1++) {
          if(element[elCounter1].tagName) {
            if (element[elCounter1].tagName === "TEXTAREA" || element[elCounter1].tagName === "INPUT") {  
              element[elCounter1].value = val;
            } else {
              element[elCounter1].innerHTML = val;
            }
          }
        }
      }
    },
    HTML : function(element, markup) {
      var result = false;
      if (!dusty.utils.isUndefined(dusty.get.withId(element)) && !dusty.utils.isNull(dusty.get.withId(element))) {
        element = dusty.get.withId(element);
      } else if (!dusty.utils.isUndefined(dusty.get.withClass(element)) && !dusty.utils.isNull(dusty.get.withClass(element))) {
        element = dusty.get.withClass(element);
      } else {
        result = dusty.config.messages.selectorCriteriaError;
      }
      element.innerHTML = markup;
      return (dusty.utils.isUndefined(result) || dusty.utils.isNull(result) ? console.log(result) : undefined);
    },
    attr : function (id, attribute, value) {
      document.getElementById(id).setAttribute(attribute, value);
    }
  };

  /*
   * Utility methods wrapper
   */
  var utils = {
    isUndefined : function(obj) {
      return (typeof obj === 'undefined');
    },
    isNull : function (obj) {
      return (typeof obj === null);
    },
    isEmptyString : function (obj) {
      return (obj === '');
    }
  };

  return {
    get : get,
    set : set,
    add : add,
    remove : remove,
    ajax : ajax,
    utils : utils
  };

})(window, document);