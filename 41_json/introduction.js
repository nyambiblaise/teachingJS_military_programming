/*
JSON stands for JavaScript Object Notation. It's a format for storing and sending data. It's very commonly used on the web because it's lightweight. Here's an example of a JSON object in an example file called person.json:
 */
{
    "firstName": "Sam",
    "lastName": "Green",
    "age": 24
}
const person = {
    firstName: "Sam",
    lastName: "Green",
    age: 24
};
    /*
    JSON is a subset of JavaScript objects. This means that every JSON object is a JavaScript object whereas not every JavaScript object is a JSON object. This is not something you will encounter frequently, but the following is a JavaScript object but not a JSON object:
     */

const user = {
    firstName: "Sam",
    lastName: "Green",
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}