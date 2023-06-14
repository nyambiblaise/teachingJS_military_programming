//let us check how === is different from ==
function check1(){
    return "2"==2;
}
function check2() {
    return "2"===2;
}
function check3() {
    return 2===2;
}
function check4() {
    return 2==2;
}
//on the result, you can see that the one with == returns true, which is not correct.
// the correct answer is check3 because it checks the exact values and their data types.
console.log(check1());
console.log(check2());
console.log(check3());
console.log(check4());