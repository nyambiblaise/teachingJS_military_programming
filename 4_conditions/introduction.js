/*
4_conditions are almost the same in all programming languages including JS.
if (condition)
    statement(s)

>= for greater than or equal to
<= for less than or equal to
=== for equal to
!== for not equal to

Implement the function canVote such that it returns true whenever the age 18 or above and false in all other scenarios.
Study the 3 different methods below to see how they work. Note that they all do the same thing.
 */
function canVote1(age) {
    return age>=18;
}
function canVote2(age) {
    if(age>=18){
        return true;
    }else{
        return false;
    }
}
function canVote3(age) {
    return age>=18?true:false;
}
function canVote4(age) { //here, the last return statement will ONLY execute if and only iff the first one is false.
    if(age>=18){
        return true;
    }
    return false;
}
console.log(canVote1(11));
//NOTE: Always use triple equal === when comparing 2 values in JavaScript. Check project.js to understand why.
