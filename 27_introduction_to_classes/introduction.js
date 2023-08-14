/*
When your code starts growing, you will have a few dozen functions in your source code. To better organize your code, you can group functions that perform similar functionalities into a single class.
This is one of the reasons why we have classes. The other main reason is because classes are reusable

Creating an instance
To create an instance of a class, you have to use the new keyword before the name of the class.
To define a class, you need to start with the class keyword followed by the name of the class.

The common convention for the name of the class is UpperCamelCase (also known as PascalCase). So the first character of every word should be in upper case, the rest in lower case. Here are some examples:

A class representing a recipe should be called Recipe.
A class representing a quick recipe should be called QuickRecipe.
A class representing a yearly result should be called YearlyResult.

For example:
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