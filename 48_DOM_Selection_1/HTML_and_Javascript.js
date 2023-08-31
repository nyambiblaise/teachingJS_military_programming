/*
The DOM (Document Object Model) is a JavaScript object & API that represents the HTML of your page. It lets you interact from JavaScript with the elements on your page. You can read and change text, add and delete items, and a lot more.

Selecting a single item
You can select a single item from the page using the document.querySelector method:
*/

document.querySelector("your-CSS-selector-here");
/*
The querySelector (note the capital S character) method expects a CSS selector. That's the same as the selectors you'd write in your CSS file.

If there are multiple items that satisfy the CSS selector that you specified, only the first one is returned. Later on, we'll see how you can select more than 1 item at a time.
 */