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
/*
What you will end up needing frequently is converting from a JSON string into a JSON object (in JavaScript) and vice versa.

The reason why this is the most frequent use case is that when you communicate with an API, you cannot send an object. You will have to convert it to a string. Similarly, the API cannot send you an object, it will send you a string. But, that string is not any string. It's a JSON string. That means that it can be converted back into a JSON object.

 Benefits of using JSON
The major benefit of JSON is that it doesn't really matter in which programming language the API we're trying to talk to is written in. It could be python, node, PHP, Ruby, etc.
As long as it can read and receive JSON, we can both communicate.
It's like you're traveling to a foreign country. It doesn't matter the native language of the other person you're communicating with, as long as you can both speak English (or another common language).
 */