/*
The super keywords is used to call methods on the parent class.
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
    getInitials(){
        return `${this.fName[0].toUpperCase()}${this.lName[0].toUpperCase()}`;
    }
}
class Manager extends Employee{

    /* This line will give an error because we already have this constructor
    constructor(firstName, lastName, department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
    }
    So, to solve the issue, we use the super keyword
    */
    constructor(firstName, lastName, department) {
        super(firstName,lastName,department);
        this.department = department;
    }
    getFullNames() {
        return `${this.fName} ${this.lName} working at ${this.department} As (Manager)`;
    }
    deleteEmployee(employeeName){
        return `Employee with name ${employeeName} has been deleted`;
    }
}
const manager = new Manager("joshua","silas","IT");
console.log(manager.getFullNames());
console.log(manager.getInitials());

/*
NOTE:
The super(firstName, lastName) is calling the Employee class' constructor. So, super() calls the parent class' constructor.

If the parent class' constructor has no parameters, then you call super(). Otherwise, you can pass parameters just like we did in this example with super(firstName, lastName).

In this example, the Manager class will end up having 3 instance variables this.firstName and this.lastName which are set by the Employee's constructor, and this.department which is set by the Manager's constructor.

The super keyword is often used in front-end frameworks/libraries.
 */