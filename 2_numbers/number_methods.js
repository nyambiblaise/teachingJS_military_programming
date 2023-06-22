//Create function getDivisionRemainderBy2 such that it returns the division remainder of the number it receives by 2.
function getDivisionRemainderBy2(n) {
    return n%2;
}
//function to roundup
function roundUp(x) {
    return Math.round(x);
}
//round down
function roundDown(x) {
    return Math.floor(x);
}
console.log(roundUp(2.5));
console.log(roundDown(2.1));