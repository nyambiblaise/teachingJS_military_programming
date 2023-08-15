/*
Defining getters and setters in a class is mostly used to validate or modify certain values before they are set as properties on a class. There are other use cases. We'll also cover the use case in front-end frameworks/libraries.

Let's take an example where we'd like to create a class User that has an age property. However, we'd like to always make sure that this age property is a number. For that, we define a setter for the age property. Here's what the setter looks like:
 */
class User{
    set age(value){
        console.log("some age");
        this._age = Number.parseInt(value,10);
    }
}