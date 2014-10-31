#dusty.js Library API - 1.0.0

This document is developed for describing the AKQA - DOM Traversing library. You can reach every methods, functions, declerations and iterations from the every title of each section like “Methods”, “Declerations” and etc.

###Declerations

###config

	**messages**

		This is used to wrap the config constants like messages.

selectorCriteriaError
	The message for the selection criteria error.

noMarkupCode
		The message for the alerting if there is not any other markup code.

Methods

add

	This is used to wrap the adding methods.

event (element, event, fn)
		The method for binding events for selected element(s).

element (element, markup)
		The method for appending a HTML code into an existing element in the DOM.

ajax

	This is used to wrap the AJAX methods.

request (method, url, data, callback)
		The method for making AJAX requests with methods like basic GET or POST.

get

	This is used to wrap the getter methods.

withId (id)
		The method returns a DOM element specified id as an argument.

withClass (className)
		The method returns a DOM element specified class name as an argument.

withTagName (tagName)
		The method returns a DOM element specified tag name as an argument.

remove

	This is used to wrap the remover methods.

withId (id)
		The method removes a DOM element specified id as an argument.

withClass (className)
		The method removes a DOM element specified class name as an argument.

withTagName (tagName)
		The method removes a DOM element specified tag name as an argument.

set

	This is used to wrap the remover methods.

value (element, val)
		The method changes the value of a DOM element specified as an argument.

HTML (element, markup)
		The method updates the value of a DOM element specified as an argument.

utils

	This is used to wrap the utility methods.

isUndefined
		The method checks the object if undefined or not.

isNull
		The method checks the object if null or not.

isEmptyString
		The method checks the object if empty or not.
