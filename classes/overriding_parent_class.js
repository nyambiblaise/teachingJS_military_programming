//Class inheritance is also flexible meaning that you can override parent methods.
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
class Admin extends Employee {
    getFullName() {
        return `${this.firstName} ${this.lastName} (admin)`;
    }
}