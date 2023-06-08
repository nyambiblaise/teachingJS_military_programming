//The next project will allow you to import tasks from a CSV (comma-separated values).
/*
Complete the class Tasks with the following instance methods:
importCsv which receives a CSV string, converts it into an array of tasks and stores it into the instance variable this.tasks.
getCount which returns the number of tasks.
getFirst which returns the first task.
getLast which returns the last task.
getUnformattedTasks which returns a string of all the tasks lower-cased and separated by a comma character and a space character. (CSV export)
 */
class Tasks{
    constructor(tasks) {
        this.tasks = [];
    }
    importCsv(csvString){
        let newArray = csvString.split(", ");
        return newArray;
    }
    getCount(){
        return this.tasks.length;
    }
    getFirst(){
        return this.tasks[0];
    }
    getLast(){
        return this.tasks[this.tasks.length-1];
    }
    getUnformatedTasks(){
        return this.tasks.map(function(task) {
            return task.toLowerCase();
        }).join(", ");
        // OR
        // return this.tasks.join(", ").toLowerCase();
    }
}
let task = new Tasks();
let csv = "man,woman,pear,plumn";
console.log(task.importCsv(csv));