/*
The DOM (Document Object Model) is a JavaScript object & API that represents the HTML of your page. It lets you interact from JavaScript with the elements on your page. You can read and change text, add and delete items, and a lot more.

Selecting a single item
You can select a single item from the page using the document.querySelector method:
*/

document.querySelector("your-CSS-selector-here");
/*
The querySelector (note the capital S character) method expects a CSS selector. That's the same as the selectors you'd write in your CSS file.

If there are multiple items that satisfy the CSS selector that you specified, only the first one is returned. Later on, we'll see how you can select more than 1 item at a time.

Assuming the following HTML:
 */
<a href="/contact-us" className="menu-link">Contact us</a>
<script>
    const incorrect = document.querySelector("a .menu-link")
    const correct = document.querySelector("a.menu-link")
</script>
/*
The first selector will not work because a .menu-link means that there is an a element and then inside of it you should find an element with class="menu-link". This is incorrect.

This is because the a and the element that has the class="menu-link" are the same element.
In that case, the correct selector is a.menu-link (without spaces between them).

You can read it as: select the item that is of type a and has the class menu-link.

This is a common mistake so we wanted to mention it :)

Similarly, you can select an item that has several classes, for example, .menu-link.active will select the item that has both classes menu-link and active.
 */