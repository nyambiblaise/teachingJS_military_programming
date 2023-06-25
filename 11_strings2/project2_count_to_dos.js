/*
Complete the function getCountTodos such that it returns the number of todos in the CSV string it receives.
Note: CSV means Comma Separated Values. Here's an example of a CSV string: "first item, second item".
 */
let thingsToDo = `Laundry, Wash dishes, Clean table`;
const getCountTodos = (someData) => {
    return someData.split(",").length;
}
console.log(getCountTodos(thingsToDo));