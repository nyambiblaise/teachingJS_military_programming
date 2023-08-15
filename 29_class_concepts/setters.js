/*
Defining getters and setters in a class is mostly used to validate or modify certain values before they are set as properties on a class. There are other use cases. We'll also cover the use case in front-end frameworks/libraries.

Let's take an example where we'd like to create a class User that has an age property. However, we'd like to always make sure that this age property is a number. For that, we define a setter for the age property. Here's what the setter looks like:
 */
class User{
    set setAge(value){
        console.log("some age");
        this._age = Number.parseInt(value,10);
    }
}
let user = new User();
user.setAge = "15";
console.log(user)

/*
Inside this setter, we're converting the value to a number (with Number.parseInt(string, 10)), and then we set the result on a new instance variable called this._age.

The _ here in _age is a convention meaning that this property is internal to the class and should not be accessed
 from outside. JavaScript recently introduced private fields (covered in chapter 33 ahead). However, you may still
  encounter this pattern in many projects.

This is very important. If you accidentally set the result on this.age, then you end up creating an infinite loop. That's because whenever you try to access this.age, JavaScript will automatically call this setter. So you end up with a function that keeps calling itself forever.


 */