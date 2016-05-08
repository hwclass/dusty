dusty.js
=====
A small library-like DOM traversing tool

<a href="https://github.com/hwclass/dusty/blob/master/dusty.js-API.md">API docs</a>

###Get element using its id.
```javascript
dusty.get.withId('testId');
```

###Get elements using their class names.
```javascript
dusty.get.withClass('testClass');
```

###Get elements using their tag names.
```javascript
dusty.get.withTagName('h1');
```

###Set the value of an element.
```javascript
dusty.set.value(dusty.get.withId('testId'), 'This is an input element.');
```

###Bind events to an element.
```javascript
dusty.add.customEvent(dusty.get.withClass('testClass'), 'click', function () { console.log('clicked element.'); });
```

###Bind custom events to an element.
```javascript
dusty.add.customEvent(dusty.get.withClass('testClass'), 'click', function () { console.log('clicked element.'); });
```

###Make an AJAX request (with GET).
```javascript
dusty.ajax.request('GET', 'url', {dummyData : 'dummyData'}, function (data) {
	console.dir(data);
});
```
