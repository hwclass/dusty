dusty.js
=====
A small library-like DOM traversing tool

###Get element using its id.
<pre lang="javascript">
<code>
dusty.get.withId('testId');
<code>
</pre>

###Get elements using their class names.
<pre lang="javascript">
<code>
dusty.get.withClass('testClass');
<code>
</pre>

###Get elements using their tag names.
<pre lang="javascript">
<code>
dusty.get.tagName('h1');
<code>
</pre>

###Set the value of an element.
<pre lang="javascript">
<code>
dusty.set.value(dusty.get.withId('testId'), 'This is an input element.');
</pre>
</code>

###Bind events to an element.
<pre lang="javascript">
<code>
dusty.add.customEvent(dusty.get.withClass('testClass'), 'click', function () { console.log('clicked element.'); });
</pre>
</code>

###Make an AJAX request (with GET).
<pre lang="javascript">
<code>
dusty.ajax.request('GET', 'url', {dummyData : 'dummyData'}, function (data) { console.dir(data); });
</pre>
</code>