/*
DOM Recap
- The DOM is the HTML representation of your page which you can access & manipulate in JavaScript
document.querySelector("your-CSS-selector-here") is used to select a single element from the DOM.

- If there are more than one items that match your selector, then the first item is selected.
Recap of common selectors:
h2 selects an element of type h2, for example <h2>.
- # is for ID
- . is for class
-  (space character) is for descendants
- element.textContent is a property (not a function, so no parentheses) that returns the text inside the element.
- .textContent can be accessed on the result of document.querySelector() when the element is found
- When document.querySelector() doesn't find the element you're looking for, it returns null.
- document.getElementById() is similar to document.querySelector() but only works for IDs. Thus if you're getting
 started with JavaScript, we recommend sticking to document.querySelector().
- Performance differences between these 2 are negligible in real-life applications.
- You should NOT use old alternatives such as getElementsByTagName or getElementsByClassName.
 */