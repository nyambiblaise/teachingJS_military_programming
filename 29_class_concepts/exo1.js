/*
Implement a getter for the todos property in the Tasks class.
This getter should return a CSV string of the todos. So each todo should be separated by a comma and space character.
 */
class Task{
    constructor(todos) {
        this._todos = todos;
    }
    get myTodos(){
        return this._todos.join(",");
    }
}
const apps = ["whataspp","google","facebook"];
const task = new Task(apps);
console.log(task.myTodos);