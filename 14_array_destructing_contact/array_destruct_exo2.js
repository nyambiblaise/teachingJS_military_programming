/*We have an object called 'user'.
    Write the destructuring assignment that reads:
    - 'name' property into the variable 'name'.
- 'years' property into the variable 'age'.
- 'isAdmin' property into the variable 'isAdmin' (false, if no such property)
*
    let user = { name: "John", years: 30 };
    // your code to the left side:
    let {} = user;
    console.log(name); // John
    console.log(age); // 30
    console.log(isAdmin); // false
*/
//solution...
let person = {
    name:"john",
    age:30
};
let showPersonInfo = somePerson => {
    let [name,age,isAdmin=false] = somePerson;
    return `Name: ${name}, Age: ${age}, isAdmin: ${isAdmin}`;
}
console.log(showPersonInfo(person));