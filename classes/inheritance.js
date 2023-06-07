class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getInitials() {
        return this.firstName[0] + this.lastName[0];
    }
}
class Admin extends Employee{
    paySalaries() {
        console.log("Paying salaries...");
    }
}
let go = new Admin("Richard","Ashu");
go.paySalaries();
console.log(go.getInitials())
