/*
An important principle in programming is called DRY (Don't Repeat Yourself).

When describing the real world with classes, you will notice sometimes that some classes are very similar. In fact, some methods would be exactly the same thing (maybe with different variable names). For example, let's say you're creating classes for your company where you've got an employee and a manager. Here's how they would look:
 */
class Employee{
    constructor(fName, lName, age) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    getFullNames(){
        return `${this.fName} ${this.lName};`
    }
}