//Complete the function makeSquare such that it returns a new instance of Rectangle. Choose any width and height you want as long as they are the same value so that you create a square.
class Rectangle{
    constructor(width,length) {
        this.width = width;
        this.length = length
    }
}
const makeSquare = someShape =>{
    return new Rectangle(5,5);
}