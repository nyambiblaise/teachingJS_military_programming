/*
In order to convert from a JSON string into a JSON object, you can use the JSON.parse(string) method:
 */
const string = '{"firstName":"Sam","lastName":"Green","age": 32}';
const person = JSON.parse(string); // {firstName: "Sam", lastName: "Green", age: 32}
console.log(person.firstName); // "Sam"
console.log(person); // the entire object