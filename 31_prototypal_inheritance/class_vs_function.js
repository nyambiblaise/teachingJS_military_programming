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

function Rectangle1(width, height) {
    this.width = width;
    this.height = height;
}
