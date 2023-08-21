/*try to reproduce the classes and methods to obey the code below

const user = new User("Sam", "Green", 17);
user.canVote(); // false
user.getFullName(); // "Sam Green"

const admin = new Admin("Alex", "Blue", 20);
admin.canVote(); // true
admin.getFullName(); // "Alex Blue [admin]"
admin.updateConfig(); // "Config updated"

 */



//SOLUTION
class User{
    constructor(fname,lname,age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    canVote(){
        return this.age>=18;
    }
    getFullName(){
        return `${this.fname} ${this.lname}`;
    }
}
class Admin extends User{
    getFullName(){
        return `${this.fname} ${this.lname} [admin]`;
    }
    updateConfig(){
        return `Config updated`;
    }
}

const user = new User("Sam", "Green", 17);
console.log(user.canVote()); // false
console.log(user.getFullName()); // "Sam Green"
const admin = new Admin("Alex", "Blue", 20);
console.log(admin.canVote()); // true
console.log(admin.getFullName()); // "Alex Blue [admin]"
console.log(admin.updateConfig()); // "Config updated"
