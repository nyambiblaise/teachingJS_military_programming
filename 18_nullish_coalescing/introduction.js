/*
The nullish coalescing ?? operator is a new operator introduced in JavaScript that allows you to default to a certain value when the left-hand side is a nullish value.

A nullish value is a value that is either null or undefined.

Notice how when name is a nullish value (either null or undefined), then the right-hand side of the operator is executed. In this case, "N/A".
This operator is useful to avoid showing undefined or null to the User Interface, which are often signs of bugs.
Whenever possible, if you can provide a default value, you can use the nullish coalescing operator ?? to show that default value.
 */
const getUserName = name=>{
    return name ?? "Not Found";
}
console.log(getUserName("jones"));
console.log(getUserName());
console.log(getUserName(null));
console.log(getUserName(undefined));
