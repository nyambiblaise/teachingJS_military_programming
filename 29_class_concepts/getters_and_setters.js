/*
You can still use getters and setters with the pattern where you capture constructor parameters. That's because, whenever you access this.age from within the class, it will also automatically trigger the set age(value) function. This is why we had to create an internal property and call it this._age to avoid creating an infinite loop.
 */
class User2{
    constructor(myAge) {
        this._myAge = myAge;
    }
    set setAge(someAge){
        this._myAge = someAge;
    }
    get getAge(){
        return this._myAge;
    }
}
const user = new User2(10);
//user.setAge = 14;
console.log(user.getAge);