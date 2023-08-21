/*
JavaScript doesn't have real classes! 😨 The class syntax you're seeing is called syntactic sugar which is a fancy term for saying that it's a syntax that makes your code more readable

 */
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    static isSquare() {
        return this.width === this.height;
    }
}
//In fact, if you ask JavaScript about the type of Rectangle, you'll get function:
console.log(typeof(Rectangle.isSquare()));
///Before the class keyword was added to the language in 2015, here's how we used to write "classes":

function Rectangle1(length, width) {
    this.width = width;
    this.length = length;
}
//If line 19 is how you write a class using the function constructor pattern, then how do you add a custom method?
Rectangle1.prototype.isArea = function () {
    return this.width * this.length;
}
/*
You can think of the prototype as an object that contains all the instance methods that a certain function can have.
 This prototype is linked in what we call the prototype chain. This is explained in the file prototype_chain.js

So by assigning a new function to Rectangle.prototype you are adding a new instance method to the instances of Rectangle.
That means, every time you create a new Rectangle, that instance will have an instance method called isSquare which can access the instance properties via this. (for example, this.width and this.length).

String.prototype.trim().
What this means is that trim() is a method that can be called on instances of String. This means, trim() can be called on any new string that you create.
 */
console.log(new Rectangle1(10,4).isArea());