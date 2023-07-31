/*
In this example, name is a non-nullish value so the name ?? getName() will short-circuit meaning the getName() function will not run. Thus, you won't see anything logged to the console.

On the other hand, if we call greetUser() (where name is undefined), then the name ?? getName() will not short-circuit and the getName() function will execute. Thus, you will see "getName called" logged to the console.
 */
const getName = ()=>{
    console.log("function called");
    return "N/A";
}
const greetUser = (name) => {
    return `Hello ${name ?? getName()}`;
}

console.log(greetUser());
console.log(greetUser("John"));
console.log(greetUser(undefined));
console.log(greetUser(null));