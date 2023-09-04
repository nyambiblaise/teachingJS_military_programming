/*
- document.querySelectorAll("CSS-selector") returns multiple elements from the DOM.
- document.querySelectorAll() always returns a NodeList which is similar to an Array (but not exactly the same).
- NodeList supports 1 property similar to arrays which is .length.
- NodeList supports accessing items by index. For example, [0].
- NodeList supports 1 method similar to arrays which is .forEach().
- All other array methods won't work on a NodeList. You cannot .filter on a NodeList.
- You cannot call .textContent on a NodeList because this property does not exist. You will have to iterate over it.
- You can convert a NodeList into an array using the array spread syntax (...) which spreads every single item of the
 NodeList, into a new array.
- [...document.querySelectorAll("CSS-selector")] will result in an array.
 */