/*
The remaining problem is that if we try to access user.age, we get undefined. That's because we have not defined a getter for the age property.

Let's go ahead and define a getter for the age property. We do that by defining a get age() function as follows:
 */
class User1{
    set setAge(value){
        this._age = Number.parseInt(value,10);
    }
    get getAge(){
        return this._age;
    }
}
const user = new User1();
user.setAge = "12";
console.log(user.getAge)