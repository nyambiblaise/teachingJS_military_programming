/*
When your code starts growing, you will have a few dozen functions in your source code. To better organize your code, you can group functions that perform similar functionalities into a single class.
This is one of the reasons why we have classes. The other main reason is because classes are reusable

Creating an instance
To create an instance of a class, you have to use the new keyword before the name of the class. For example:
 */
class Person {

}
const person = new Person();
class User{
    constructor(name){
        this.name = name;
    }
}
const someUser = new User("John");