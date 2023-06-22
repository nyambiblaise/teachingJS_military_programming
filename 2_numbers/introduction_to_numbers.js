let age = 40;
let phone = "671234";
function convertAgeToString(x){
    return x.toString(); //this will return "x"
}
/*
let us not convert a string to a number (parsing). We use the Number.parseX function.
 */
function convertStringToInt(){
    return Number.parseInt(phone);
}
//console.log(convertStringToInt())
/*
there is another way to do it...
The function name is called Number.parseInt(). Yes, including the Number. bit. This is because there's a global object called Number which contains a method called parseInt().

This Number.parseInt() method expects 2 parameters:
 */
function convertStringToInt2(){
    //return Number.parseInt(phone,10);//0-9
    return Number.parseInt(phone,2);//binary
}
//The radix is the base of the numerical system that you'd like to use. For most use cases the radix you'd like to use is 10 which represents the way we count 2_numbers in our everyday lives. This system is called the decimal system (because we have 10 fingers, so we use the digits from 0 to 9).
console.log(convertStringToInt2())

//a thirday way
function convertStringToInt3(){
    return parseInt(phone);
}
console.log(convertStringToInt3())