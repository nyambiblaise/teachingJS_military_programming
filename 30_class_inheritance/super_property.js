/*

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
    getFullNames() {
        return `${this.fName} ${this.lName} (Manager)`;
    }
    deleteEmployee(employeeName){
        return `Employee with name ${employeeName} has been deleted`;
    }
}
const manager = new Manager("joshua","silas",90);
console.log(manager.getFullNames());
console.log(manager.getInitials());