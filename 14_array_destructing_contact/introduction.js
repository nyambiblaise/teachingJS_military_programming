//Say you've got the following array containing the width and height of an item and you'd like to create variables
// for the width and height:
const dimensions = [20, 5];

// create variables
const width = dimensions[0];
const height = dimensions[1];

// log them
console.log(width); //20
console.log(height); //5
//The above code can be rewritten using the new array destructuring syntax as follows:

const dimensions = [20, 5]
// create variables
const [width, height] = dimensions;

// log them
console.log(width); //20
console.log(height); //5

//The 2 variable declarations were replaced with one line: const [width, height] = dimensions. The end result is the
// same.
// We are pulling the first entry of dimensions into a new variable width, and we're pulling the second entry of dimensions into a new variable height.
// So the order in the [] matters for array destructuring as the first variable name will correspond to the first item in the array (index 0), the second variable name will correspond to the second item in the array (index 1), and so on...
// You can identify destructuring when you see the square brackets [] on the left side of the equal sign.
// As with most features, you may dislike the syntax at first, but it's very elegant once you get used to it.

//RECAP
//Array destructuring is syntactic sugar (meaning that it makes your code easier to read).
//The order in array destructuring matters, as every variable will be matched to the corresponding array item.
// You can identify destructuring when you see the square brackets [] on the left side of the equal sign.