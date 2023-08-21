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
Rectangle1.prototype.isArea() = function () {
    return this.width * this.height;
}