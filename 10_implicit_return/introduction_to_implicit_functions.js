/*
When you forget to write return in a function in JavaScript, you get an implicit return undefined. The word implicit here means that it is inferred but not specifically expressed. Meaning that there was no return undefined but we end up getting undefined as a result.
 */

//this will return a+b;
const sum = (a,b)=>{
    return a + b;
}
//will return undefined cause nothing was returned
const sum1 = (a,b)=>{
    a + b;
}
/*to solve this problem, we introduce implicit functions
this will return a+b;
=>For the implicit return to work, you must have all the following conditions:
- Your function must be an arrow function.
- The function body must be only one statement. This means you must remove the curly braces.
- You must remove the return keyword because the function body is one statement.
When all these conditions are met, the arrow function will implicitly return the result of its function body (which is only one line).

🚨🚨🚨Only use implicit return when the function body is one line and short.
Never sacrifice code readability and clarity in order to use a certain feature.
 */
const sum2 = (a,b)=>a+b;
console.log(sum2(5,9));

const canVote = (age)=>age>=18;
console.log(canVote(8));